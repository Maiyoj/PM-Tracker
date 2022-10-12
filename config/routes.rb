Rails.application.routes.draw do
  resources :clients
  resources :tickets
  resources :projects
  resources :users, only:[:create, :show, :index]
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
