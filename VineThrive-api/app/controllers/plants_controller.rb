class PlantsController < ApplicationController

    def index
        render :json => Plant.all, :include => :categories
    end 

end
