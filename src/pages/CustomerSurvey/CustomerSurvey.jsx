import { Button } from "@material-tailwind/react";
import React from "react";
import { CustomerSurveyForm } from "../../components";

const CustomerSurvey = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center  p-4 md:p-8">
      <CustomerSurveyForm />
    </div>
  );
};

export default CustomerSurvey;
