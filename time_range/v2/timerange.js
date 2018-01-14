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
    let j = 0;
    let done = false;

    while (!done) {
        let modified = null;

        if (i >= first.length || j >= second.length) {
            done = true;
        }
        else {
            modified = first[i].subtract(second[j]);

            first.splice(i, 1);

            let index = i;

            modified.forEach(function(range) {
                first.splice(index++, 0, range);
            });

            if (first.length > 0 && i < first.length && (second[j].end > first[i].end)) {
                i++;
            }
            else {
                j++;
            }
        }
    }

    return first;
};
