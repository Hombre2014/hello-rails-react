class V1::GreetingsController < ApplicationController
  def index
    @greeting = Greeting.order('RANDOM()').first
    if @greeting
      render json: { success: true, message: 'Greeting message', data: { greeting: @greeting } }, status: :ok
    else
      render json: { success: false, errors: 'Something went wrong!' }, status: :unprocessable_entity
    end
  end
end
