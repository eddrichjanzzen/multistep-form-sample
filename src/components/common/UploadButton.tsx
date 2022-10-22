import IconButton from '@mui/material/IconButton';
import UploadIcon from '@mui/icons-material/Upload';
import Stack from '@mui/material/Stack';
import { Box, FormControl, FormLabel, Typography } from '@mui/material';

type UploadButtonProps = {
  label?: string;
  buttonCaption?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const UploadButton = ({
  label,
  buttonCaption = 'Upload a photo',
  onChange,
}: UploadButtonProps) => {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <FormControl>
        {label && (
          <Box pl={1}>
            <FormLabel>{label}</FormLabel>
          </Box>
        )}
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          disableRipple
        >
          <UploadIcon />
          <Typography variant="caption">{buttonCaption}</Typography>
          <input hidden accept="image/*" type="file" onChange={onChange} />
        </IconButton>
      </FormControl>
    </Stack>
  );
};

export default UploadButton;
