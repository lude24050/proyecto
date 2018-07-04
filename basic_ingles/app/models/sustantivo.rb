class Sustantivo
  include Mongoid::Document
  field :palabra, type: String
  field :comentario, type: String
end
