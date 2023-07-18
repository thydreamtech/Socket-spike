import _ from 'lodash';
import dotPropImmutable from "dot-prop-immutable";
const initialState = {
  applicationId:'',
  configuration:{
    branding:{brandingName:'',brandingTitle:''},
    templateEntry:[]
  }
};

export default function testReducer(state = initialState, action) {
  switch(action.type) {
    case "ADDData" : 
      return action.value
    case "updateData" :
      return dotPropImmutable.set(state, action.path, action.value)
    case "deleteData" :
      return dotPropImmutable.delete(state, `${action.path}.${action.value}`)
      case "Add_entry" :
        return dotPropImmutable.set(state, `${action.path}.${(_.get(state, action.path)).length}`, action.value)
    default :
      return state;
  }
}