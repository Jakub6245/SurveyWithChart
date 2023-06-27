import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { Form } from "./pages/FromPage";
import Chart from "./pages/ChartPage";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/admin" element={<Chart />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
