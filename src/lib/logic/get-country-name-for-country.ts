import data from '$lib/data.json';
import type { Country } from '$lib/types/country';

export const getCountryNameForCountry = (country: Country): string => {
    // Check if the country is in the data
    const foundCountry = data.find((countryItem: Country) => countryItem.alpha3Code === country.alpha3Code);
    if (!foundCountry) {
        return 'Unknown Country';
    }

    // Return the name of the country
    return foundCountry.name;
};