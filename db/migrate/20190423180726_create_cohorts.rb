class CreateCohorts < ActiveRecord::Migration[5.2]
  def change
    create_table :cohorts do |t|
      t.string :season
      t.string :year

      t.timestamps
    end
  end
end
