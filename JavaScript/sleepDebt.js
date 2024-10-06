const getSleepHours = day => {
    day = day.toLowerCase();
    switch (day) {
        case 'monday':
            return 8;
            break;
        case 'tuesday':
            return 6;
            break;
        case 'wednesday':
            return 7;
            break;
        case 'thursday':
            return 6;
            break;
        case 'friday':
            return 7;
            break;
        case 'saturday':
            return 9;
            break;
        case 'sunday':
            return 8;
            break;
        default:
            return 'not a valid day';
    }
}

const getActualSleepHours = () =>
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = () => {
    let idealHours = 8 * 7;
    return idealHours;
}

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep!');
    }
    else if (actualSleepHours > idealSleepHours) {
        console.log('You got more sleep than needed');
    }
    else {
        console.log('You need to get some rest');
    }

    let debt = idealSleepHours - actualSleepHours;
    if (Math.sign(debt) === 1) {
        console.log(`Your sleep debt is +${debt}`);
    } else {
        console.log(`Your sleep debt is -${debt}`);
    }
}

calculateSleepDebt();