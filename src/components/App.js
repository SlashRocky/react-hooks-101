import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useReducer } from "react";
import { EventForm } from "../components/EventForm";
import { Events } from "../components/Events";
import { OperationLogs } from "../components/OperationLogs";
import { AppContext } from "../contexts/AppContext";
import reducer from "../reducers";

const APP_KEY = "appWithRedux";

const App = () => {
  const appState = localStorage.getItem(APP_KEY);

  const initialState = appState
    ? JSON.parse(appState)
    : {
        events: [],
        operationLogs: [],
      };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
};

export default App;
