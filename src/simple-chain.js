const chainMaker = {
    chain: [],

    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        "" + value == "function () {}" ? value = "function() {}" : false;
        value === undefined ? this.chain.push(' ( ) ') : this.chain.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if (position < 1 || position > this.chain.length || typeof position !== 'number' || Math.round(position) !== position) {
            this.chain = [];
            throw new Error();
        } else
            this.chain.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        let result = this.chain.join('~~');
        this.chain = [];
        return result;
    }
};

module.exports = chainMaker;