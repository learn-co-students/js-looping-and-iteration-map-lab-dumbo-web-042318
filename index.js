// Code your solution in this file.
// * `lowerCaseDrivers` - this function takes an array of drivers, and returns an array of the drivers names in lowercase.
function lowerCaseDrivers(drivers){
const arrayOfDrivers = drivers.map(driver => driver.toLowerCase());
return arrayOfDrivers;
}
//
// * `nameToAttributes` - this function takes an array of drivers with their first and last name separated by a space, and returns an array of JavaScript objects with `firstName` and `lastName` attributes.
//
function nameToAttributes(drivers, firstName, lastName){
  const arrayOfDrivers = drivers.map(driver => {
    let splitDriver = driver.split(" ");
    driverObject = {};
    driverObject['firstName'] = splitDriver[0];
    driverObject['lastName'] = splitDriver[1];
    return driverObject;
})
return arrayOfDrivers;
}

// * `attributesToPhrase` - this function takes an array of drivers as JavaScript objects and returns a string saying `"<NAME OF DRIVER> is from <HOMETOWN>"` for each JavaScript object in the array. Note that between the `<` and `>` we are looking for the value stored in the `name` and `hometown` object attributes, not the strings `"DRIVER"` or `"HOMETOWN"`.

function attributesToPhrase(drivers){
  const arrayOfDrivers = drivers.map(driver => (`${driver.name} is from ${driver.hometown}`));
  return arrayOfDrivers;
}
