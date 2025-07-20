import data from '$lib/data.json';

export const load = ({ params }) => {
    const country = data.find((country) => country.alpha3Code === params.code);

    return country;
};