let daynames=[
    "Sunday"
    "Monday"
    "Tuesday"
    "Wednesday"
    "Thursday"
    "Friday"
    "Saturday"
    ]
let months=[
    "January"
    "February"
    "March"
    "April"
    "May"
    "June"
    "July"
    "August"
    "September"
    "October"
    "November"
    "December"
]

let d=newdate();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let fulldate = dayName + ", " + d.getDate() + " " +  monthName + " " + d.getFullyear();
document.getElementById("currentdate").textContent = fulldate;


// try{
//     let options = {
//         weekday: "long";
//         day: "numeric";
//         month: "long";
//         year: "numeric";

//     }
//     document.getElementById(
//         "currentdate2").textContent = newDate().toLocaleDateString("en-US",optoins);

//     }

