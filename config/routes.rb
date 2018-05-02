Rails.application.routes.draw do
  devise_for :users

  root controller: :overview, action: :index

  resources :planets, only: :index
  resources :people, only: :index
  resources :films, only: :index
  resources :speices, only: :index
  resources :vehicles, only: :index
  resources :spaceships, only: :index
end
