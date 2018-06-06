function lowerCaseDrivers (drivers) {
    const newDrivers = drivers.map(function (driver) {
        return driver.toLowerCase();
    })
    return newDrivers;
}

function nameToAttributes(drivers) {
    const splitNames = drivers.map(function (driver) {
        return driver.split(" ")
    })
    const nameObj = splitNames.map(function (name) {
        return Object.assign({}, {firstName: name[0], lastName: name[1]})
    })
    return nameObj;
}

function attributesToPhrase(drivers) {
    const phraseArray = drivers.map(function (driver) {
        return `${driver.name} is from ${driver.hometown}`
    })
    return phraseArray;
}