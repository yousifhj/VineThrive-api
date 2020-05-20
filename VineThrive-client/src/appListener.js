class AppListener {
    static createDailyPlantsListener() {
        const btn = document.getElementById('createDailyPlants');
         const appcontainer = new AppContainer
        
        btn.addEventListener('click', () => {
            
          appcontainer.getRandomPlants()
        });
    } 

    static createPlantsListener = () => {
        const newPlantForm = document.getElementById('newPlant');
        const appcontainer = new AppContainer
        newPlantForm.addEventListener('submit', () => {
            appcontainer.createPlant(event)
        });
    }

}