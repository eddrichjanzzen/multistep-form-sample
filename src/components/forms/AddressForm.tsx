import { Autocomplete, TextField, TextFieldProps } from '@mui/material';
import FormWrapper from './../../layout/FormWrapper';
import useAddressForm, { City, Province } from './../../hooks/useAddressForm';
import { useEffect, useState } from 'react';

type AddressData = {
  province: string;
  city: string;
  street: string;
  zip: string;
};

type MappedProvince = {
  label: string;
  provinceCode: string;
  regionCode: string;
};

type MappedCity = {
  label: string;
  provinceCode: string;
  regionCode: string;
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

const AddressForm = ({
  province,
  city,
  street,
  zip,
  updateFields,
}: AddressFormProps) => {
  const { fetchProvinces, fetchCitiesByProvinceCode } = useAddressForm();
  const [cityOptions, setCityOptions] = useState<City[]>([]);

  // selected
  const [selectedProvince, setSelectedProvince] =
    useState<MappedProvince | null>();
  const [selectedCity, setSelectedCity] = useState<MappedCity>();

  const fetchMappedProvinces = (): MappedProvince[] => {
    const { data } = fetchProvinces();
    if (!data) {
      return [];
    }

    const mappedProvinces = data?.map((province) => {
      return {
        label: province.name,
        provinceCode: province.code,
        regionCode: province.regionCode,
      };
    });

    // metro manila is not a province, its a region.
    // but most people would look for it in this option...
    // for the sake of UX we are hard coding this option
    mappedProvinces.push({
      label: 'Metro Manila',
      provinceCode: 'NCR',
      regionCode: '130000000',
    });

    return mappedProvinces.sort((a, b) => -b.label.localeCompare(a.label));
  };

  const handleProvinceOptionOnChange = (value: MappedProvince | null) => {
    setSelectedProvince(value);
    updateFields({ province: value?.label });
  };

  return (
    <FormWrapper title="Address Form">
      <Autocomplete
        disablePortal
        id="province"
        options={fetchMappedProvinces()}
        isOptionEqualToValue={(option, value) => option.label === value.label}
        onChange={(_e, value) => handleProvinceOptionOnChange(value)}
        renderInput={(params: TextFieldProps) => (
          <TextField
            id="province"
            label="Province"
            value={province}
            {...params}
          />
        )}
      />
      <TextField
        id="city"
        label="City"
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <TextField
        autoFocus
        id="street"
        label="Street"
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
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
