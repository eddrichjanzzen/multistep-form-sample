import FormWrapper from './FormWrapper';

const UserForm = () => {
  return (
    <FormWrapper title="UserDetails">
      <label>First Name</label>
      <input autoFocus type="text" required />
      <label>Last Name</label>
      <input type="text" required />
      <label>Age</label>
      <input min={1} type="number" required />
    </FormWrapper>
  );
};

export default UserForm;
