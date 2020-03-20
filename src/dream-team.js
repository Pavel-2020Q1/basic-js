module.exports = function createDreamTeam(members) {
    return (!Array.isArray(members)) ? false : members.filter(elem => typeof elem === 'string').map(elem => elem.trim().toUpperCase()[0]).sort().join('');
};