class CreateFavorites < ActiveRecord::Migration[6.0]
  def change
    create_table :favorites do |t|
      t.references :volcano, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.text :comment

      t.timestamps
    end
  end
end
