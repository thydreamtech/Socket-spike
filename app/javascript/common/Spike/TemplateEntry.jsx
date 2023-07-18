import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AddEntry } from '../../store/action';

function TemplateEntry(props) {
  const {isAddTemplate, setIsAddTemplate} = props;
  const dispatch = useDispatch();
  const [templateId, setTemplateID] = useState("");
  const [templateName, setTemplateName] = useState("");
  const [viewId, setViewId] = useState("");
  const [viewName, setViewName] = useState("");
  const template_entry = {
    template_id : templateId,
    name : templateName,
    view_entries : [
      {
        view_id : viewId,
        name : viewName
      }
    ]
  }

  const AddTemplate = () =>{
    setIsAddTemplate(!isAddTemplate);
    dispatch(AddEntry(`['template_entry']`, template_entry))
  }
  return (
    <div>
      <h2>New Template</h2>
      <label htmlFor='TemplateID'>TemplateID :</label>
      <input
      id='TemplateID'
      value={templateId}
      onChange={(e)=>{setTemplateID(e.target.value)}}></input>
      <label htmlFor='TemplateName'>TemplateName :</label>
      <input id='TemplateName'
      value={templateName}
      onChange={(e)=>{setTemplateName(e.target.value)}}></input>
      <br/>
      <label htmlFor='viewId'> viewId :</label>
      <input
      id='viewId'
      type="text"
      value={viewId}
      onChange={(e)=>{setViewId(e.target.value)}}></input>
      <label htmlFor='viewName'> viewName:</label>
      <input
      id='viewName'
      type="text"
      value={viewName}
      onChange={(e)=>{setViewName(e.target.value)}}></input>
      <button onClick={()=>{AddTemplate()}}>Save Template</button>
    </div>
  )
}

export default TemplateEntry
