class CreateTickets < ActiveRecord::Migration[7.0]
  def change
    create_table :tickets do |t|
      t.integer :project_id
      t.string :description
      t.string :priority
      t.string :enviroment
      t.string :type
      t.string :status
      t.string :comment
      t.integer :user_id

      t.timestamps
    end
  end
end
