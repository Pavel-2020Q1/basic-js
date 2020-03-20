module.exports = function getSeason(date) {
    if (date === undefined) {
        return 'Unable to determine the time of year!';
    }
    if (isNaN(date)) {
        throw new Error();
    }
    const season = {
        'winter': [11, 0, 1],
        'spring': [2, 3, 4],
        'summer': [5, 6, 7],
        'autumn': [8, 9, 10]
    };
    let month = date.getMonth()
    for (let key in season) {
        if (season[key].includes(month)) {
            return key;
        }
    }
};