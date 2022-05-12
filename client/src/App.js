import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ModalOpenProvider } from "./modalOpenContext";

import "./App.css";

import CatsPage from "./components/CatsPage";
import HomePage from "./components/HomePage";
import ReservationPage from "./components/ReservationPage";

function App() {
  return (
    <React.StrictMode>
      <ModalOpenProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/see-cats" element={<CatsPage />}></Route>
              <Route path="/reservation" element={<ReservationPage />}></Route>
            </Routes>
          </div>
        </Router>
      </ModalOpenProvider>
    </React.StrictMode>
  );
}

export default App;
