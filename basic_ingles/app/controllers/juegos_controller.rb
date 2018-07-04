class JuegosController < ApplicationController

  def index
    @tabla_juego=Juego.all
  end
  def new
    @tabla_juego =Juego.new
  end
end
