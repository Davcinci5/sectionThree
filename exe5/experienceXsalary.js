const experienceXsalary = (arre) => {
    const reducer = ({ salaryDev, totalDev }, { exp, salary }) => {
        salary = parseInt(salary);
        if (salary > 0) {
            exp = parseInt(exp[0]);
            if (exp < 20) {
                salaryDev.junior += salary;
                totalDev.junior += 1;
            } else if (exp < 30) {
                salaryDev.mid += salary;
                totalDev.mid += 1;
            } else { salaryDev.senior += salary; totalDev.senior += 1; }
        }
        return { salaryDev, totalDev };
    };
    const salaryDev = { mid: 0, junior: 0, senior: 0 };
    const totalDev = { mid: 0, junior: 0, senior: 0 };
    arre.reduce(reducer, { salaryDev, totalDev });
    const junior = salaryDev.junior / totalDev.junior;
    const mid = salaryDev.mid / totalDev.mid;
    const senior = salaryDev.senior / totalDev.senior;
    return { junior, mid, senior };
};

module.exports = experienceXsalary;
