import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AddEntry } from '../../store/action';

function ViewEntry(props) {
  const {isAddViewEntry, setIsAddViewEntry, index} = props;
  const dispatch = useDispatch();
  const [viewId, setViewId] = useState("");
  const [viewName, setViewName] = useState("");
  const view_entry = {
    view_id : viewId,
    name : viewName
  }
  const path = `['template_entry'][${index}]['view_entries']`
  const saveEntry = () => {
    setIsAddViewEntry(!isAddViewEntry);
    dispatch(AddEntry(path, view_entry));
    // console.log(path, view_entry);
  }
  return (
    <div>
      <h2>Add ViewEntry</h2>
      <label htmlFor='viewId'> viewId :</label>
      <input
      id='viewId'
      type="text"
      value={viewId}
      onChange={(e)=>{setViewId(e.target.value)}}></input>
      <br/>
      <label htmlFor='viewName'> viewName:</label>
      <input
      id='viewName'
      type="text"
      value={viewName}
      onChange={(e)=>{setViewName(e.target.value)}}></input>
      <br/>
      <button onClick={()=>{saveEntry()}}>Save ViewEntry</button>
    </div>
  )
}

export default ViewEntry
