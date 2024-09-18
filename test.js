// Write your function here:
const lifePhase = age => {
    switch (age) {
        case (age >= 0 && age <= 3):
            return 'baby';
            break;
        case (age >= 4 && age <= 12):
            return 'child';
            break;
        case (age >= 13 && age <= 19):
            return 'teen';
            break;
        case (age >= 20 && age <= 64):
            return 'adult';
            break;
        case (age >= 65 && age <= 140):
            return 'senior citizen';
            break;
        default:
            return 'This is not a valid age';
    }
}







// Uncomment the line below when you're ready to try out your function
console.log(lifePhase(5)) //should print 'child'

// We encourage you to add more function calls of your own to test your code!