let raceNumber = Math.floor(Math.random() * 1000);
let early = false;
let runnerAge = 21;
if (runnerAge > 18 && early === true) {
    raceNumber += 1000;
}
if (runnerAge > 18 && early === true) {
    console.log(`Runners race #${raceNumber} will run at 9:30am`);
}
else if (runnerAge > 18 && early === false) {
    console.log(`Runners race #${raceNumber} will run at 11:00 am`);
}
else if (runnerAge < 18) {
    console.log(`Runners race #${raceNumber} will run at 12:30`);
}
else {
    console.log('If you do not have a race number, visit the registration desk.');
}