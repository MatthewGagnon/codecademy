const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
        beep() {
            console.log('Beep Boop');
        },
        fireLaser() {
            console.log('Pew Pew');
        },
    }
};

const { functionality } = robot; //This is creating a variable with the name of an object's key
functionality.beep();            //So now we have a varibale named after the functionality of robot that can use its methods