class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :projectname
      t.string :description
      t.integer :client_id
      t.timestamps
    end
  end
end
