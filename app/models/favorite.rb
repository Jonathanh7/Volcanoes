class Favorite < ApplicationRecord
  belongs_to :volcano
  belongs_to :user

  def to_builder
    Jbuilder.new do |favorite|
      favorite.id id
      favorite.volcano_name volcano.name
    end
  end

  def data
    to_builder.target!
  end
end
