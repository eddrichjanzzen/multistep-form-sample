import FormWrapper from './FormWrapper';

const AccountForm = () => {
  return (
    <FormWrapper title="Account Details">
      <label>Email</label>
      <input autoFocus type="text" required />
      <label>Password</label>
      <input type="text" required />
    </FormWrapper>
  );
};

export default AccountForm;
