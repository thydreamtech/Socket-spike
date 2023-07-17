class CreateSpikeData < ActiveRecord::Migration[7.0]
  def change
    create_table :spike_data do |t|
      t.string :applicationId
      t.json :configuration 
      t.timestamps
    end
  end
end
