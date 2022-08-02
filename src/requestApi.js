import { renderResults } from './renderResult.js'
import { renderHeder } from './renderHeder.js'

renderHeder()

const api = {
    key: "f086dcbf4b80b103f289fb59463dceeb",
    url: "https://api.openweathermap.org/data/2.5/"
}

const searchBtn = document.getElementById('btn');
const searchInput = document.getElementById('search-box');

searchBtn.addEventListener('click', request);

export function request(e) {
    let cityName = searchInput.value;
    if (cityName != '' && cityName.length > 2) {
        e.preventDefault();
        getResults(cityName);
    }
}

function getResults(cityName) {


    let p = document.createElement('p')
    let ulArea = document.getElementById('statusArea')
    fetch(`${api.url}weather?q=${cityName}&units=metric&APPID=${api.key}`)
        .then(res => res.ok ? res.json() : stat = `${res.status}`)
        .then(document.getElementById('statusArea').innerHTML = ``)
        .then(renderResults)
        .catch(function(err) {
            p.textContent = `City Not Found`
            ulArea.appendChild(p);
        });

}