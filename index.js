function returnFirstTwoDrivers (drivers) {
    return drivers.slice(0, 2)
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) { //takes in an argument integer
    return function (fare) { //returns a function 
        return multiplier * fare
    }

// HOF => count the functions, calls it with c number of invocations , in this case ()()
}
//`fareDoubler()` — Declare a variable with `const` and assign a function
//returned by `createFareMultiplier()` to it. Invoke `createFareMultiplier()` in
//such a way that the new `fareDoubler()` function accepts a fare as its lone
//argument and doubles it.
//1. declare a variable
//2. assign function ?
//3. invoke createFareMultiplier
//4. new functions accepts a number as well 


const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (drivers, driverGroup) {
    // drivers is an array of names
    //driverGroup is a function
    return driverGroup(drivers)
}

