module.exports = function repeater(str, options) {
    options.separator == undefined ? options.separator = '+' : false;
    options.addition === undefined ? options.addition = '' : false;
    options.addition == null ? options.addition = 'null' : false;
    options.repeatTimes == undefined ? options.repeatTimes = 1 : false;
    options.additionSeparator == undefined ? options.additionSeparator == '' : false;
    options.additionRepeatTimes == undefined ? options.additionRepeatTimes = 1 : false;

    let result = '';

    for (let i = 0; i < options.repeatTimes; ++i) {
        result = result + str;
        for (let j = 0; j < options.additionRepeatTimes; ++j) {
            result = result + options.addition;
            if (j !== options.additionRepeatTimes - 1) {
                result = result + options.additionSeparator;
            };
        };
        if (i !== options.repeatTimes - 1) {
            result = result + options.separator;
        };
    };

    return result;
};