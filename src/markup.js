export function markupForOneCountry({
    name: { official },
    capital,
    population, 
    flags: { svg }, 
    languages,
}) {
    const lang = Object.values(languages);
    return `<div class='country-info__main-thumb'> 
    <img 
    src="${svg}"
    alt="flag"
    width="50"
    height="50"
    class="country-info__img"/><span class="country-info__name">${official}</span></div>
    <ul class="country-info__list">
    <li class="country-info__item">
    <p class="country-info__text">Capital: <span clas="country-info__text-description">${capital}</span>
    </p> 
    </li>
    <li class="country-info__item">
    <p class="country-info__text">Population: <span class="country-info__text-description">${population}</span>
    </p> 
    </li>
    <li class="country-info__item">
    <p class="country-info__text">Languages: <span class="country-info__text-description">${lang.join(', ')}</span>
    </p> 
    </li>
    </ul>
    `;
};

export function markupForMoreCountries({ name: { official }, flags: { svg }, }) {
    return `<div class="country-item">
    <img
    src="${svg}"
    alt="flag"
    width="30"
    height="30"
    class="country-item__img"/> 
    <span class="country-item__name">${official}</span>
    </div>
    `;
};