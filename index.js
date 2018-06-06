// Code your solution in this file.

function lowerCaseDrivers(drivers) {

  let lowerCaseNames = [];

  drivers.map(function(name) {
    lowerCaseNames.push(name.toLowerCase());
  });

  return lowerCaseNames;
}


function nameToAttributes(drivers) {
  newDriversArr = [];
  drivers.map(function(fullName) {
    let splitName = fullName.split(' ');
    newDriversArr.push({firstName: splitName[0], lastName: splitName[1]})
  });

  return newDriversArr;
}


function attributesToPhrase(drivers) {
  let driversList = [];
  drivers.map(function(driverObj) {
    driversList.push(`${driverObj.name} is from ${driverObj.hometown}`);
  });

  return driversList;
}
