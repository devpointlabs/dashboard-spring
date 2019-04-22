class AddYearToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :year, :string
  end
end
