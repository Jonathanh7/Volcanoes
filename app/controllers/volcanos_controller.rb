class VolcanosController < ApplicationController
  before_action :set_volcano, only: [:show, :update, :destroy]

  # GET /volcanos
  def index
    @volcanos = Volcano.all

    render json: @volcanos
  end

  # GET /volcanos/1
  def show
    render json: @volcano, include: [favorite: {include: :users}] 
  end

  # POST /volcanos
  def create
    @volcano = Volcano.new(volcano_params)

    if @volcano.save
      render json: @volcano, status: :created, location: @volcano
    else
      render json: @volcano.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /volcanos/1
  def update
    if @volcano.update(volcano_params)
      render json: @volcano, status: :ok
    else
      render json: @volcano.errors, status: :unprocessable_entity
    end
  end

  # DELETE /volcanos/1
  def destroy
    @volcano.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_volcano
      @volcano = Volcano.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def volcano_params
      params.require(:volcano).permit(:name, :image_url, :content, :elevation, :location, :ideal_for)
    end
end
