export function fetchCountries(name) {
    const MAIN_URL = 'https://restcountries.com/v3.1/name/';
    const FILTRED_FIELDS = '?fields=name,capital,population,flags,languages';
    return fetch(`${MAIN_URL}${name}${FILTRED_FIELDS}`)
        .then(response => {
            if (!response.ok) {
                return new Error(response.status);
            }
            return response.json();
        })
};