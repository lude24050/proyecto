Rails.application.routes.draw do
  devise_for :users
  get 'bienvenida/index'
  get 'juego1/game1'
  resources :verbos
  root to:'bienvenida#index'
  get 'games/games'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
