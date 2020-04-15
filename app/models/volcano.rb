class Volcano < ApplicationRecord
  has_many :favorites, dependent: :destroy
  #has_many :users, through: :favorites

  validates_presence_of :image_url, :content, :elevation, :location, :ideal_for, :name
end
