/* eslint-disable prefer-const */

const fs = require('fs');
const parseString = require('xml2js').parseString;

function getDataFromXML (path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            try {
                resolve(data);
            } catch (error) {
                reject(error);
            }
        });
    });
}

function convertXMltoObj (xml) {
    return new Promise((resolve, reject) => {
        parseString(xml, function (error, result) {
            if (error) reject(error);
            else resolve(result);
        });
    });
}

let getAverage = (employeesArre) => {
    let greaterthanZero = 0;
    const reducer = (sum, { salary }) => {
        let salaryEmployee = parseInt(salary[0]);
        if (salaryEmployee > 0) {
            sum += salaryEmployee;
            greaterthanZero++;
        }
        return sum;
    };
    let average = employeesArre.reduce(reducer, 0);
    average = Math.floor(average / greaterthanZero);
    return average;
};

let getAveragePerCategory = (employeesArre) => {
    let objCounter = {};
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
    let average = employeesArre.reduce(reducer, {});
    for (const key in average) {
        average[key] = (average[key] / objCounter[key]).toFixed(2);
    }
    return average;
};

let getGeographicDistribution = (arre, option = 'state') => {
    const reducer = (obj, employee) => {
        let location = employee[`location-${option}`];
        if (obj[location] === undefined) obj[location] = 1;
        else obj[location] += 1;
        return obj;
    };
    let objLocation = arre.reduce(reducer, {});
    return objLocation;
};

function greatestElement (obj) {
    let greatest = 0;
    let name = '';
    for (const key in obj) {
        if (obj[key] > greatest) {
            greatest = obj[key];
            name = key;
        }
    }
    return { name, greatest };
}

let getTheMostExperienced = (arre) => {
    let locationObj = getGeographicDistribution(arre);

    function reducer (obj, employee) {
        let location = employee['location-state'];
        let experience = (parseInt(employee.exp[0]) / locationObj[location]);
        if (obj[location] === undefined) obj[location] = experience;
        else obj[location] += experience;
        return obj;
    }
    let average = arre.reduce(reducer, {});
    return average;
};

let getCommonSkills = (arreEmployees) => {
    const reducer = (obj, employee) => {
        let arreSkills = employee.skills[0].skill;
        arreSkills.reduce((o, skill) => {
            if (o[skill] === undefined) o[skill] = 1;
            else o[skill] += 1;
            return o;
        }, obj);
        return obj;
    };
    let allSkills = arreEmployees.reduce(reducer, {});
    return allSkills;
};
function GreaterToLower ([_, v1], [__, v2]) {
    let comparison = 0;
    if (v1 < v2) comparison = 1;
    else if (v1 > v2) comparison = -1;
    return comparison;
}

let skillsAmoungHigher = (arre, numberToShow) => {
    let average = getAverage(arre);
    let filtFunc = employee => parseInt(employee.salary[0]) > average;
    let filterEmployees = arre.filter(filtFunc);
    let commonskills = getCommonSkills(filterEmployees);
    commonskills = Object.entries(commonskills);
    commonskills.sort(GreaterToLower);
    commonskills = commonskills.slice(0, numberToShow);
    return commonskills;
};

let prevalentCategoryInState = (arreEmployees) => {
    function reducer (obj, employee) {
        let location = employee['location-state'][0];
        let category = employee.category[0];
        if (obj[location] === undefined) obj[location] = {};
        if (obj[location][category] === undefined) obj[location][category] = 1;
        else obj[location][category] += 1;
        return obj;
    }
    let categoryState = arreEmployees.reduce(reducer, {});
    for (const key in categoryState) {
        let categories = Object.entries(categoryState[key]);
        categories = categories.sort(GreaterToLower);
        categoryState[key] = categories[0];
    }
    return categoryState;
};

let experienceXsalary = (arre) => {
    const reducer = ({ salaryDev, totalDev }, { exp, salary }) => {
        salary = parseInt(salary);
        if (salary > 0) {
            exp = parseInt(exp[0]);
            if (exp < 20) { salaryDev.junior += salary; totalDev.junior += 1; }
            else if (exp < 30) { salaryDev.mid += salary; totalDev.mid += 1; }
            else { salaryDev.senior += salary; totalDev.senior += 1; }
        }
        return { salaryDev, totalDev };
    };
    let salaryDev = { mid: 0, junior: 0, senior: 0 };
    let totalDev = { mid: 0, junior: 0, senior: 0 };
    arre.reduce(reducer, { salaryDev, totalDev });
    let junior = salaryDev.junior / totalDev.junior;
    let mid = salaryDev.mid / totalDev.mid;
    let senior = salaryDev.senior / totalDev.senior;
    return { junior, mid, senior };
};

let myFunction = async () => {
    let xml = await getDataFromXML('myOwnemployees.xml');
    let objEmployees = await convertXMltoObj(xml);
    let arreEmployees = objEmployees.employees.employee;
    let data = experienceXsalary(arreEmployees);
    console.log(data);
};

module.exports = {
    getDataFromXML,
    convertXMltoObj,
    getAverage,
    getAveragePerCategory,
    getGeographicDistribution,
    greatestElement,
    getTheMostExperienced,
    getCommonSkills,
    GreaterToLower,
    skillsAmoungHigher,
    prevalentCategoryInState,
    experienceXsalary
};
