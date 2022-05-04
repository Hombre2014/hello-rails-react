Rails.application.routes.draw do
  namespace :v1, defaults: { format: 'json' } do
    get 'greetings', to: 'greetings#index'
  end
  root "static#index"
end
