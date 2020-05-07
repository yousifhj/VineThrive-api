class Plant {
    constructor(id, name, category){
        this.name = name;
        this.category = category;
        this.id = id;
        AppContainer.plants.push(this)
    }

    static byCategory(categoryName) {
        return AppContainer.plants.filter(plant => plant.category.name === categoryName)
    }
}