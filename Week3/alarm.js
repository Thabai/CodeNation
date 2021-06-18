let alarm = "";
let currentDay = "";

let alarmObj = {
weekendAlarm: "no alarm needed",
weekdayAlarm: "get up at 7am"
}

if (currentDay == "Saturday" || currentDay == "Sunday"){
alarm = alarmObj.weekendAlarm;
console.log(alarm);
} else {
alarm = alarmObj.weekdayAlarm;
console.log(alarm);
}