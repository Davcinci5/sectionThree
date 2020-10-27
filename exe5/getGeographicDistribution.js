const getGeographicDistribution = (arre, option = 'state') => {
    const reducer = (obj, employee) => {
        const location = employee[`location-${option}`];
        if (obj[location] === undefined) obj[location] = 1;
        else obj[location] += 1;
        return obj;
    };
    const objLocation = arre.reduce(reducer, {});
    return objLocation;
};

module.exports = getGeographicDistribution;
