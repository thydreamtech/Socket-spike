import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addAppData} from '../store/action'
const Configuration = () => {
  const [applicationId, setApplicationId] = useState("");
  const [brandingName, setBrandingName] = useState("");
  const [brandingTitle, setBrandingTitle] = useState("");
  const [templateId, setTemplateId] = useState("");
  const [templateName, setTemplateName] = useState("");
  const [viewId, setViewId] = useState("");
  const [viewName, setViewName] = useState("");

  const dispatch = useDispatch();
  const appId = useSelector((state) => state.test.applicationId);
  const configuration = useSelector((state) => state.test.configuration);
  const templateEntry = useSelector(
    (state) => state.test.configuration.templateEntry
  );
  // const viewEntries = useSelector(
  //   (state) => state.test.configuration.templateEntry[0].viewEntries
  // );
  const handleSubmit = () => {
    const branding={
      brandingName:brandingName,
      brandingTitle:brandingTitle
    }
    const template={
      templateId:templateId,
      templateName:templateName,
      viewEntries:[
        {viewId:viewId,viewName:viewName}
      ]
    }
    // const totalData = {
    //   applicationId : applicationId,
    //   configuration : {
    //     branding: branding,
    //     templateEntry: template
    //   }
    // }
    // dispatch(addAppData('updateAppData', 'applicationId', totalData))
    dispatch(addAppData('updateAppData','applicationId',applicationId))
    dispatch(addAppData('updateAppData','configuration.branding',branding))
    dispatch(addAppData('updateAppData',`configuration.templateEntry.${templateEntry.length}`,template, templateEntry))

    setApplicationId("");
    setBrandingName("");
    setBrandingTitle("");
    setTemplateId("");
    setTemplateName("");
    setViewId("");
    setViewName("");
  };
  console.log(configuration);

  return (
    <>
      <div>
        <label>Application ID:</label>
        <input
          type="text"
          id="applicationId"
          name="applicationId"
          value={applicationId}
          onChange={(e) => setApplicationId(e.target.value)}
        />
      </div>
      <div>
        <label>Branding Name:</label>
        <input
          type="text"
          id="brandingName"
          name="brandingName"
          value={brandingName}
          onChange={(e) => setBrandingName(e.target.value)}
        />
      </div>
      <div>
        <label>Branding Title:</label>
        <input
          type="text"
          id="brandingTitle"
          name="brandingTitle"
          value={brandingTitle}
          onChange={(e) => setBrandingTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Template ID:</label>
        <input
          type="text"
          id="templateId"
          name="templateId"
          value={templateId}
          onChange={(e) => setTemplateId(e.target.value)}
        />
      </div>
      <div>
        <label>Template Name:</label>
        <input
          type="text"
          id="templateName"
          name="templateName"
          value={templateName}
          onChange={(e) => setTemplateName(e.target.value)}
        />
      </div>
      <div>
        <label>View ID:</label>
        <input
          type="text"
          id="viewId"
          name="viewId"
          value={viewId}
          onChange={(e) => setViewId(e.target.value)}
        />
      </div>
      <div>
        <label>View Name:</label>
        <input
          type="text"
          id="viewName"
          name="viewName"
          value={viewName}
          onChange={(e) => setViewName(e.target.value)}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      <div>
        <h2>Configuration</h2>
        <p>Application ID: {appId}</p>
        <p>Branding Name: {configuration.branding.brandingName}</p>
        <p>Branding Title: {configuration.branding.brandingTitle}</p>
      </div>
    </>
  );
};

export default Configuration;
