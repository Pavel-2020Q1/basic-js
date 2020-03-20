module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error();
    }

    arr.length == 0 ? arr : false;

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '--discard-prev') {
            i > 0 ? result.splice(result.length - 1, 1) : false;
        } else if (arr[i] == '--double-prev') {
            i > 0 ? result = [...result, arr[i - 1]] : false;
        } else if (arr[i] == '--double-next') {
            arr.length - 1 > i ? result = [...result, arr[i + 1]] : false;
        } else if (arr[i] == '--discard-next') {
            arr.length - 1 > i ? i++ : false;
        } else {
            result = [...result, arr[i]];
        }
    }
    return result;

};