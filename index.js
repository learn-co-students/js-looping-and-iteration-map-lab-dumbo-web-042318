// Code your solution in this file.
function lowerCaseDrivers(array){
  const map1 = array.map(x => x.toLowerCase());
  return map1;
}

function nameToAttributes(array){
  return array.map(function(x){
    const fName = x.split(' ')[0];
    const lName = x.split(' ')[1];
    return { firstName: fName, lastName: lName };
  });
}

function attributesToPhrase(array){
  return array.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  });
}
