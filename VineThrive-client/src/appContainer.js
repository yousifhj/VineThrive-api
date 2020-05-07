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
        console.log('hello')
        let randomPlants = [];
        AppContainer.categories.forEach(category => {
            randomPlants.push(Plants.byCategory(category.name)[Math.floor(Math.random()*AppContainer.plants.length)]);
        });
        // insiantiate a DailyPlants instance with these Plants
        new DailyPlants(randomPlants)
        // insert data into DOM
        const dailyPlantsDiv = document.getElementById('dailyPlants');
        AppContainer.dailyPlants.plants.forEach(dailyPlants => {
            const plantDiv = document.createElement('div');
            plantDiv.innerText = dailyPlants.name;
            dailyPlantsDiv.appendChild(plantDiv);
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
                new Plant(plant.name, plant.category)
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

    }
 }