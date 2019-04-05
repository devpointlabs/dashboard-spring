class CreateTopics < ActiveRecord::Migration[5.2]
  def change
    create_table :topics do |t|
      t.string :title
      t.datetime :topic_date
      t.text :topic_image

      t.timestamps
    end
  end
end
