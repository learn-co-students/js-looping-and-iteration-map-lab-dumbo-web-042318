// Code your solution in this file.
function lowerCaseDrivers (drivers) {
    // this function takes an array of drivers, and returns an array of the drivers names in lowercase.
    return drivers.map(function (driver) {return driver.toLowerCase();});
};

function nameToAttributes (drivers) {
    // this function takes an array of drivers with their first and last name separated by a space, and returns an array of JavaScript objects with firstName and lastName attributes.
    return drivers.map(function (driver) {
        let i = 0;
        while (driver[i] !== " ") {
            i++;
        };
        return Object.assign({}, {firstName: driver.slice(0, i), lastName: driver.slice(i + 1)});
    });
};

function attributesToPhrase (drivers) {
    // this function takes an array of drivers as JavaScript objects and returns a string saying `"<NAME OF DRIVER> is from <HOMETOWN>"` for each JavaScript object in the array. Note that between the `<` and `>` we are looking for the value stored in the `name` and `hometown` object attributes, not the strings `"DRIVER"` or `"HOMETOWN"`.
    return drivers.map(function (driver) {
        return `${driver.name} is from ${driver.hometown}`;
    });
};