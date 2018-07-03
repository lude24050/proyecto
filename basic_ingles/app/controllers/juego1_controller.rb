class Juego1Controller < ApplicationController
  def game1
    @verbos = Verbo.all
    @l_palabra = Array.new
    @l_significado=Array.new
    # @verbos.each do |verbo|
    #   @l_palabra << verbo.palabra
    # end
    cont = @verbos.length
    num_ale = []
#Capturar 5 numeros aleatorios de la base de datos
    while num_ale.length < 4
      num=rand(cont)
      if num_ale.include?(num)
      else
        num_ale << num
        @l_palabra << @verbos[num]
      end
    end
    @l_significado=@l_palabra[rand(@l_palabra.count)]
  end
end
