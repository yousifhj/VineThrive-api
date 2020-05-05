class CreatePlants < ActiveRecord::Migration[6.0]
  def change
    create_table :plants do |t|
      t.string :name
      t.integer :price
      t.string :description
      t.string :light
      t.string :water

      t.timestamps
    end
  end
end
