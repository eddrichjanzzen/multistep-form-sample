import { TextField } from '@mui/material';
import FormWrapper from '../../layout/FormWrapper';
import UploadButton from '../common/UploadButton';

type UserData = {
  fullName: string;
  age: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const UserForm = ({ fullName, age, updateFields }: UserFormProps) => {
  return (
    <FormWrapper title="User Details">
      <TextField
        autoFocus
        id="fullName"
        label="Full Name"
        value={fullName}
        onChange={(e) => updateFields({ fullName: e.target.value })}
      />
      <TextField
        id="age"
        label="Age"
        type="number"
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
      />
      <UploadButton label="Avatar" />
    </FormWrapper>
  );
};

export default UserForm;
