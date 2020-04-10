class User < ApplicationRecord
  has_many :favorites
  has_many :volcanoes, through: :favorites 
  has_secure_password
end
