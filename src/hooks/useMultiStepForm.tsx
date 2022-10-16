import { ReactElement, useState } from 'react';

type FormSteps = {
  stepForm: ReactElement;
  stepLabel: string;
};

const useMultiStepForm = (steps: FormSteps[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    setCurrentStepIndex((i) => {
      if (i > steps.length - 1) return 1;
      return i + 1;
    });
  };

  const back = () => {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };

  const goTo = (index: number): void => {
    setCurrentStepIndex(index);
  };

  return {
    next,
    back,
    goTo,
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
  };
};

export default useMultiStepForm;
