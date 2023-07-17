class SpikeDataController < ApplicationController
  def create
    spike_data = SpikeDatum.find_by(applicationId: '1')
    puts "==============================================#{spike_data.inspect}=========================="
    render json: spike_data
  end
end