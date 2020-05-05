class AppContainer {
    plants = []
    categories = []
    url = "http://localhost:3000"
    RandomPlants = {} 

    bindEventListners(){
        const btn = document.getElementById('createRandomPlants');
        btn.addEventListener('click', this.getFavotitePlants.bind(this))
    };

    getFavotitePlants() {
        let randomPlants = [];
        for (let i = 0; i < 4; i++) {
            debugger
            randomPlants.push(this.plants[Math.floor(Math.random()*this.plants.length)]);
        };

        return randomPlants;
    }


    getPlants() {
        // fetch reqeust to plants
        console.log('something');
        fetch(this.url + '/plants')
        .then(resp => resp.json())
        .then(data => console.log(data))
        // populate the plants and plants properties and returned data 
        // Call renderPlants
        .catch(err => alert(err));
    }

    renderPlants() {
        // create DOM nodes and indert data into and render DOM
    }
 }