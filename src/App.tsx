import AddressForm from './components/forms/AddressForm';
import useMultiStepForm from './hooks/useMultiStepForm';
import UserForm from './components/forms/UserForm';
import AccountForm from './components/forms/AccountForm';
import { FormEvent, useState } from 'react';
import './App.css';
import {
  Box,
  Button,
  Card,
  CardContent,
  Step,
  StepButton,
  Stepper,
} from '@mui/material';

type FormData = {
  fullName: string;
  bio: string;
  avatarUrl: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  username: string;
  email: string;
  password: string;
};

function App() {
  const initialFormData = {
    fullName: '',
    bio: '',
    avatarUrl: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    username: '',
    email: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const updateFields = (fields: Partial<FormData>) => {
    setFormData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const stepData = [
    {
      stepLabel: 'User Form',
      stepForm: <UserForm {...formData} updateFields={updateFields} />,
    },
    {
      stepLabel: 'Account Details',
      stepForm: <AccountForm {...formData} updateFields={updateFields} />,
    },
    {
      stepLabel: 'Address Form',
      stepForm: <AddressForm {...formData} updateFields={updateFields} />,
    },
  ];

  const {
    steps,
    currentStepIndex,
    step,
    goTo,
    isFirstStep,
    isLastStep,
    back,
    next,
  } = useMultiStepForm(stepData);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();
    alert('Registration successful!!');
  };

  return (
    <Box m={4} maxWidth={800}>
      <Card>
        <CardContent>
          <Box m={2}>
            <Stepper nonLinear activeStep={currentStepIndex}>
              {steps.map((step, index) => (
                <Step key={step.stepLabel}>
                  <StepButton color="inherit" onClick={() => goTo(index)}>
                    {step.stepLabel}
                  </StepButton>
                </Step>
              ))}
            </Stepper>
            <form onSubmit={onSubmit}>
              {step.stepForm}
              <Box display="flex" flexDirection="row" py={2}>
                <Button
                  type="button"
                  variant="outlined"
                  onClick={back}
                  disabled={isFirstStep}
                >
                  Back
                </Button>
                <Box flex="1 1 auto" />
                <Button type="submit" variant="outlined">
                  {isLastStep ? 'Finish' : 'Next'}
                </Button>
              </Box>
            </form>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
export default App;
