module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let minTurns = Math.pow(2, disksNumber) - 1;
    let minSeconds = minTurns / (turnsSpeed / 3600);
    return {
        turns: minTurns,
        seconds: minSeconds
    };
}