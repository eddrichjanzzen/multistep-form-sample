import { TextField } from '@mui/material';
import FormWrapper from './../../layout/FormWrapper';

type AddressData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

const AddressForm = ({
  street,
  city,
  state,
  zip,
  updateFields,
}: AddressFormProps) => {
  return (
    <FormWrapper title="Address Form">
      <TextField
        autoFocus
        id="street"
        label="Street"
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <TextField
        id="city"
        label="City"
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <TextField
        id="state"
        label="State"
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
      />
      <TextField
        id="zip"
        label="Zip"
        value={zip}
        onChange={(e) => updateFields({ zip: e.target.value })}
      />
    </FormWrapper>
  );
};

export default AddressForm;
