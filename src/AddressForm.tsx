const AddressForm = () => {
  return (
    <>
      <label>Street</label>
      <input autoFocus type="text" required />
      <label>City</label>
      <input type="text" required />
      <label>State</label>
      <input type="text" required />
      <label>Zip</label>
      <input type="text" required />
    </>
  );
};

export default AddressForm;
