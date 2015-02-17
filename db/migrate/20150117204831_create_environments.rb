class CreateEnvironments < ActiveRecord::Migration
  def change
    create_table :environments do |t|
      t.string :name
      t.string :description
      t.string :color
      t.string :url

      t.timestamps
    end
  end
end
