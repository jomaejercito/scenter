class CreatePerfumes < ActiveRecord::Migration[6.0]
  def change
    create_table :perfumes do |t|
      t.string :name
      t.string :image
      t.integer :likes

      t.timestamps
    end
  end
end
