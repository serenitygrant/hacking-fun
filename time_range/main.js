const timerange_v1 = require('./v1/timerange');
const timerange_v2 = require('./v2/timerange');

let d = new Date();

let rangeA1 = [
    {
        start: d.setHours(9, 0),
        end: d.setHours(10, 0)
    }
];
let rangeB1 = [
    {
        start: d.setHours(9, 30),
        end: d.setHours(10, 0)
    }
];

let rangeA2 = [
    {
        start: d.setHours(9, 0),
        end: d.setHours(10, 0)
    }
];
let rangeB2 = [
    {
        start: d.setHours(9, 0),
        end: d.setHours(10, 0)
    }
];

let rangeA3 = [
    {
        start: d.setHours(9, 0),
        end: d.setHours(9, 30)
    }
];
let rangeB3 = [
    {
        start: d.setHours(9, 30),
        end: d.setHours(15, 0)
    }
];

let rangeA4 = [
    {
        start: d.setHours(9, 0),
        end: d.setHours(9, 30)
    },
    {
        start: d.setHours(10, 0),
        end: d.setHours(10, 30)
    }
];
let rangeB4 = [
    {
        start: d.setHours(9, 15),
        end: d.setHours(10, 15)
    }
];

let rangeA5 = [
    {
        start: d.setHours(9, 0),
        end: d.setHours(11, 0)
    },
    {
        start: d.setHours(13, 0),
        end: d.setHours(15, 0)
    }
];
let rangeB5 = [
    {
        start: d.setHours(9, 0),
        end: d.setHours(9, 15)
    },
    {
        start: d.setHours(10, 0),
        end: d.setHours(10, 15)
    },
    {
        start: d.setHours(12, 30),
        end: d.setHours(16, 0)
    }
];

console.log("Version 1.0");
console.log("-----------");
console.log(timerange_v1(rangeA1, rangeB1));
console.log(timerange_v1(rangeA2, rangeB2));
console.log(timerange_v1(rangeA3, rangeB3));
console.log(timerange_v1(rangeA4, rangeB4));
console.log(timerange_v1(rangeA5, rangeB5));

console.log("Version 2.0");
console.log("-----------");
console.log(timerange_v2(rangeA1, rangeB1));
console.log(timerange_v2(rangeA2, rangeB2));
console.log(timerange_v2(rangeA3, rangeB3));
console.log(timerange_v2(rangeA4, rangeB4));
console.log(timerange_v2(rangeA5, rangeB5));
