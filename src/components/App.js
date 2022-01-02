import "bootstrap/dist/css/bootstrap.min.css";
import React, { useReducer } from "react";
import { EventForm } from "../components/EventForm";
import { Events } from "../components/Events";
import { AppContext } from "../contexts/AppContext";
import reducer from "../reducers";

console.log(AppContext);

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <AppContext.Provider value={"Hello, I am a Provider."}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  );
};

export default App;
