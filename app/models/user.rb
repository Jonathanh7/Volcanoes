class User < ApplicationRecord
  has_many :favorites, dependent: :destroy
  has_many :volcanoes, through: :favorites
  has_secure_password

  validates :email, presence: true, uniqueness: { case_sensitive: false }
end
