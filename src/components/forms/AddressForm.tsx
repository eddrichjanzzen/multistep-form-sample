import { Autocomplete, TextField, TextFieldProps } from '@mui/material';
import FormWrapper from './../../layout/FormWrapper';
import useAddressForm from './../../hooks/useAddressForm';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

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
  const { fetchProvinces, fetchCitiesByProvinceCode, fetchCitiesByRegionCode } =
    useAddressForm();

  // selected province
  const [selectedProvince, setSelectedProvince] =
    useState<MappedProvince | null>();

  const handleProvinceOptionOnChange = (value: MappedProvince | null) => {
    setSelectedProvince(value);
    updateFields({ province: value?.label });
  };

  const { data: provinces, isLoading: isProvinceDataLoading } = useQuery<
    MappedProvince[],
    Error
  >(['provinces'], fetchProvinces, {
    select: (data) => {
      const mappedProvinces = data?.map((province: any) => {
        return {
          label: province.name,
          provinceCode: province.code,
          regionCode: province.regionCode,
        };
      });

      // metro manila is not a province, its a region.
      // but most people would look for it in the province option...
      // just check the address forms for J&T express end LBC
      // for the sake of UX we are hard coding this option

      mappedProvinces.push({
        label: 'Metro Manila',
        provinceCode: 'NCR',
        regionCode: '130000000',
      });

      return mappedProvinces.sort((a, b) => -b.label.localeCompare(a.label));
    },
  });

  const provinceCode = selectedProvince?.provinceCode;
  const isNCR = provinceCode === 'NCR';
  const chosenCode = isNCR ? selectedProvince?.regionCode : provinceCode;

  const fetchChosenCode = (chosenCode: string | undefined) => {
    return isNCR
      ? fetchCitiesByRegionCode(chosenCode)
      : fetchCitiesByProvinceCode(provinceCode);
  };

  const { data: cities, isLoading: isCityDataLoading } = useQuery<
    MappedCity[],
    Error
  >(['cities', chosenCode], () => fetchChosenCode(chosenCode), {
    // only after a province code has been defined do we fetch the data
    // don't enable if the province code is NCR
    enabled: !!provinceCode,
    select: (data) => {
      const mappedCities = data?.map((city: any) => {
        return {
          label: city.name,
          provinceCode: city.code,
          regionCode: city.regionCode,
        };
      });

      return mappedCities.sort((a, b) => -b.label.localeCompare(a.label));
    },
    onSuccess: (data) => {
      //if no city appears, set the value of city to NA
      if (Array.isArray(data) && data.length === 0) {
        updateFields({ city: 'NA' });
      }
    },
  });

  return (
    <FormWrapper title="Address Form">
      {/* Province Autocomplete */}
      <Autocomplete
        disablePortal
        disabled={isProvinceDataLoading}
        id="province"
        // check for null here
        // reference: https://www.neldeles.com/blog/posts/handling-undefined-in-react-query
        options={provinces ?? []}
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

      {/* City Autocomplete */}
      <Autocomplete
        disablePortal
        disabled={isCityDataLoading}
        id="city"
        options={cities ?? []}
        isOptionEqualToValue={(option, value) => option.label === value.label}
        onChange={(_e, value) => updateFields({ city: value?.label })}
        renderInput={(params: TextFieldProps) => (
          <TextField id="city" label="City" value={city} {...params} />
        )}
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
