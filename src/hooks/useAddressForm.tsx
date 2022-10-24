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

const useAddressForm = () => {
  const fetchProvinces = () => {
    const { data, loading, error } = useFetch<Province[]>(
      'https://psgc.gitlab.io/api/provinces'
    );

    return { data, loading, error };
  };

  const fetchCitiesByProvinceCode = (provinceCode: string) => {
    const { data, loading, error } = useFetch<City[]>(
      `https://psgc.gitlab.io/api/provinces/{provinceCode}//${provinceCode}/cities`
    );

    return { data, loading, error };
  };

  const fetchCitiesByRegionCode = (regionCode: string) => {
    const { data, loading, error } = useFetch<City[]>(
      `https://psgc.gitlab.io/api/regions/${regionCode}/cities`
    );

    return { data, loading, error };
  };

  return {
    fetchProvinces,
    fetchCitiesByProvinceCode,
    fetchCitiesByRegionCode,
  };
};

export default useAddressForm;
