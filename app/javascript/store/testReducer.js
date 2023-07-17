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
  // switch (action.type) {

  //   case "addAppData": {
  //     // const { path, value } = action.payload;
  //     // return dotPropImmutable.set(state, path, value);

  //     const template_entry=_.get(action.payload.value, 'configuration.template_entry');
  //     const template_id = _.get(template_entry[0], 'template_id');
  //     const view_entry = _.get(template_entry[0],'view_entry')
  //     const view_id = _.get(view_entry, 'view_id')
  //     const existing_template = _.find(state.configuration.template_entry,(temp)=>{
  //       return temp.template_id === template_id;
  //     })
  //     if(_.isUndefined(existing_template)) {
  //       return  dotProp.set(state,`configuration.template_entry.${state.configuration.template_entry.length}`, template_entry[0])
  //     } else {
  //       const view_entries = _.get(existing_template, 'view_entries');
  //       const existing_view_entry = _.find(view_entries,(view_entry)=>{
  //         return view_entry.view_id === view_id
  //       })
  //      if(_.isUndefined(existing_view_entry)) {
  //       const index = _.findIndex(state.configuration.template_entry, existing_template)
  //       return dotProp.set(state, `configuration.template_entry.${index}.view_entries.${view_entries.length}`, view_entry)
  //      }
  //     }
  //   }
  //   // case "deleteTemplate": {
  //   //   return dotPropImmutable.delete(state, action.payload.path)
  //   // }
  //   default:
  //     return state;
  // }
  // switch (action.type) {
  //   case 'updateAppData':
  //     const { path, value } = action
  //     return dotPropImmutable.set(state, path, value)
  //   case 'updateTemplateID':
  //     const { templateId, templateName } = action.payload;
  //     const existingTemplateIndex = state.configuration.templateEntry.findIndex(
  //       (template) => template.templateId === templateId
  //     );

  //     if (existingTemplateIndex !== -1) {
  //       // Update existing template entry
  //       const updatedViewEntry = { viewId: '', viewName: '' };
  //       const updatedViewEntries = [
  //         ...state.configuration.templateEntry[existingTemplateIndex].viewEntries,
  //         updatedViewEntry,
  //       ];

  //       return dotProp.set(
  //         state,
  //         `configuration.templateEntry.${existingTemplateIndex}.viewEntries`,
  //         updatedViewEntries
  //       );
  //     } else {
  //       // Add new template entry
  //       const newTemplateEntry = {
  //         templateId,
  //         templateName,
  //         viewEntries: [{ viewId: '', viewName: '' }],
  //       };

  //       return dotProp.set(
  //         state,
  //         'configuration.templateEntry',
  //         [...state.configuration.templateEntry, newTemplateEntry]
  //       );
  //     }
  //   case 'updateTemplateName': {
  //     const { templateIndex, templateName } = action.payload;
  //     return dotProp.set(state, `configuration.templateEntry.${templateIndex}.templateName`, templateName);
  //   }
  //   case 'updateViewId': {
  //     const { templateIndex, viewIndex, viewId } = action.payload;
  //     return dotProp.set(
  //       state,
  //       `configuration.templateEntry.${templateIndex}.viewEntries.${viewIndex}.viewId`,
  //       viewId
  //     );
  //   }
  //   case 'UPDATE_VIEW_NAME': {
  //     const { templateIndex, viewIndex, viewName } = action.payload;
  //     return dotProp.set(
  //       state,
  //       `configuration.templateEntry.${templateIndex}.viewEntries.${viewIndex}.viewName`,
  //       viewName
  //     );
  //   }
  //   case 'AddData': {

  //   }
  //   default:
  //     return state;
  //   }
  // }


// case "addAppData": {
//   const { templateId, viewId, viewName } = action.payload;
//   const templateIndex = state.configuration.templateEntry.findIndex(
//     (template) => template.templateId === templateId
//   );
//   if (templateIndex > -1) {
//     const updatedState = dotPropImmutable.push(
//       state,
//       `configuration.templateEntry.${templateIndex}.viewEntries`,
//       {
//         viewId,
//         viewName
//       }
//     );
//     return updatedState;
//   }
//   return state;


switch(action.type) {
  case "ADDData" : 
    return action.value
  case "updateData" :
    return dotPropImmutable.set(state, action.path, action.value)
  default :
    return state;
}

}