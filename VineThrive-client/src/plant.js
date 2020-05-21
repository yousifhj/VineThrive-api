class Plant {
    constructor(id, name, category, like){
        this.name = name;
        this.category = category;
        this.id = id;
        this.like = like
        AppContainer.plants.push(this)
    }

    static byCategory(categoryName) {
        return AppContainer.plants.filter(plant => plant.category.name === categoryName)
    }
}