class Verbo
  include Mongoid::Document
  include Mongoid::Timestamps

  field :palabra, type: String
  field :significado, type: String
end
