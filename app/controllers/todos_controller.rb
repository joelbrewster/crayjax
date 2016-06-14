class TodosController < ApplicationController
  def create
    render json: params.to_json
  end
end
