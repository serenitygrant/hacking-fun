const Moment = require('moment');
const MomentRange = require('moment-range');

const moment = MomentRange.extendMoment(Moment);

module.exports = function(initial, subtractions) {
    let first = [];
    let second = [];

    initial.forEach(function(range) {
        first.push(moment.range(range.start, range.end));
    });

    subtractions.forEach(function(range) {
        second.push(moment.range(range.start, range.end));
    });

    let i = 0;
    let done = false;

    while (!done) {
        let modified = null;

        for (let j = 0; j < second.length; j++) {
            modified = first[i].subtract(second[j]);

            first.splice(i, 1);

            let index = i;

            modified.forEach(function(range) {
                first.splice(index++, 0, range);
            });
        }

        i++;

        if (i >= first.length) {
            done = true;
        }
    }

    return first;
};
