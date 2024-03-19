import React, { useState } from "react";
import {
  Stepper,
  Step,
  Button,
  Typography,
  Radio,
  Textarea,
} from "@material-tailwind/react";
import { TiTick } from "react-icons/ti";
import { APP_URL, SURVEY_FORM_STEPS } from "../../config";
import { PiNumberOne } from "react-icons/pi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const CustomerSurveyForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const navigate = useNavigate()

  const schema = yup.object().shape({
    product: yup.string().optional(),
    price: yup.string().optional(),
    value: yup.string().optional(),
    recommendation: yup.string().optional(),
    feedback: yup.string().required("Feedback is required").max(200, "Text must not exceed 200 characters"),
  });

  const {
    handleSubmit,
    reset,
    control,
    register,
    watch,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleNext = async () => {
    let output;
    if (activeStep === 0) {
      output = await trigger(["product"], {
        shouldFocus: true,
      });
    } else if (activeStep === 1) {
      output = await trigger(["price"], {
        shouldFocus: true,
      });
    } else if (activeStep === 2) {
      output = await trigger(["value"], {
        shouldFocus: true,
      });
    } else if (activeStep === 3) {
      output = await trigger(["recommendation"], {
        shouldFocus: true,
      });
    } else if (activeStep === 4) {
      output = await trigger(["feedback"], {
        shouldFocus: true,
      });
    }

    if (!output) return;
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    !isFirstStep && setActiveStep((prevStep) => prevStep - 1);
  };

  const submitForm = (data) => {
    navigate(APP_URL.THANKS)
    setActiveStep(0);
    reset()
    localStorage.setItem("Survey Data", JSON.stringify(data))
  }

  return (
    <form
      className="w-[90%] md:w-[60%]"
      onSubmit={handleSubmit(submitForm)}
    >
      <header>
        <Typography className="text-center text-sm md:text-xl mb-4">
          Customer Survey
        </Typography>
      </header>
      <section className="my-4">
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
          activeLineClassName="bg-green-600"
        >
          {SURVEY_FORM_STEPS?.map((step, i) => (
            <Step
              activeClassName="bg-primary"
              completedClassName="bg-green-600"
            >
              {activeStep > i ? <TiTick className="text-lg" /> : i + 1}
            </Step>
          ))}
        </Stepper>
      </section>
      <section className="my-4 px-4">
        <p className="text-right my-4">
          {!isLastStep && `Q: ${activeStep + 1}/5`}
        </p>
        {activeStep === SURVEY_FORM_STEPS.indexOf("Product") && (
          <article>
            <p>{`${
              activeStep + 1
            }. How satisfied are you with our products?`}</p>
            <div className="flex justify-around">
              <div className="hidden">
                <Radio
                  icon={<TiTick />}
                  {...register("product")}
                  defaultValue={"Not Answered"}
                  defaultChecked
                />
              </div>

              {[1, 2, 3, 4, 5].map((item) => (
                <Radio
                  icon={<TiTick />}
                  {...register("product")}
                  value={item}
                  label={
                    <Typography className="font-normal ">{item}</Typography>
                  }
                />
              ))}
            </div>
          </article>
        )}
        {activeStep === SURVEY_FORM_STEPS.indexOf("Price") && (
          <article>
            <p>{`${
              activeStep + 1
            }. How fair are the prices compared to similar retailers?`}</p>
            <div className="flex justify-around">
              <div className="hidden">
                <Radio
                  icon={<TiTick />}
                  {...register("price")}
                  defaultValue={"Not Answered"}
                  defaultChecked
                />
              </div>
              {[1, 2, 3, 4, 5].map((item) => (
                <Radio
                  icon={<TiTick />}
                  {...register("price")}
                  value={item}
                  label={
                    <Typography className="font-normal ">{item}</Typography>
                  }
                />
              ))}
            </div>
          </article>
        )}
        {activeStep === SURVEY_FORM_STEPS.indexOf("Value") && (
          <article>
            <p>{`${
              activeStep + 1
            }. How satisfied are you with the value for money of your purchase?`}</p>
            <div className="flex justify-around flex-wrap">
              <div className="hidden">
                <Radio
                  icon={<TiTick />}
                  {...register("value")}
                  defaultValue={"Not Answered"}
                  defaultChecked
                />
              </div>
              {[1, 2, 3, 4, 5].map((item) => (
                <Radio
                  icon={<TiTick />}
                  {...register("value")}
                  value={item}
                  label={
                    <Typography className="font-normal ">{item}</Typography>
                  }
                />
              ))}
            </div>
          </article>
        )}
        {activeStep === SURVEY_FORM_STEPS.indexOf("Recommendation") && (
          <article>
            <p>{`${
              activeStep + 1
            }. On a scale of 1-10 how would you recommend us to your friends and family?`}</p>
            <div className="flex justify-around flex-wrap">
              <div className="hidden">
                <Radio
                  icon={<TiTick />}
                  {...register("recommendation")}
                  defaultValue={"Not Answered"}
                  defaultChecked
                />
              </div>
              {[1, 2, 3, 4, 5, 7, 8, 9, 10].map((item) => (
                <Radio
                  icon={<TiTick />}
                  {...register("recommendation")}
                  value={item}
                  label={
                    <Typography className="font-normal ">{item}</Typography>
                  }
                />
              ))}
            </div>
          </article>
        )}
        {activeStep === SURVEY_FORM_STEPS.indexOf("Feedback") && (
          <article>
            <p>{`${
              activeStep + 1
            }. What could we do to improve our service?`}</p>
            <div className=" mt-4">
              <Textarea
                label="Feedback"
                {...register("feedback")}
                
                error={errors?.feedback}
                className="border-spacing-1"
              />
              {errors?.feedback?.message && <span className=" text-sm text-red-500">{errors?.feedback?.message}</span>}
            </div>
          </article>
        )}
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
        {/* {!isLastStep && (
          <Button
            className="bg-primary"
            onClick={() => setActiveStep((prev) => prev + 1)}
          >
            Skip
          </Button>
        )} */}
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
