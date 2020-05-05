class AppContainer {
    notes = []
    plants = []
    url = "http://localhost:3000"
    favoritePlants = {} 

    bindEventListners(){
        const btn = document.getElementById('createFavoritePlants');
        btn.addEventListener('click', this.getFavotitePlants)
    };

    getFavotitePlants() {
        this.constructor 
    }

    getNotes() {
        // fetch reqeust to notes
        console.log('something');
        fetch(this.url + '/notes')
        .then(resp => resp.json())
        .then(data => console.log(data))
        // populate the notes and plants properties and returned data 
        // Call renderNotes
        .catch(err => alert(err));
    }

    renderNotes() {
        // create DOM nodes and indert data into and render DOM
    }
 }