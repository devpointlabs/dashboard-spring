class Api::TopicsController < ApplicationController
  before_action :set_topics, only: [:show, :update, :destroy]

  def index
    render json: Topic.all
  end

  def show
    render json: @topic
  end

  def create
    topic = Topic.new(topic_params)

    if topic.save
      render json: topic
    else
      render json: topic.errors, status: 422
    end
  end

  def update
    if @topic.update(topic_params)
      render json: @topic
    else
      render json: @topic.errors, status: 422
    end
  end

  def destroy
    @topic.destroy
  end

  private
    def set_topics
      @topic = Topic.find(params[:id])
    end

    def topic_params
      params.require(:topic).permit(:title, :topic_date, :topic_image,)
    end
end