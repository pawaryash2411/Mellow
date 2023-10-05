import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Delivery from "../assets/delivery.png";
import Confirm from "../assets/confirmStep.png";
import Payment from "../assets/paymentStep.png";
import "../Styling/Checkout.css";

const steps = [
  {
    step: "Shipping Details",
    icon: <img src={Delivery} alt="" className="checkout-step-image" />,
  },
  {
    step: "Confirm Order",
    icon: <img src={Confirm} alt="" className="checkout-step-image-2" />,
  },
  {
    step: "Payment",
    icon: <img src={Payment} alt="" className="checkout-step-image" />,
  },
];
const CheckoutSteps = ({ activeStep }) => {
  return (
    <>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        style={{ boxSizing: "border-box", marginTop: "2rem" }}
      >
        {steps.map((label, index) => (
          <Step
            key={index}
            active={activeStep === index ? true : false}
            completed={activeStep >= index ? true : false}
          >
            <StepLabel icon={label.icon} style={{ color: "aqua" }}>
              <span style={{ color: activeStep >= index ? "aqua" : "#ffff" }}>
                {label.step}
              </span>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </>
  );
};

export default CheckoutSteps;
