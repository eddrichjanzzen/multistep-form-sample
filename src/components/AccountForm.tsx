import FormWrapper from '../layout/FormWrapper';

type AccountData = {
  email: string;
  password: string;
};

type UserFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

const AccountForm = ({ email, password, updateFields }) => {
  return (
    <FormWrapper title="Account Details">
      <label>Email</label>
      <input
        autoFocus
        type="text"
        required
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label>Password</label>
      <input
        type="text"
        required
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
};

export default AccountForm;
