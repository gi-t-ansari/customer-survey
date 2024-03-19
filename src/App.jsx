import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { APP_URL } from "./config";
import { CustomerSurvey } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_URL.HOME} element={<CustomerSurvey />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
