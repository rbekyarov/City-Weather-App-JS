import { render } from '../node_modules/lit-html/lit-html.js';



const body = document.querySelector('body');
const renderData = (data) => {
    if (data == 'Clouds') {
        body.style.background = "#f3f3f3 url('img/cl.jpg')";
        //body.style.size = 'cover'

    }
    if (data == 'Clear') {
        body.style.background = "#f3f3f3 url('img/sunny.jpg')";
        //body.style.backgroundPosition = "center"

    }
    if (data == 'Thunderstorm') {
        body.style.background = "#f3f3f3 url('img/tdr.jpg')";
    }
    if (data == 'Drizzle') {
        body.style.background = "#f3f3f3 url('img/dz.jpg')";
    }
    if (data == 'Rain') {
        body.style.background = "#f3f3f3 url('img/dz.jpg')";
    }

}


export function renderBackground(data) {
    render(renderData(data), body);
}


//background-size: cover;
//background-position: top center;