class SustantivosController < ApplicationController
  before_action :set_sustantivo, only: [:show, :edit, :update, :destroy]



  def reto
    #Aqui se esta creando una variable que contiene toda la data de Mongo
    @sustantivos = Sustantivo.all
    @array = [];
    limite = @sustantivos.length;
    cont=0;
    #este while sirve para sacar palabras de forma aleatoria desde la base de datos
    while @array.length < 5
      aleatorio=rand(5)
      if @array.include?(@sustantivos[aleatorio].palabra)
      else
        cont+=1
        @array.push @sustantivos[aleatorio].palabra
        @sustantivos[aleatorio].palabra
      end
      end

  end

  def ahorcado
    @sustantivos = Sustantivo.all
  end
  # GET /sustantivos
  # GET /sustantivos.json
  def index
    @sustantivos = Sustantivo.all
  end

  # GET /sustantivos/1
  # GET /sustantivos/1.json
  def show
  end

  # GET /sustantivos/new
  def new
    @sustantivo = Sustantivo.new
  end

  # GET /sustantivos/1/edit
  def edit
  end

  # POST /sustantivos
  # POST /sustantivos.json
  def create
    @sustantivo = Sustantivo.new(sustantivo_params)

    respond_to do |format|
      if @sustantivo.save
        format.html { redirect_to @sustantivo, notice: 'Sustantivo was successfully created.' }
        format.json { render :show, status: :created, location: @sustantivo }
      else
        format.html { render :new }
        format.json { render json: @sustantivo.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /sustantivos/1
  # PATCH/PUT /sustantivos/1.json
  def update
    respond_to do |format|
      if @sustantivo.update(sustantivo_params)
        format.html { redirect_to @sustantivo, notice: 'Sustantivo was successfully updated.' }
        format.json { render :show, status: :ok, location: @sustantivo }
      else
        format.html { render :edit }
        format.json { render json: @sustantivo.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /sustantivos/1
  # DELETE /sustantivos/1.json
  def destroy
    @sustantivo.destroy
    respond_to do |format|
      format.html { redirect_to sustantivos_url, notice: 'Sustantivo was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sustantivo
      @sustantivo = Sustantivo.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def sustantivo_params
      params.require(:sustantivo).permit(:palabra, :comentario)
    end
end
