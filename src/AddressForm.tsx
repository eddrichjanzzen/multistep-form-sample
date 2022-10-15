import FormWrapper from './FormWrapper';

const AddressForm = () => {
  return (
    <FormWrapper title="Address Form">
      <label>Street</label>
      <input autoFocus type="text" required />
      <label>City</label>
      <input type="text" required />
      <label>State</label>
      <input type="text" required />
      <label>Zip</label>
      <input type="text" required />
    </FormWrapper>
  );
};

export default AddressForm;
