import { Box, Step, StepButton, Stepper, StepperProps } from '@mui/material';
import { FormSteps } from '../../hooks/useMultiStepForm';

export interface IFormStepperProps extends StepperProps {
  steps: FormSteps[];
  goTo: (index: number) => void;
}

const FormStepper = ({
  activeStep,
  steps,
  goTo,
  ...rest
}: IFormStepperProps) => {
  return (
    <Box py={2}>
      <Stepper nonLinear activeStep={activeStep} {...rest}>
        {steps.map((step, index) => (
          <Step key={step.stepLabel}>
            <StepButton color="inherit" onClick={() => goTo(index)}>
              {step.stepLabel}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default FormStepper;
