class PlantsController < ApplicationController

    def index
        render :json => Plant.all, :include => :notes
    end 

end
