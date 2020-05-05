class CategoriesController < ApplicationController

    def index
        render :json => Category.all, :include => :plants
    end 

end
