Rails.application.routes.draw do

  devise_for :users

  root controller: :overview, action: :index
end
