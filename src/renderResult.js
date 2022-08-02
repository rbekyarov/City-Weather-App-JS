
import {dateBuilder} from './lib.js'
import { render , html } from '../node_modules/lit-html/lit-html.js';
import {renderBackground} from './renderBackground.js'

let now = new Date();

const main = document.getElementById('main');
const renderHtml = (city) => html `
<section class="location">
<div class="city">${city.name}, ${city.sys.country}</div>
<div class="date">${dateBuilder(now)}</div>
</section>
<div class="current">
<div class="temp">${Math.round(city.main.temp)}<span>°c</span></div>
<div class="weather">${city.weather[0].main}</div>
<div class="hi-low">${Math.round(city.main.temp_min)}°c / ${Math.round(city.main.temp_max)}°c</div>
</div>
`
    
    
 
    export function renderResults(city) {
    render(renderHtml(city), main);
    renderBackground(`${city.weather[0].main}`)
}


  


    