class Plant {
    constructor(name, category){
        this.name = name;
        this.category = category;
        AppContainer.plants.push(this)
    }

    static byCategory(categoryName) {
        return AppContainer.plants.filter(plant => plant.category.name === categoryName)
    }
}