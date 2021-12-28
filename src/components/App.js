import "bootstrap/dist/css/bootstrap.min.css";
import React, { useReducer } from "react";
import { EventForm } from "../components/EventForm";
import { Events } from "../components/Events";
import reducer from "../reducers";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <div className="container-fluid">
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />
    </div>
  );
};

export default App;
