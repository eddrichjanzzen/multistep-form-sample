import AddressForm from './components/AddressForm';
import useMultiStepForm from './hooks/useMultiStepForm';
import UserForm from './components/UserForm';
import AccountForm from './components/AccountForm';
import { FormEvent, useState } from 'react';

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

function App() {
  const initialFormData = {
    firstName: '',
    lastName: '',
    age: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const updateFields = (fields: Partial<FormData>) => {
    setFormData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const forms = [
    <UserForm {...formData} updateFields={updateFields} />,
    <AddressForm {...formData} updateFields={updateFields} />,
    <AccountForm {...formData} updateFields={updateFields} />,
  ];

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm(forms);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();
    alert('Registration successful!!');
  };

  return (
    <div
      style={{
        position: 'relative',
        background: 'white',
        border: '1px solid black',
        padding: '2rem',
        margin: '1rem',
        borderRadius: '.5rem',
        fontFamily: 'Arial',
      }}
    >
      <form onSubmit={onSubmit}>
        <div
          style={{
            position: 'absolute',
            top: '0.5rem',
            right: '0.5rem',
          }}
        >
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: '1rem',
            display: 'flex',
            gap: '0.5rem',
            justifyContent: 'center',
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? 'Finish' : 'Next'}</button>
        </div>
      </form>
    </div>
  );
}
export default App;
