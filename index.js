// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  let newDrivers = drivers.map(
    function(driver) {return driver.toLowerCase();}
  );
  return newDrivers;
};

function nameToAttributes(drivers) {
  const newDrivers = drivers.map(function (driver) {
    let splitDriver = driver.split(' ', 2);
    let rObj = {};
    rObj.firstName = splitDriver[0];
    rObj.lastName = splitDriver[1];
    return rObj});
  return newDrivers;
};

function attributesToPhrase(drivers) {
  const phrase = drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
  return phrase;
};
