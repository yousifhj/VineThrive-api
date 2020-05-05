class NotesController < ApplicationController
   
    def index
        render :json => Note.all, :include => :plant
    end 

end
