class ChangeName < ActiveRecord::Migration[6.1]
  def change
    add_column :reviews, :comment, :string 
  end
end
