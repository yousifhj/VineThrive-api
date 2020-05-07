class PlantsController < ApplicationController

    def index
        render :json => Plant.all, :include => :category
    end 

    def destroy
        Plant.find(params[:id]).destroy
        if plant.destroy
            render json: { message: "Plant deleted"}
        end
    end 
end
