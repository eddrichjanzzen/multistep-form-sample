import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';

type FormWrapperProps = {
  title?: string;
  children: ReactNode;
};

const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <Box>
      {title && (
        <Typography variant="h4" textAlign="center" my={1}>
          {title}
        </Typography>
      )}
      <Box display="flex" flexDirection="column" gap={2}>
        {children}
      </Box>
    </Box>
  );
};

export default FormWrapper;
