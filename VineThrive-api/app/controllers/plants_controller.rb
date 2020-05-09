class PlantsController < ApplicationController

    def index
        render :json => Plant.all, :include => :category
    end 

    def create
        if params[:category_id]
            category = Category.find(params[:category_id])
            plant = category.plants.build(plant_params)
            if plant.save 
                render :json => plant, :include => :category
            end
        end 

        # category = Category.find_by(name: params[:category])
        # plant = Plant.create(name: params[:name], category: category)
        # render :json => plant, :include => :category

        # plant = Plant.new(plant_params)
        # if plant.save 
        #     render json: plant, status: :created
        # else 
        #     render json: plant.errors, status: :unprocessable_entity
        # end
    end 

    def destroy
       plant = Plant.find(params[:id])
       plant.destroy
       render :json => {id: params[:id], message: "Plant was successfully deleted"}
    end 

    private
    def plant_params
        params.require(:plant).permit(:name)
    end 

end
