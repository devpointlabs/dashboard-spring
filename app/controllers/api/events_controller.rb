class Api::EventsController < ApplicationController
  before_action :set_event, only: [:show, :update, :destroy]

  def index
    render json: Event.all.map{|event|{title: event.title, start_time:event.start_time.strftime("%Y-%m-%d %I:%M%p"),
    end_time:event.end_time.strftime("%Y-%m-%d %I:%M%p")}}
  end

  def show
    render json: @event
  end

  def create
    event = Event.new(event_params)
    start_time = DateTime.now + 1
    endtime = DateTime.now + 2
    event.start_time = start_time
    event.end_time = endtime

    if event.save
      render json: event
    else
      render json: event.errors, status: 422
    end
  end

  def update
    if @event.update(event_params)
      render json: @event
    else
      render json: @event.errors, status: 422
    end
  end

  def destroy
    @event.destroy
  end

  private
    def set_event
      @event = Event.find(params[:id])
    end

    def event_params
      params.require(:event).permit(:title, :start_time, :end_time)
    end
end