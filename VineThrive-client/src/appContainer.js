class AppContainer {
    static plants = [];
    static categories = [];
    url = "http://localhost:3000"
    static dailyPlants = {};

    bindEventListners(){
        const btn = document.getElementById('createDailyPlants');
        btn.addEventListener('click', this.getRandomPlants);
    }

    getRandomPlants() {
        let randomPlants = [];
        AppContainer.categories.forEach(category => {
            randomPlants.push(Plant.byCategory(category.name)[Math.floor(Math.random()*Plant.byCategory(category.name).length)]);
        });
        // insiantiate a DailyPlants instance with these Plants
        new DailyPlants(randomPlants)
        // insert data into DOM
        const dailyPlantsDiv = document.getElementById('dailyPlants');
        AppContainer.dailyPlants.plants.forEach(plant => {
            const plantDiv = document.createElement('div');
            plantDiv.innerText = plant.name;
            dailyPlantsDiv.appendChild(plantDiv);
        })

        randomPlants.forEach(randomPlants => {
            fetch(`http://localhost:3000/plants/${randomPlants[0].id}`, {
                method: 'DELETE',
            })
            .then(resp => resp.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
        })

    }

    getPlants() {
        // fetch reqeust to /plants
            console.log('something');
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