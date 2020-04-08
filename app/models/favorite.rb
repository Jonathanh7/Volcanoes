class Favorite < ApplicationRecord
  belongs_to :volcano
  belongs_to :user
end
