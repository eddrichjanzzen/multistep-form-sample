import { FormEvent, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import UserForm from '../components/forms/UserForm';
import AccountForm from '../components/forms/AccountForm';
import AddressForm from '../components/forms/AddressForm';
import useMultiStepForm from '../hooks/useMultiStepForm';
import FormStepper from '../components/common/FormStepper';
import { grey } from '@mui/material/colors';

type FormData = {
  fullName: string;
  bio: string;
  avatarUrl: string;
  province: string;
  city: string;
  street: string;
  zip: string;
  username: string;
  email: string;
  password: string;
};

function Home() {
  const initialFormData = {
    fullName: '',
    bio: '',
    avatarUrl: '',
    province: '',
    city: '',
    street: '',
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

  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.up('sm'));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();
    alert('Registration successful!!');
  };

  return (
    <Box display="flex" justifyContent="center">
      <Box m={2} width={800}>
        <Card
          sx={{
            height: '95vh',
          }}
        >
          <CardContent>
            <Box
              mx={2}
              sx={{
                height: '90vh',
              }}
            >
              {isMobile && (
                <FormStepper
                  steps={steps}
                  activeStep={currentStepIndex}
                  goTo={goTo}
                />
              )}
              <Box>
                <form onSubmit={onSubmit}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    sx={{
                      height: '85vh',
                    }}
                  >
                    <Box>{step.stepForm}</Box>
                    <Box
                      justifySelf="flex-end"
                      display="flex"
                      flexDirection="row"
                      py={2}
                      mt="auto"
                    >
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
                  </Box>
                </form>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
export default Home;
