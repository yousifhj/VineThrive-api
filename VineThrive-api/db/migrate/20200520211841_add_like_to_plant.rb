class AddLikeToPlant < ActiveRecord::Migration[6.0]
  def change
    add_column :plants, :like, :boolean, null: false, default: false
  end
end
