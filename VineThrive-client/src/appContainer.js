class AppContainer {
    static plants = [];
    static categories = [];
     url = "http://localhost:3000"
    static dailyPlants = {};

    bindEventListners(){
        const btn = document.getElementById('createDailyPlants');
        btn.addEventListener('click', () => this.getRandomPlants());

        const newPlantForm = document.getElementById('newPlant');
        newPlantForm.addEventListener('submit', () => this.createPlant(event));
    }

    // this = instace of app container  
    createPlant(event) {
        event.preventDefault();
        // const form = document.getElementById('newPlant')
        const data = event.target;
        fetch(`${this.url}/categories/${id}/plants`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
              name: data.plant.value,
              category: data.children[2].value
            })
        })
        .then(resp => resp.json())
        .then(data => {
            debugger
            AppContainer.plants.push(new Plant(data))
        })
        .catch(err => console.log(err));
    }

    getRandomPlants() {
        let randomPlants = [];
        AppContainer.categories.forEach(category => {
            randomPlants.push(Plant.byCategory(category.name)[Math.floor(Math.random()*Plant.byCategory(category.name).length)]);
        });
        // insiantiate DailyPlants with these Plants
        new DailyPlants(randomPlants)
        // insert data into DOM
        AppContainer.dailyPlants.plants.forEach(plant => {
            const container = document.querySelector('.container');
            const dailyPlantsDiv = document.getElementById('dailyPlants');
            const plantDiv = document.createElement('div');

            const plantName = plant.name;
            plantDiv.innerText = plantName;
            plantDiv.setAttribute("class", "plants")

            const plantId = plant.id;
            plantDiv.setAttribute("id", plantId)

            const remove = document.createElement('button');
            remove.classList.add('remove');
            remove.setAttribute("id", plantId);
            remove.innerHTML = "REMOVE";
            remove.addEventListener ('click', () => this.remove(plantDiv, plantId));
            
            // ('click', () => {removePlant(plantId)});
            // ('click', () => this.remove(plantDiv, plantId));
            
            container.appendChild(dailyPlantsDiv);
            dailyPlantsDiv.appendChild(plantDiv);
            plantDiv.appendChild(remove);
        })

        // randomPlants.forEach(plant => {
        //     fetch(`${this.url}/plants/${plant.id}`, {
        //         method: 'DELETE',
        //     })
        //     .then(resp => resp.json())
        //     .then(data => console.log(data))
        //     .catch(err => console.log(err))
        // })

    }

    getPlants() {
        // fetch reqeust to /plants
        fetch(this.url + '/plants')
        .then(resp => resp.json())
        // populate the plants and plants properties and returned data 
        .then(data => {
            console.log(data)
            data.forEach(plant => {
                new Plant(plant.id, plant.name, plant.category)
                if (!AppContainer.categories.map(category => category.name).includes(plant.category.name)) {
                   new Category(plant.category.name)
                }
            });
            // Call renderPlants
            this.renderPlants();
        })
        .catch(err => alert(err));
    };

    renderPlants() {
        // create DOM nodes and indert data into and render DOM 
        
        const viningPlantsSelect = document.getElementById('viningPlants');
        const easyCareSelect = document.getElementById('easyCare');
        const bigIndoorSelect = document.getElementById('bigIndoor');
        AppContainer.plants.forEach(plant => {
            const option = document.createElement('option');
            option.innerText = plant.name;
            // where we append will be conditional based on what category it belongs to
            switch (plant.category.name) {
                case "viningplants":
                    viningPlantsSelect.appendChild(option);
                    break;
                case "easycare":
                    easyCareSelect.appendChild(option);
                    break;
                case "bigindoor":
                    bigIndoorSelect.appendChild(option);
                    break;
                default:
            }
        })
    }
 }