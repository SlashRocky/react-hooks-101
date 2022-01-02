import "bootstrap/dist/css/bootstrap.min.css";
import React, { useReducer } from "react";
import { EventForm } from "../components/EventForm";
import { Events } from "../components/Events";
import { AppContext } from "../contexts/AppContext";
import reducer from "../reducers";

const App = () => {
  const initialState = {
    events: [],
    operationLogs: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  );
};

export default App;
