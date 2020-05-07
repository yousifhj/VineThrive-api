class PlantsController < ApplicationController

    def index
        render :json => Plant.all, :include => :category
    end 

end
