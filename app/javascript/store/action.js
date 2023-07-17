import consumer from "../channels/consumer"
// export const addAppData = (type, path, value, templateEntries) => {
//   if (!_.isUndefined(templateEntries)) {
//     const templateId = value.templateId;
//     const existingTemplate = _.find(templateEntries, (tempEntry) => tempEntry.templateId === templateId);
//     const templateIndex = _.findIndex(templateEntries, existingTemplate);

//     if (_.isUndefined(existingTemplate)) {
//       return {
//         type: type,
//         path: path,
//         value: value
//       };
//     } else {
//       const viewEntries = _.get(existingTemplate, 'viewEntries');
//       const newViewEntry = value.viewEntries[0];
//       const viewId = newViewEntry.viewId;
//       const existingViewEntryIndex = _.findIndex(viewEntries, (viewEntry) => viewEntry.viewId === viewId);

//       if (existingViewEntryIndex === -1) {
//         const updatedViewEntries = [...viewEntries, newViewEntry];
//         const updatedTemplateEntry = { ...existingTemplate, viewEntries: updatedViewEntries };
//         const updatedTemplateEntries = [...templateEntries];
//         updatedTemplateEntries[templateIndex] = updatedTemplateEntry;

//         return {
//           type: type,
//           path: 'configuration.templateEntry',
//           value: updatedTemplateEntries
//         };
//       } else {
//         const updatedViewEntries = [...viewEntries];
//         updatedViewEntries[existingViewEntryIndex] = newViewEntry;
//         const updatedTemplateEntry = { ...existingTemplate, viewEntries: updatedViewEntries };
//         const updatedTemplateEntries = [...templateEntries];
//         updatedTemplateEntries[templateIndex] = updatedTemplateEntry;

//         return {
//           type: type,
//           path: 'configuration.templateEntry',
//           value: updatedTemplateEntries
//         };
//       }
//     }
//   } else {
//     return {
//       type: type,
//       path: path,
//       value: value
//     };
//   }
// };


// export const addAppData=(type, path, value, templateEntries)=>{

//   if(!_.isUndefined(templateEntries)) {
//     const template_id = value.templateId;
//     const existing_template = _.find(templateEntries,(tempEntry) => {
//       return tempEntry.templateId === template_id
//     })
//     const templateIndex = _.findIndex(templateEntries, existing_template);
//     if(_.isUndefined(existing_template)) {
//       return {
//         type : type,
//         path: path,
//         value: value
//       }
//     } else {
//       const view_entries = _.get(existing_template, 'viewEntries');
//       const new_view_Entry = value.viewEntries[0];
//       const view_Id = new_view_Entry.viewId;
//       const existing_viewEntry = _.find(view_entries, (view_entry) => {
//         return view_entry.viewId === view_Id
//       })
//       const viewIndex=_.findIndex(view_entries,existing_viewEntry)
//       if(_.isUndefined(existing_viewEntry)) {
//           return {
//             type : type,
//             path : `configuration.templateEntry.${templateIndex}.viewEntries.${view_entries.length}`,
//             value : new_view_Entry
//           }
//       }else{
//         return{
//           type:type,
//           path:`configuration.templateEntry.${templateIndex}.viewEntries.${viewIndex}`,
//           value:new_view_Entry
//         }
//       }
//     }
//   } else {
//     return{
//       type:type,
//       path:path,
//       value:value
//     }
//   }
// }

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

export const updateData = (type, value, path) => {
  consumer.subscriptions.subscriptions[0].send({data: value, key: path, type: type})
  // return{
  //   type: type,
  //   path: path,
  //   value: value
  // }
}