const getCommonSkills = require('./getCommonSkills');
const GreaterToLower = require('./GreaterToLower');

const getAverage = (employeesArre) => {
    let greaterthanZero = 0;
    const reducer = (sum, { salary }) => {
        salary = parseInt(salary[0]);
        if (salary > 0) {
            sum += salary;
            greaterthanZero++;
        }
        return sum;
    };
    let average = employeesArre.reduce(reducer, 0);
    average = Math.floor(average / greaterthanZero);
    return average;
};

const skillsAmoungHigher = (arre, numberToShow) => {
    const averageSalary = getAverage(arre);
    const filtFunc = employee => parseInt(employee.salary[0]) > averageSalary;
    const filterEmployees = arre.filter(filtFunc);
    let commonskills = getCommonSkills(filterEmployees);
    commonskills = Object.entries(commonskills);
    commonskills.sort(GreaterToLower);
    commonskills = commonskills.slice(0, numberToShow);
    return commonskills;
};

module.exports = skillsAmoungHigher;
