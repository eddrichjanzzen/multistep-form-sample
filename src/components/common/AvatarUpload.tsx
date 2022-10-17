import { Avatar, Box } from '@mui/material';
import UploadButton from './UploadButton';

type AvatarUploadProps = {
  avatarUrl: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const AvatarUpload = ({ avatarUrl, onChange }: AvatarUploadProps) => {
  return (
    <Box>
      <Box p={1} display="flex" justifyContent="center">
        <Avatar alt="" src={avatarUrl} sx={{ width: 200, height: 200 }} />
      </Box>
      <UploadButton label="Avatar" onChange={onChange} />
    </Box>
  );
};

export default AvatarUpload;
