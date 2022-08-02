import { render, html } from '../node_modules/lit-html/lit-html.js';



const header = document.getElementById('myheader');
const renderHtml = () => html `

      <div>
        <h1 id="title">CITY WEATHER</h1>
     </div>
      
    <div>
      <input type="text" autocomplete="off" id="search-box" placeholder="Search for a city...">
      <button id="btn">Search</button>
    </div>
    `
export function renderHeder() {
    render(renderHtml(), header);
}