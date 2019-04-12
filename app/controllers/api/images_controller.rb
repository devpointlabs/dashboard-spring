class Api::ImagesController < ApplicationController
  before_action :set_image, only: [:show, :update, :destroy]

  def index
    render json: Image.all
  end

  def show
    render json: @image
  end

  def create
    image = Image.new(image_params)

    if image.save
      render json: image
    else
      render json: image.errors, status: 422 
    end
  end

  def update
    if @image.update(image_params)
      render json: @image
    else
      render json: @images.errors, status: 422
    end
  end

  def destroy
    @image.destroy
  end

  private
    def set_image
      @image = Image.find(params[:id])
    end

    def image_params
      params.require(:image).permit(:image_url)
    end

end
