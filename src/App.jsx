import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { APP_URL } from "./config";
import { CustomerSurvey, FormSubmitted } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_URL.HOME} element={<CustomerSurvey />} />
        <Route path={APP_URL.THANKS} element={<FormSubmitted />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
