let eventDay = 5;
let day = new Date;
let currentDay = day.getDay();

if (currentDay == eventDay) {
    document.getElementById("eventBanner").style.display = "block";
}