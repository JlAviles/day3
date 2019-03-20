const classes = [
    [
        { firstName: 'Tomas', lastName: 'Bechtelar', age: 22 },
        { firstName: 'Nico', lastName: 'Schamberger', age: 26 },
        { firstName: 'Ashleigh', lastName: 'Kutch', age: 29 },
        { firstName: 'Lulu', lastName: 'Considine', age: 20 },
        { firstName: 'Garland', lastName: 'Waelchi', age: 21 }
    ]
];

// console.log(classes[0][1].firstName)

const classes2 = [
    [
        { firstName: 'Tomas', lastName: 'Bechtelar', age: 22, marks: [10, 8, 9] }
    ]
];

console.log(classes2[0][0].marks[1])