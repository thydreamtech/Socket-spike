class SpikeChannel < ApplicationCable::Channel
  def subscribed
    stream_from "spike_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def receive(data)
   case data['type']
   when 'updateData'
    update_entry(data)
   end
  end

  def update_entry(data)
    puts "===============Recived data ==============="
    puts "=========#{data}==========================="
    # path = data['key'].split('.')
    # puts "====================#{path}============"
    spike_data = SpikeDatum.find_by(applicationId: '1')
    template_data = spike_data.configuration
    target_value = data['data']
    path = data['key']
    puts "=================#{target_value}============="
    puts "=================#{path}==========="
    eval("template_data#{data['key']} = target_value")
    spike_data.update(configuration: template_data)
    puts "=======#{template_data}=============="
    puts "=========#{spike_data.inspect}========"
    ActionCable.server.broadcast("spike_channel", {path: path, value: target_value})
    # spike_data.data['key'] = data['value']
    # spike_data.save
    # updated = SpikeDatum.update_by()
  end
end

# Spike_datum = SpikeDatum.find_by(applicationId: '1')
# # keys = "configuration.template_entry.[0].view_entries.[0].name".split('.')
# keys = "applicationId".split('.')
# value = "2"

# keys.each_with_index do |key, index|
#   if key.include?('[') && key.include?(']')
#     array_key = key[/\[(.*?)\]/m, 1].to_i
#     nested_hash = nested_hash[array_key]
#   else
#     nested_hash = nested_hash[key]
#   end
# end

# p nested_hash

# Spike_datum.update("#{}": nested_hash[key])