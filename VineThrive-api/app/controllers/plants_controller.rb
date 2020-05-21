class PlantsController < ApplicationController
    before_action :set_plant, only: [:update, :destroy]
    def index
        render :json => Plant.all, :include => :category
    end 

    def create
        name = params[:name]
        category_name = params[:category]
        category = Category.where(name: category_name.downcase).take
        if category.present?
            plant = category.plants.create({
                name: name
            })
            puts plant.to_json
        end
        render json: plant
    end 

    def update
        @plant.update(like: !@plant.like)
        render json: @plant
    end

    def destroy
       @plant.destroy
       render :json => {id: params[:id], message: "Plant was successfully deleted"}
    end 

    private
        def plant_params
            params.require(:plant).permit(:name)
        end 

        def set_plant
            @plant = Plant.find(params[:id])
        end

end
