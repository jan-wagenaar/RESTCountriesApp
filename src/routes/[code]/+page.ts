import data from '$lib/data.json';
import type { Country } from '$lib/types/country';

export const load = ({ params }) => {
    const country: Country = data.find((country: Country) => country.alpha3Code === params.code);

    return country;
};