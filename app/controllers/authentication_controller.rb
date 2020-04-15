class AuthenticationController < ApplicationController
  before_action :authorize_request, except: :login
  attr_reader :current_user

  def login
    @user = User.find_by_email(login_params[:email])
    if @user.authenticate(login_params[:password])
      token = encode(user_id:@user.id, email:@user.email)
      render json: {user: @user, token: token}, status: :ok
    else
      render json: {error:'unauthorized'}, status: :unauthorized
    end
  end

  def verify
    render json: @current_user, status: :ok
  end

  private

  def login_params
    params.require(:authentication).permit(:email, :password)
  end

  def authorize_request
    #raise "Invalid Request"
    
    if request.headers['Authorization']
      begin
        data = JWT.decode(request.headers['Authorization'].gsub("Bearer ", ""), ApplicationController::SECRET_KEY)[0]
        @current_user = User.where(email: data["email"]).take!
      rescue => error
        unless current_user
          render json: { message: "Unauthorized Access #{error.message}"}, status: :unauthorized
        end
      end
    else
      render json: { message: "Unauthorized Access" }, status: :unauthorized
    end
  end

end
