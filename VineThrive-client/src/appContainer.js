class AppContainer {
    notes = []
    plants = []
    url = "http://localhost:3000"
    favoritePlants = {} 

    getNotes() {
        // fetch reqeust to notes
        fetch(this.url + '/notes')
        .then(resp => resp.json())
        .then(data => console.log(data))
        // populate the notes and plants properties and returned data 
        // Call renderNotes
        .catch(err => alert(err))
    }

    renderNotes() {
        // create DOM nodes and indert data into and render DOM
    }
 }