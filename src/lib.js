export function dayRender(dayNow) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[dayNow.getDay()];
    let date = dayNow.getDate();
    let month = months[dayNow.getMonth()];
    let year = dayNow.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}