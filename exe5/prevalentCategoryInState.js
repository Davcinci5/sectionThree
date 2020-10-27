const GreaterToLower = require('./GreaterToLower');

const prevalentCategoryInState = (arreEmployees) => {
    function reducer (obj, employee) {
        const location = employee['location-state'][0];
        const category = employee.category[0];
        if (obj[location] === undefined) obj[location] = {};
        if (obj[location][category] === undefined) obj[location][category] = 1;
        else obj[location][category] += 1;
        return obj;
    }
    const categoryState = arreEmployees.reduce(reducer, {});
    for (const key in categoryState) {
        let categories = Object.entries(categoryState[key]);
        categories = categories.sort(GreaterToLower);
        categoryState[key] = categories[0];
    }
    return categoryState;
};
module.exports = prevalentCategoryInState;
