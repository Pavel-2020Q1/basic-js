class VigenereCipheringMachine {
    constructor(modification = true) {
        this.modification = modification;
    }
    encrypt(string, keyWord) {
        if (typeof string != 'string' || typeof keyWord != 'string' || arguments.length != 2) {
            throw new Error();
        }
        string = string.toUpperCase().split('');
        let key = keyWord.toUpperCase().split(''),
            str = '',
            count = 0;
        while (key.length < string.length) {
            key = key.concat(key);
        }

        for (let i = 0; i < string.length; i++) {
            if (/[A-Z]/.test(string[i])) {
                str += String.fromCodePoint((string[i].codePointAt() - 65 + key[count].codePointAt() - 65) % 26 + 65);
                count++;
            } else {
                str += string[i];
            }
        }
        return this.modification ? str : str.split('').reverse().join('');
    }

    decrypt(string, keyWord) {
        if (typeof string != 'string' || typeof keyWord != 'string' || arguments.length != 2) {
            throw new Error();
        }
        string = string.toUpperCase().split('');
        let key = keyWord.toUpperCase().split(''),
            str = '',
            count = 0;
        while (key.length < string.length) {
            key = key.concat(key);
        }
        for (let i = 0; i < string.length; i++) {
            if (/[A-Z]/.test(string[i])) {
                str += String.fromCodePoint(((string[i].codePointAt() - key[count].codePointAt() + 26)) % 26 + 65);
                count++;
            } else {
                str += string[i];
            }
        }
        return this.modification ? str : str.split("").reverse().join("");
    }
}
module.exports = VigenereCipheringMachine;