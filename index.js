// Code your solution in this file.
// function lowerCaseDrivers(drivers){
//     const lowerDrivers = map(drivers, function(d){
//         return d.toLowerCase()
//     })
// }

function lowerCaseDrivers(list) {
    return list.map(function(driver) {
      return driver.toLowerCase();
    });
  }

function nameToAttributes(list){
    return list.map(function(driver){
        const dFirst = driver.split(" ")[0];
        const dLast = driver.split(" ")[1];
        return {firstName: dFirst, lastName: dLast}
    })
}

function attributesToPhrase(list){
    return list.map(function(driver){
        return `${driver.name} is from ${driver.hometown}`
    })

}