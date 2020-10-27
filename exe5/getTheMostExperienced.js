const getGeographicDistribution = require('../exe5/getGeographicDistribution');

const getTheMostExperienced = (arre) => {
    const locationObj = getGeographicDistribution(arre);

    function reducer (obj, employee) {
        const location = employee['location-state'];
        const experience = (parseInt(employee.exp[0]) / locationObj[location]);
        if (obj[location] === undefined) obj[location] = experience;
        else obj[location] += experience;
        return obj;
    }
    const average = arre.reduce(reducer, {});
    return average;
};

module.exports = getTheMostExperienced;
