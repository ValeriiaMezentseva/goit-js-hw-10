import './css/styles.css';
import { markupForOneCountry, markupForMoreCountries } from './markup'
import {fetchCountries} from './fetchCountries'
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('input#search-box');
const countriesList = document.querySelector('ul.country-list');
const countriesInfo = document.querySelector('div.country-info');

input.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));

function onInputSearch(event) {
    event.preventDefault();
    clearOutput();
    const countryName = input.value.trim();

    if (countryName) {
        fetchCountries(countryName).then(country => {
            if (country.length > 10) {
                Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name.',
            {
              position: 'center-top',
            }
                );
                return;
            }
            else if (country.length === 1) {
                countriesInfo.insertAdjacentHTML('beforeend', markupForOneCountry(...country));
            } else if (country.length > 1 && country.length <= 10) {
                countriesList.insertAdjacentHTML('beforeend', country.map(country => markupForMoreCountries(country)).join(''));
            }
        })
            .catch(error => {
                Notiflix.Notify.failure('Oops, there is no country with that name',
                    {
            position: 'center-top',
                });
                return error;
            })
}
};

function clearOutput() {
    countriesList.innerHTML = '';
    countriesInfo.innerHTML = '';
}