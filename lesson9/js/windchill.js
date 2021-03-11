function windChill() {
    var temp = 25
    var windSpeed = 5

    if (temp > 50 && windSpeed < 3) {
        windChill = "N/A";
    } else {
        var chill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
        chill = Math.round(chill * 1) / 1;
    }
    document.getElementById('windChill').innerHTML = chill;
}       