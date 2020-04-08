class CreateVolcanos < ActiveRecord::Migration[6.0]
  def change
    create_table :volcanos do |t|
      t.string :image_url
      t.text :content
      t.string :elevation
      t.string :location
      t.string :ideal_for

      t.timestamps
    end
  end
end
