// Code your solution in this file.
function lowerCaseDrivers(drivers){
  const newDrivers = drivers.map(function(driver){
    return driver.toLowerCase();
  });

  return newDrivers;
}

function nameToAttributes(drivers){
  const driverObjs = drivers.map(function(driver){
    return { firstName: driver.split(" ")[0], lastName: driver.split(" ")[1] };
  });

  return driverObjs;
}

function attributesToPhrase(drivers){
  const driverHometowns = drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`;
  });

  return driverHometowns;
}
