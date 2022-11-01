import useFetch from './useFetch';

export type Province = {
  code: string;
  name: string;
  regionCode: string;
};

export type City = {
  code: string;
  name: string;
  regionCode: string;
  districtCode: string;
};

const API_URL = 'https://psgc.gitlab.io/api';

const useAddressForm = () => {
  const fetchProvinces = async () => {
    const response = await fetch(`${API_URL}/provinces`);
    const provinces = await response.json();

    return provinces;
  };

  const fetchCitiesByProvinceCode = async (
    provinceCode: string | undefined
  ) => {
    const response = await fetch(`${API_URL}/provinces/${provinceCode}/cities`);
    const cities = await response.json();

    return cities;
  };

  const fetchCitiesByRegionCode = async (regionCode: string | undefined) => {
    const response = await fetch(`${API_URL}/regions/${regionCode}/cities`);
    const cities = await response.json();

    return cities;
  };

  return {
    fetchProvinces,
    fetchCitiesByProvinceCode,
    fetchCitiesByRegionCode,
  };
};

export default useAddressForm;
