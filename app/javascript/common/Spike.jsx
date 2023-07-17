import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAppData, updateAfter, updateData } from "../store/action";
import _ from "lodash";
import consumer from "../channels/consumer";


const Spike = () => {
  const appData = useSelector((state)=>state.test);
  const branding = _.get(appData,'configuration.branding');
  const applicationId = _.get(appData, 'applicationId');
  const dispatch = useDispatch();

  const [path, setPath] = useState();
  const [value, setValue] = useState();
  const [templateData, setTemplateData] = useState([]);

  useEffect(()=>{
    setTemplateData(_.get(appData,'configuration.template_entry'))
  }, [appData])
  const fetchData = async() => {
   const response = await fetch('spike_data');
   const data = await response.json();
   dispatch(addAppData('ADDData',data))
  }

  const handleAddRow = () => {
    setTemplateData([
      ...templateData,
      { template_id: "", name: "", view_entries: [{ view_id: "", name: "" }] },
    ]);
  };

  const saveTemplateData = () => {
    // console.log(path, value)
    dispatch(updateData('updateData', value, path));
  }
  const handleInputChange = (index, fieldName, value) => {
    _.set(templateData[index],fieldName,value);
    const convertedPath = fieldName.split(".").reduce((acc, key) => {
      if (/\d+/.test(key)) {
        acc += `[${key}]`;
      } else {
        acc += `['${key}']`;
      }
      return acc;
    }, "");
    setPath(`['template_entry'][${index}]${convertedPath}`);
    setValue(value);
    setTemplateData([...templateData]);

  };

  const handleWebSocketData = (path, value) => {
    dispatch(updateAfter('updateData', value, path))
  }

  useEffect(() => {
    fetchData();
    const cableSubscription = consumer.subscriptions.create("SpikeChannel", {
      received: (data) => {
        console.log("WebSocket data received:", data);
        const convertPath = (path) => {
          return path
            .replace(/\['([^']+)'\]/g, ".$1")
            .replace(/\[(\d+)\]/g, ".$1");
        };
        handleWebSocketData(
          `configuration${convertPath(data.path)}`,
          data.value
        );
      },
    });
    console.log("WebSocket connection established");

    return () => {
      consumer.subscriptions.remove(cableSubscription);
      console.log("WebSocket connection closed");
    };
  }, []);
  if(_.isUndefined(templateData)){
    return null
  }
  return (
    <div>
      <h1>application id: {applicationId}</h1>
      <h4>Branding</h4>
      <h3>name : {_.get(branding, 'name')}</h3>
      <h3>title: {_.get(branding, 'title')}</h3>
      {templateData.map((template, index) => (
        <div key={index}>
          <h3>Template {index}</h3>
          <div key={index}>
            <label>Template ID:</label>
            <input
              type="text"
              value={template.template_id}
              onChange={(e) =>
                handleInputChange(index, "template_id", e.target.value)
              }
              placeholder="Template ID"
            />
            <label>Template Name:</label>
            <input
              type="text"
              value={template.name}
              onChange={(e) => handleInputChange(index, "name", e.target.value)}
              placeholder="Name"
            />
            {template.view_entries.map((entry, entryIndex) => (
              <div key={entryIndex}>
                <label>View ID:</label>
                <input
                  type="text"
                  value={entry.view_id}
                  onChange={(e) =>
                    handleInputChange(
                      index,
                      `view_entries.${entryIndex}.view_id`,
                      e.target.value
                    )
                  }
                  placeholder="View ID"
                />
                <label>View Name:</label>
                <input
                  type="text"
                  value={entry.name}
                  onChange={(e) =>
                    handleInputChange(
                      index,
                      `view_entries.${entryIndex}.name`,
                      e.target.value
                    )
                  }
                  placeholder="View Name"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
      <button onClick={()=>{saveTemplateData()}}>Save Template</button>
      <br/>
      <button onClick={handleAddRow}>Add Template</button>
    </div>
  );
};

export default Spike;
