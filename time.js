const timeDisplay = document.getElementsByClassName('timeDisplay');
const dateDisplay = document.getElementsByClassName('dateDisplay');
const timeZones = ["Asia/Dhaka", "Europe/London", "America/Toronto", "Australia/Sydney"]

let time = new Date();

timeT = time.toLocaleTimeString("en-Us", { timeZone: "Asia/Dhaka" });
date = time.toLocaleDateString();
console.log(timeT);
console.log(date);

for (let i = 0; i < timeDisplay.length; i++) {

    let time = new Date();
    time1 = time.toLocaleTimeString("en-US", { timeZone: timeZones[i] });

    timeDisplay[i].innerText = time1;

}

for (let i = 0; i < dateDisplay.length; i++) {

    let time = new Date();
    date1 = time.toLocaleDateString("en-US", { timeZone: timeZones[i] });
    dateDisplay[i].innerText = date1;
}