import { Avatar, Box, filledInputClasses, TextField } from '@mui/material';
import FormWrapper from '../../layout/FormWrapper';
import AvatarUpload from '../common/AvatarUpload';
import UploadButton from '../common/UploadButton';

type UserData = {
  fullName: string;
  avatarUrl: string;
  bio: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const UserForm = ({
  fullName,
  avatarUrl,
  bio,
  updateFields,
}: UserFormProps) => {
  const handleAvatarOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    updateFields({ avatarUrl: URL.createObjectURL(e.target.files[0]) });
  };

  return (
    <FormWrapper>
      <AvatarUpload avatarUrl={avatarUrl} onChange={handleAvatarOnChange} />
      <TextField
        autoFocus
        id="fullName"
        label="Full Name"
        value={fullName}
        onChange={(e) => updateFields({ fullName: e.target.value })}
      />
      <TextField
        id="bio"
        label="Bio"
        type="text"
        value={bio}
        rows={3}
        multiline
        onChange={(e) => updateFields({ bio: e.target.value })}
      />
    </FormWrapper>
  );
};

export default UserForm;
