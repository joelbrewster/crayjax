class TodosController < ApplicationController
  def create
    todo = Todo.create(todos_params)
    render json: todo.to_json
  end

  def todos_params
    params.require(:todo).permit(:task)
  end
end
