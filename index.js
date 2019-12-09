// Code your solution in this file.
function lowerCaseDrivers(array) {
    return array.map(function(name) {
        return name.toLowerCase();
    });
}

function nameToAttributes(array) {
    return array.map(function(element) {
        const driverFirst = element.split(' ')[0];
        const driverLast = element.split(' ')[1];

        return { firstName: driverFirst, lastName: driverLast };
    });
}

function attributesToPhrase(array) {
    return array.map(function(element) {
        return `${element.name} is from ${element.hometown}`;
    });
}