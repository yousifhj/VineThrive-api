Rails.application.routes.draw do
  # resources :categories, only: :index
  # resources :plants, only: [:index, :destroy, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :categories do 
    resources :plants, only: [:index, :destroy, :create]
  end 

  post "categories/plants" => "plants#create"
  
  put "plants/:id" => "plants#update"
  resources :plants, only: [:index, :destroy]
end


