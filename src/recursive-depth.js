module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            Array.isArray(arr[i]) ?
                arr.map(elem => count = Math.max(this.calculateDepth(elem), count)) : false;
        }

        return ++count;
    }
};