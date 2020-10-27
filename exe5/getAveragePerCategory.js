const getAveragePerCategory = (employeesArre) => {
    const objCounter = {};
    const reducer = (obj, { salary, category }) => {
        salary = parseInt(salary[0]);
        if (salary > 0) {
            if (obj[category] === undefined) {
                obj[category] = salary;
                objCounter[category] = 1;
            } else {
                obj[category] += salary;
                objCounter[category] += 1;
            }
        }
        return obj;
    };
    const average = employeesArre.reduce(reducer, {});
    for (const key in average) {
        average[key] = (average[key] / objCounter[key]).toFixed(2);
    }
    return average;
};

module.exports = getAveragePerCategory;
