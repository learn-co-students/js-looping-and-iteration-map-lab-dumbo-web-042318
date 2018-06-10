// // Code your solution in this file.
// function lowerCaseDrivers(drivers) {
//   const newDrivers = [];
//
//   for (const element of drivers) {
//     newDrivers.push(element.toLowerCase());
//   }
//   return newDrivers;
// };
//
// function lowerCaseDrivers(drivers) {
//   const newDrivers = drivers.map(function(driver){
//     return driver.toLowerCase();
//   });
//   return newDrivers;
// };


function lowerCaseDrivers(drivers) {
  return drivers.map(function (name) {
    return name.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function (name) {
    const nameArray = name.split(" ");
    return Object.assign({}, {firstName: nameArray[0], lastName: nameArray[1]});
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
// function nameToAttributes(drivers) {
//   const newDrivers  [];
//   let nameArray;
//
//   for (const element of drivers) {
//     nameArray = element.split(' ');
//     debugger
//     newDrivers.push(Object.assign({firstName: nameArray[0], lastName: nameArray[1]}));
//   }
//   return newDrivers;
// };
