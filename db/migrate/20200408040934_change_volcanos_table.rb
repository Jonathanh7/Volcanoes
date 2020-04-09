class ChangeVolcanosTable < ActiveRecord::Migration[6.0]
  def change
    add_column :volcanos, :name, :string
  end
end
