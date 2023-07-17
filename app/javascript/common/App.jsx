import React from "react";
import Spike from "./Spike";
import store from "../store/store"
import { Provider } from "react-redux";
// import Configuration from "./Configuration";

const Main = () => {
  return (
    <div>
      <React.StrictMode>
        <Provider store={store}>
          <Spike />
          {/* <Configuration/> */}
        </Provider>
      </React.StrictMode>{" "}
    </div>
  );
};

export default Main;
