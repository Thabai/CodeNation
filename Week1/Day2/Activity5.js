// Challenge 5:Create a variable called time, a variable called placeOfWork and a variable called
//  townOfHome.Create an if statement that logs to the console where someone is at times of the day.
//  E.g. if the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work

let placeOfWork = 'I\'\m at work';
let townOfHome = 'I\'\m at home';
let time = 19;

    if(time >= 9 && time <= 17) {
        console.log(placeOfWork);
    }
    else if (time <= 7 || time >= 19) {
        console.log(townOfHome);
    }
    else {
        console.log("I'm commuting");
    }

