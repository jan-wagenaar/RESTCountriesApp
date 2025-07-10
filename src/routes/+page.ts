import data from '$lib/data.json';

export function load({ url }) {
  const searchTerm = url.searchParams.get('searchTerm')?.toLowerCase() || '';
  const regionId = url.searchParams.get('regionId')?.toLowerCase() || '';
  console.log('Search Term:', searchTerm);
  console.log('Region ID:', regionId);

  let filteredCountries = data;

  if (searchTerm) {
    filteredCountries = filteredCountries.filter((country) =>
      country.name.toLowerCase().includes(searchTerm) ||
      (country.alpha2Code && country.alpha2Code.toLowerCase().includes(searchTerm)) ||
      (country.alpha3Code && country.alpha3Code.toLowerCase().includes(searchTerm)) ||
      (country.region && country.region.toLowerCase().includes(searchTerm)) ||
      (country.subregion && country.subregion.toLowerCase().includes(searchTerm)) ||
      (country.capital && country.capital.toLowerCase().includes(searchTerm))
    );
  }

  if (regionId) {
    filteredCountries = filteredCountries.filter(
      (country) => country.region && country.region.toLowerCase() === regionId
    );
  }

  return {
    countries: filteredCountries
  };
}