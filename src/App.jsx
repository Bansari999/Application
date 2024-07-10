import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
} from "react-router-dom";
import Form from "./Components/Form";
import DisplayData from "./Components/DisplayData";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Form} />
        <Route path="/display" Component={DisplayData} />
      </Routes>
    </Router>
  );
}

export default App;
