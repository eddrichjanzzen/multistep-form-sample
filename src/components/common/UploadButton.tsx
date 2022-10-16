import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { FormControl, FormLabel } from '@mui/material';

type UploadButtonProps = {
  label: string;
};

const UploadButton = ({ label }: UploadButtonProps) => {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input hidden accept="image/*" type="file" />
          <PhotoCamera />
        </IconButton>
      </FormControl>
    </Stack>
  );
};

export default UploadButton;
