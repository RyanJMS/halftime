import React from "react";
import Navbar from "./components/layout/Navbar";
import Landing from "./pages/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Streams from "./pages/Streams";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style.css";

// Redux

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/streams" element={<Streams />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
