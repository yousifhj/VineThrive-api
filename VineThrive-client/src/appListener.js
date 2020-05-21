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

    static getPlantListeners = () => {
        const viningPlantsLabel = document.getElementById('viningPlantsLabel')
        const easyCareLabel = document.getElementById('easyCareLabel')
        const bigIndoorLabel = document.getElementById('bigIndoorLabel')
        
        viningPlantsLabel.addEventListener('mouseover', (e) => {
            let label = viningPlantsLabel.dataset.label
            document.getElementById(label).classList.remove("hidden")
        })
        
        viningPlantsLabel.addEventListener('mouseout', (e) => {
            let label = viningPlantsLabel.dataset.label
            document.getElementById(label).classList.add("hidden")
        })
        easyCareLabel.addEventListener('mouseover', (e) => {
            let label = easyCareLabel.dataset.label
            document.getElementById(label).classList.remove("hidden")
        })
        
        easyCareLabel.addEventListener('mouseout', (e) => {
            let label = easyCareLabel.dataset.label
            document.getElementById(label).classList.add("hidden")
        })
        bigIndoorLabel.addEventListener('mouseover', (e) => {
            let label = bigIndoorLabel.dataset.label
            document.getElementById(label).classList.remove("hidden")
        })
        
        bigIndoorLabel.addEventListener('mouseout', (e) => {
            let label = bigIndoorLabel.dataset.label
            document.getElementById(label).classList.add("hidden")
        })
    }
}