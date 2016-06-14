Rails.application.routes.draw do
  root to: 'dashboard#index'
  resources :todos
  devise_for :users, :path => '', :path_names => { :sign_in => 'login', :sign_out => 'logout' }
end
