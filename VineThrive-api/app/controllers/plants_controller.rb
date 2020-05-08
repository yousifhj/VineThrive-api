class PlantsController < ApplicationController

    def index
        render :json => Plant.all, :include => :category
    end 

    def destroy
        plant = Plant.find(params[:id]).destroy
        if plant.destroy
            render json: { message: "Plant was successfully deleted"}
        # else 
        #     render json:{ message: "there was an error"}
        end
    end 
end
