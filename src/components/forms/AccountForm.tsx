import { TextField } from '@mui/material';
import PasswordField from '../common/PasswordField';
import FormWrapper from './../../layout/FormWrapper';

type AccountData = {
  username: string;
  email: string;
  password: string;
};

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

const AccountForm = ({
  username,
  email,
  password,
  updateFields,
}: AccountFormProps) => {
  return (
    <FormWrapper title="Account Details">
      <TextField
        autoFocus
        id="username"
        label="Username"
        value={username}
        onChange={(e) => updateFields({ username: e.target.value })}
      />
      <TextField
        id="email"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <PasswordField
        label="Password"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
};

export default AccountForm;
