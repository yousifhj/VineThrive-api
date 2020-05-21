
class AppContainer {
    
    static plants = [];
    static categories = [];
     url = "http://localhost:3000"
    static dailyPlants = {};

    
    bindEventListeners() {
        AppListener.createPlantsListener();
        AppListener.createDailyPlantsListener();
        AppListener.getPlantListeners();
    }

    // this = instace of app container  
    createPlant(event) {
        event.preventDefault();
        const data = event.target;
        const category = document.getElementById('categorySelect').value
        console.log(category)
        fetch(`${this.url}/categories/plants`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
              name: data.plant.value,
              category: document.getElementById('categorySelect').value
            })
        })
        .then(res => res.json()
        ).then(res => {
            
            console.log('response',res)
            const container = document.getElementById(category)
            const div = document.createElement('div')
            const p = document.createElement('p')
            p.innerHTML=  res.name
            const btn = document.createElement('button')
            btn.classList.add('btn', 'float-right')
            const icon = document.createElement('i')
            icon.classList.add('fa', 'fa-heart-o')
            icon.setAttribute("id", `icon-${res.id}`)
            btn.appendChild(icon)
            btn.addEventListener ('click', () => { this.starPlant(res.id) })
            p.appendChild(btn)
            div.appendChild(p);
            div.setAttribute("id", `plant-${res.id}`)
            
            container.appendChild(div)
            
            document.getElementById("plant_name_input").value = ""

        }).catch(err => {
            console.log(err)
            console.log('done')
        })
    }

    getRandomPlants() {
        let randomPlants = [];
        
        AppContainer.categories.forEach(category => {
            console.log(category)
            randomPlants.push(Plant.byCategory(category.name)[Math.floor(Math.random()*Plant.byCategory(category.name).length)]);
        });
        // insiantiate DailyPlants with these Plants
        new DailyPlants(randomPlants)
        const dailyPlantsDiv = document.getElementById('dailyPlants')
        dailyPlantsDiv.innerHTML = ""
        AppContainer.dailyPlants.plants.forEach(plant => {
            const container = document.querySelector('.container');
            const plantDiv = document.createElement('div');

            const plantName = plant.name;
            plantDiv.innerText = plantName;
            plantDiv.setAttribute("class", "plants")

            const plantId = plant.id;
            plantDiv.setAttribute("id", plantId)

            const remove = document.createElement('button');
            remove.classList.add('remove', 'btn', 'btn-danger', 'btn-sm', 'float-right');
            remove.setAttribute("id", plantId);
            remove.innerHTML = "REMOVE";
            remove.addEventListener ('click', () => {this.removePlant(plantId)});
            container.appendChild(dailyPlantsDiv);
            dailyPlantsDiv.appendChild(plantDiv);
            plantDiv.appendChild(remove);
        })
    }

    starPlant (id) {
        fetch(`${this.url}/plants/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => res.json())
        .then(res => {
            const icon = document.getElementById(`icon-${res.id}`)
            if (res.like) {
                icon.classList.add("fa-heart")
                icon.classList.remove("fa-heart-o")
            } else {
                icon.classList.add("fa-heart-o")
                icon.classList.remove("fa-heart")
            }

        }).catch(err => {
            console.log(err)
        })
    }

    removePlant(id) {
        fetch(`${this.url}/plants/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => {
            console.log('success remove', id)
            let elem = document.getElementById(id)
            let plant = document.getElementById(`plant-${id}`)
            console.log(plant)
            plant.remove()
            elem.remove()
         }).catch(err => {
            console.log(err)
        })
    }

    getPlants() {
        fetch(this.url + '/plants')
        .then(resp => resp.json())
        .then(data => {
            data.forEach(plant => {
                new Plant(plant.id, plant.name, plant.category, plant.like)
                if (!AppContainer.categories.map(category => category.name).includes(plant.category.name)) {
                    new Category(plant.category.name)
                }
            });

            this.renderPlants();
        })
        .catch(err => alert(err));
    };

    renderPlants() {
        // create DOM nodes and indert data into and render DOM 
        const viningPlantsDiv = document.getElementById('viningPlants');
        const easyCareDiv = document.getElementById('easyCare');
        const bigIndoorDiv = document.getElementById('bigIndoor');
        viningPlantsDiv.innerHTML = "";
        easyCareDiv.innerHTML = "";
        bigIndoorDiv.innerHTML = "";

        AppContainer.plants.forEach(plant => {
            const div = document.createElement('div');
            const p = document.createElement('p')
            p.innerHTML=  plant.name
            const btn = document.createElement('button')
            btn.classList.add('btn', 'float-right')
            const icon = document.createElement('i')
            if (plant.like) {
                icon.classList.add('fa', 'fa-heart')
            } else {
                icon.classList.add('fa', 'fa-heart-o')
            }
            
            icon.setAttribute("id", `icon-${plant.id}`)
            btn.appendChild(icon)
            btn.addEventListener ('click', () => { this.starPlant(plant.id) })
            p.appendChild(btn)
            div.appendChild(p);
            div.setAttribute("id", `plant-${plant.id}`);
            
            // append will be conditional based on what category it belongs to
            switch (plant.category.name) {
                case "viningplants":
                    viningPlantsDiv.appendChild(div);
                    break;
                case "easycare":
                    easyCareDiv.appendChild(div);
                    break;
                case "bigindoor":
                    bigIndoorDiv.appendChild(div);
                    break;
                default:
            }
        })
    }
 }