class PlantsController < ApplicationController

    def index
        render :json => Plant.all, :include => :category
    end 

    def create
        category = Category.find_by(name: params[:category])
        plant = Plant.create(name: params[:name], category: category)
        render :json => plant

        # plant = Plant.new(plant_params)
        # if plant.save 
        #     render json: plant, status: :created
        # else 
        #     render json: plant.errors, status: :unprocessable_entity
        # end
    end 

    def destroy
       Plant.find(params[:id]).destroy
        render :json => {id: params[:id], message: "Plant was successfully deleted"}
          # if plant.destroy
          # else 
        #     render json:{ message: "there was an error"}
        #end
    end 

    private
    def plant_params
        params.require(:plant).permit(:name)
    end 

end
