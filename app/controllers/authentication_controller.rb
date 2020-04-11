class AuthenticationController < ApplicationController
  before_action :authorize_request, except: :login
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

end