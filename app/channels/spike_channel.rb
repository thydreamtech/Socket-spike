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
   when 'deleteData'
    delete_entry(data)
   when 'Add_entry'
    Add_entry(data)
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
    ActionCable.server.broadcast("spike_channel", {path: path, value: target_value, type: data['type']})
    # spike_data.data['key'] = data['value']
    # spike_data.save
    # updated = SpikeDatum.update_by()
  end

  def delete_entry(data)
    puts "======================deletion Recived====================="
    puts "===============#{data}=========================="
    spike_data = SpikeDatum.find_by(applicationId: '1')
    template_data = spike_data.configuration
    eval("template_data#{data['key']}.delete_at(#{data['index']})")
    spike_data.update(configuration: template_data)
    puts "==============Deleted Succesfully========="
    ActionCable.server.broadcast("spike_channel", {path: data['key'], value: data['index'], type: data['type']})
  end

  def Add_entry(data)
    puts "============#{data}==================="
    spike_data = SpikeDatum.find_by(applicationId: '1')
    template_data = spike_data.configuration
    puts "===============#{template_data}================"
    eval("template_data#{data['key']}.push(#{data['data']})")
    spike_data.update(configuration: template_data)
    puts "==============Added Succesfully========="
    ActionCable.server.broadcast("spike_channel", {path: data['key'], value: data['data'], type: data['type']})
  end
end