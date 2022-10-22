import { Avatar, Box } from '@mui/material';
import UploadButton from './UploadButton';

type AvatarUploadProps = {
  avatarUrl: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const AvatarUpload = ({ avatarUrl, onChange }: AvatarUploadProps) => {
  return (
    <Box display="flex" justifyContent="center">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          alt=""
          src={avatarUrl}
          sx={{
            width: { xs: 120, md: 150, lg: 200 },
            height: { xs: 120, md: 150, lg: 200 },
            border: '0.1px solid lightgray',
          }}
        />
        <UploadButton
          buttonCaption={avatarUrl !== '' ? 'Edit photo' : 'Upload a photo'}
          onChange={onChange}
        />
      </Box>
    </Box>
  );
};

export default AvatarUpload;
