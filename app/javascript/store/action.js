import consumer from "../channels/consumer"
export const addAppData=(type, value, path)=>{
  return{
    type: type,
    value: value
  }
}

export const updateAfter = (type, value, path)=>{
  return{
    type:type,
    value:value,
    path:path
  }
}

export const deleteAfter = (type, value, path) => {
  return {
    type:type,
    value: value,
    path: path
  }
}

export const deleteEntry = (type, path, deletionIndex) => {
consumer.subscriptions.subscriptions[0].send({key: path, type: type, index: deletionIndex})
}

export const updateData = (type, value, path) => {
  consumer.subscriptions.subscriptions[0].send({data: value, key: path, type: type})
  // return{
  //   type: type,
  //   path: path,
  //   value: value
  // }
}

export const AddEntry = (path, value) => {
  consumer.subscriptions.subscriptions[0].send({data: value, key: path, type: "Add_entry"})
}

export const AddAfter = (type, value, path) => {
  return {
    type:type,
    value: value,
    path: path
  }
}