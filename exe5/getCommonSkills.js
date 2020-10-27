const getCommonSkills = (arreEmployees) => {
    const reducer = (obj, employee) => {
        const arreSkills = employee.skills[0].skill;
        arreSkills.reduce((o, skill) => {
            if (o[skill] === undefined) o[skill] = 1;
            else o[skill] += 1;
            return o;
        }, obj);
        return obj;
    };
    const allSkills = arreEmployees.reduce(reducer, {});
    return allSkills;
};

module.exports = getCommonSkills;
