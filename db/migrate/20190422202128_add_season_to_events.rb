class AddSeasonToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :season, :string
  end
end
