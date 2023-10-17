var today = new Date();
var day = today.getDay();
var dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednasday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log("Today is : " + dayList[day] + ".");

var hour = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
var prepand = hour >= 12 ? "PM" : "AM";
hour = hour >= 12 ? hour - 12 : hour;

if (hour === 0 && prepand === " PM ") {
  if (minutes === 0 && second === 0) {
    hour = 12;
    prepand = "Noon";
  } else {
    hour = 12;
    prepand = "PM";
  }
}
if (hour === 0 && prepand === "AM") {
  if (minutes === 0 && seconds === 0) {
    hour = 12;
    prepand = MidNight;
  } else {
    hour = 12;
    prepand = "AM";
  }
}
console.log("Current Time : " + hour + prepand + ":" + minutes + ":" + seconds);
