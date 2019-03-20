let lampCoords = []

function lampGeneration(idx) {
    //lamp generation algorithm
    //the passed index (as idx) can now influence our generation algorithm

    return {
        x: Math.random() * 1000,
        y: Math.random() * 1000,
        z: Math.random() * 1000
    }
}

for (var i = 0; i < 5; i++) {
    lampCoords.push(lampGeneration(i))
}

console.log(lampCoords)

let employee = {
    name: "sito",
    age: 49
}

let coords = {
    x: 1,
    y: 1,
    z: 10
}

let car = {
    wheels: 4,
    "the-color": "red",
    productDetails: {
        make: "ford",
        year: 1997,
        prop1: 1,
        prop2: 100,
        prop3: 700
    },
    drive: function () {
        console.log("i am driving")
    },
    stop: function () {

    },
    switchLights: function (on) {
        if (on) {
            console.log("lights are on")
        } else {
            console.log("lights are off")
        }
    }
}

//access to all the props by code
//Object.keys(car) obtains all the car object properties in string format
//forEach allows you to traverse all the position of an array
Object.keys(car).forEach((prop) => {
    //console.log(prop)

    //here we access all the car props using square brackets notation
    console.log("car en la posición " + prop + " vale " + car[prop])
})

for (let prop in car) {
    console.log(prop);
    console.log(car[prop]);
}

let star = {
    name: "cygnus",
    location: {
        x: 100,
        y: 100,
        z: 1000
    },
    radius: 10000,
    state: "blue"
}