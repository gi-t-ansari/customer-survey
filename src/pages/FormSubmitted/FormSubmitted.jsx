import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { APP_URL } from "../../config";

const FormSubmitted = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(APP_URL.HOME);
    }, 5000);
  }, []);

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-secondary">
      Thank you for your time. We wish to see you again
    </div>
  );
};

export default FormSubmitted;
