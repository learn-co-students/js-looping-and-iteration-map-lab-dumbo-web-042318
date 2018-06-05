// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver){
    return driver.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function (driver) {
   const driverFirstName = driver.split(' ')[0];
   const driverLastName = driver.split(' ')[1];

   return { firstName: driverFirstName, lastName: driverLastName };
 });
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
   return `${driver.name} is from ${driver.hometown}`;
 });
}
