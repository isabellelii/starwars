Rails.application.routes.draw do


  get 'speices/index'

  devise_for :users

  root controller: :overview, action: :index

  resources :planets, only: :index
  resources :people, only: :index
  resources :films, only: :index




end
