class UsersController < ApplicationController
  before_action :set_user, only: %i[ show update destroy ]
  skip_before_action :authorize, only: [:create, :index, :show, :update, :destroy]

  def index
    users = User.all
    render json: users
  end
  
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
end

def show
    user = User.find_by(id: session[:user_id])
    render json: user
end

def destroy
  @user.destroy
end

  

  private
    
  def user_params
      params.permit(:name, :email, :password)
  end

  def set_user
    @user = User.find(params[:id])
  end


end
