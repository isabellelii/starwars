Rails.application.routes.draw do


  devise_for :users

  root controller: :overview, action: :index

  resources :planets, only: :index
  resources :people, only: :index



end
