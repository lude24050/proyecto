class VerbosController < ApplicationController
  before_action :set_verbo, only: [:show, :edit, :update, :destroy]

  # GET /verbos
  # GET /verbos.json
  def index
    @verbos = Verbo.all
  end

  # GET /verbos/1
  # GET /verbos/1.json
  def show
  end

  # GET /verbos/new
  def new
    @verbo = Verbo.new
  end

  # GET /verbos/1/edit
  def edit
  end

  # POST /verbos
  # POST /verbos.json
  def create
    @verbo = Verbo.new(verbo_params)

    respond_to do |format|
      if @verbo.save
        format.html { redirect_to @verbo, notice: 'Verbo was successfully created.' }
        format.json { render :show, status: :created, location: @verbo }
      else
        format.html { render :new }
        format.json { render json: @verbo.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /verbos/1
  # PATCH/PUT /verbos/1.json
  def update
    respond_to do |format|
      if @verbo.update(verbo_params)
        format.html { redirect_to @verbo, notice: 'Verbo was successfully updated.' }
        format.json { render :show, status: :ok, location: @verbo }
      else
        format.html { render :edit }
        format.json { render json: @verbo.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /verbos/1
  # DELETE /verbos/1.json
  def destroy
    @verbo.destroy
    respond_to do |format|
      format.html { redirect_to verbos_url, notice: 'Verbo was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_verbo
      @verbo = Verbo.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def verbo_params
      params.require(:verbo).permit(:palabra, :significado)
    end
end
