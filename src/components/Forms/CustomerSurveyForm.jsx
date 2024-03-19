import React, { useState } from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import { TiTick } from "react-icons/ti";
import { SURVEY_FORM_STEPS } from "../../config";

const CustomerSurveyForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    !isFirstStep && setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <form className="w-[90%] md:w-[60%]">
      <header>
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
          activeLineClassName="bg-green-600"
        >
          {SURVEY_FORM_STEPS?.map((step) => (
            <Step
              activeClassName="bg-primary"
              completedClassName="bg-green-600"
            >
              {activeStep > step?.id - 1 ? <TiTick className="text-lg" /> : step?.id}
            </Step>
          ))}
        </Stepper>
      </header>
      <section>
        
      </section>
      <footer className="flex justify-between">
        <Button
          variant="outlined"
          className="text-primary border-primary"
          disabled={isFirstStep}
          onClick={handlePrev}
        >
          Prev
        </Button>
        {!isLastStep && <Button className="bg-primary">Skip</Button>}
        {!isLastStep && (
          <Button className="bg-primary" onClick={handleNext}>
            Next
          </Button>
        )}
        {isLastStep && (
          <Button type="submit" className="bg-primary">
            Submit
          </Button>
        )}
      </footer>
    </form>
  );
};

export default CustomerSurveyForm;
