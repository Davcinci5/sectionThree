/* eslint-disable no-undef */
///      this command was used to do the test --->   npm run test:five 'myOwnemployees.xml'
const {
    getDataFromXML,
    convertXMltoObj,
    getAveragePerCategory,
    getGeographicDistribution,
    greatestElement,
    getTheMostExperienced,
    getCommonSkills,
    GreaterToLower,
    skillsAmoungHigher,
    prevalentCategoryInState,
    experienceXsalary
} = require('../exe5');

const myDocc = process.argv[4];

test('Getting information from xml file, and convert them to object', async () => {
    const data = await getDataFromXML(myDocc);
    const obj = await convertXMltoObj(data);
    myObject = {
        employees: {
            employee: [{
                $: { id: 'hM6YLnCKnvY96IaQWUvnTA==' },
                category: ['Data Warehousing/ETL'],
                exp: ['20'],
                'location-city': ['Hermosillo'],
                'location-state': ['Sonora'],
                name: ['Christian'],
                salary: ['80'],
                skills: [{ skill: ['SAP', 'Data Migration', 'Mongo DB', 'Javascript', 'C', 'Cloud Computing', 'Cognos', 'Teradata', 'AWS', 'Business Objects', 'C++', 'CICS'] }],
                subcategory: ['x-Other'],
                'work-authorization': ['US Citizen']
            }, {
                $: { id: 'hM6YLnCKnvY96IaQWUvnTA==' },
                category: ['Project, Product Management, Dev Ops'],
                exp: ['10'],
                'location-city': ['CDMX'],
                'location-state': ['CDMX'],
                name: ['Jorge Martinez'],
                salary: ['48'],
                skills: [{ skill: ['Data Science in E- Commerce', 'BQ MongoDB', 'Java/J2EE', 'Spring MVC', 'Hibernate'] }],
                suncategory: ['QA Analyst'],
                'work-authorization': ['US Citizen']
            }, {
                $: { id: 'hM6YLnCKnvY96IaQWUvnTA==' },
                category: ['Data Warehousing/ETL'],
                exp: ['30'],
                'location-city': ['Oaxaca de Juarez'],
                'location-state': ['Oaxaca'],
                name: ['Diego Armando'],
                salary: ['150'],
                skills: [{ skill: ['Business Intelligence', 'Oracle', 'PL/SQL', 'unix', 'ETL', 'Python', 'Data Warehousing', 'Node JS', 'SAP', 'Data Migration', 'Mongo DB', 'Business Objects', 'C++', 'CICS'] }],
                subcategory: ['x-Other'],
                'work-authorization': ['US Citizen']
            }, {
                $: { id: 'hM6YLnCKnvY96IaQWUvnTA==' },
                category: ['DBAs'],
                exp: ['11'],
                'location-city': ['Baja California'],
                'location-state': ['Baja California'],
                name: ['Luis Larrinaga'],
                salary: ['74'],
                skills: [{ skill: ['REST Web Services', 'Servlets', 'Spring ORM', 'Microservice', 'JBOSS', 'JQuery'] }],
                suncategory: ['Amazon (AWS)'],
                'work-authorization': ['US Citizen']
            }, {
                $: { id: 'hM6YLnCKnvY96IaQWUvnTA==' },
                category: ['DBAs'],
                exp: ['23'],
                'location-city': ['Guanajuato'],
                'location-state': ['Guanajuato'],
                name: ['Fabricio Gomez'],
                salary: ['56'],
                skills: [{ skill: ['COM', 'LeSS', 'Project Management', 'Project Accounting', 'Resource Management', 'PPM'] }],
                suncategory: ['Amazon (AWS)'],
                'work-authorization': ['US Citizen']
            }, {
                $: { id: 'hM6YLnCKnvY96IaQWUvnTA==' },
                category: ['DBAs'],
                exp: ['43'],
                'location-city': ['Coahuila'],
                'location-state': ['Coahuila'],
                name: ['Carlos Fernando'],
                salary: ['128'],
                skills: [{ skill: ['Azure CLI', 'Azure DevOps (VSTS)', 'Dynamics 365', 'Visual Studio', 'Azure Cloud Services', 'GitFlow', 'Business Intelligence', 'Oracle', 'PL/SQL', 'unix', 'ETL', 'Python', 'Data Warehousing', 'Node JS'] }],
                suncategory: ['Amazon (AWS)'],
                'work-authorization': ['US Citizen']
            }, {
                $: { id: 'hM6YLnCKnvY96IaQWUvnTA==' },
                category: ['Sys Admin, IDM, Cyber, Sec OPS'],
                exp: ['17'],
                'location-city': ['Veracruz'],
                'location-state': ['Veracruz'],
                name: ['Irving Martin'],
                salary: ['68'],
                skills: [{ skill: ['GitKraken', 'TFS (Team Foundation Server)', 'Source Depot', 'PerForce', 'NuGet Gallery and Repository', 'Batch'] }],
                suncategory: ['Mainframe Developer'],
                'work-authorization': ['US Citizen']
            }, {
                $: { id: 'hM6YLnCKnvY96IaQWUvnTA==' },
                category: ['QA, Testing Automation'],
                exp: ['29'],
                'location-city': ['Baja California'],
                'location-state': ['Baja California'],
                name: ['Sol Selene'],
                salary: ['100'],
                skills: [{ skill: ['cmd.exe', 'UNIX System Administration', 'Mac OS/X', 'BuildTracker', 'CoreXT', 'XSD', 'RSpec'] }],
                suncategory: ['Telecomm Engineer'],
                'work-authorization': ['US Citizen']
            }, {
                $: { id: 'hM6YLnCKnvY96IaQWUvnTA==' },
                category: ['QA / Testing'],
                exp: ['34'],
                'location-city': ['Guerrero'],
                'location-state': ['Guerrero'],
                name: ['Cruz David'],
                salary: ['95'],
                skills: [{ skill: ['capybara', 'Webdriverio', 'git', 'Wordpress', 'HTML5/CSS3', 'Postgresql', 'ADB', 'Bootstrap and Microsoft Office'] }],
                suncategory: ['x-Other'],
                'work-authorization': ['US Citizen']
            }, {
                $: { id: 'hM6YLnCKnvY96IaQWUvnTA==' },
                category: ['Reporting Tools'],
                exp: ['18'],
                'location-city': ['Baja California'],
                'location-state': ['Baja California'],
                name: ['Adrian Enrique'],
                salary: ['77'],
                skills: [{ skill: ['Teradata Administrator', 'Android SDK', 'DevOPS Migration', 'Forecaster'] }],
                suncategory: ['CA7 Job scheduling'],
                'work-authorization': ['US Citizen']
            }, {
                $: { id: 'hM6YLnCKnvY96IaQWUvnTA==' },
                category: ['Project Management'],
                exp: ['23'],
                'location-city': ['Sonora'],
                'location-state': ['Sonora'],
                name: ['Jesus Humberto'],
                salary: ['91'],
                skills: [{ skill: ['ETL', 'Python', 'Data Warehousing', 'Node JS', 'SAP', 'Data Migration', 'Mongo DB'] }],
                suncategory: ['QA Engineer'],
                'work-authorization': ['US Citizen']
            }, {
                $: { id: 'hM6YLnCKnvY96IaQWUvnTA==' },
                category: ['Web/Internet'],
                exp: ['34'],
                'location-city': ['CDMX'],
                'location-state': ['CDMX'],
                name: ['Cristian Manuel '],
                salary: ['129'],
                skills: [{ skill: ['Data Science in E- Commerce', 'BQ MongoDB', 'Java/J2EE', 'Spring MVC', 'Hibernate'] }],
                suncategory: ['Linux Admin'],
                'work-authorization': ['US Citizen']
            }, {
                $: { id: 'hM6YLnCKnvY96IaQWUvnTA==' },
                category: ['Unix, C, Shell Scripting'],
                exp: ['28'],
                'location-city': ['Guanajuato'],
                'location-state': ['Guanajuato'],
                name: ['Jose de Jesus'],
                salary: ['89'],
                skills: [{ skill: ['REST Web Services', 'Servlets', 'Spring ORM', 'Microservice', 'JBOSS', 'JQuery'] }],
                suncategory: ['SQL Server DBA'],
                'work-authorization': ['US Citizen']
            }, {
                $: { id: 'hM6YLnCKnvY96IaQWUvnTA==' },
                category: ['Database Developers'],
                exp: ['15'],
                'location-city': ['Michoacan'],
                'location-state': ['Michoacan'],
                name: ['Antonio Hernandez'],
                salary: ['69'],
                skills: [{ skill: ['COM', 'LeSS', 'Project Management', 'Project Accounting', 'Resource Management', 'PPM'] }],
                suncategory: ['QA Analyst'],
                'work-authorization': ['US Citizen']
            }, {
                $: { id: 'hM6YLnCKnvY96IaQWUvnTA==' },
                category: ['Mainframe'],
                exp: ['38'],
                'location-city': ['Guanajuato'],
                'location-state': ['Guanajuato'],
                name: ['Octavio Guzman'],
                salary: ['128'],
                skills: [{ skill: ['Azure CLI', 'Azure DevOps (VSTS)', 'Dynamics 365', 'Visual Studio', 'Azure Cloud Services', 'GitFlow'] }],
                suncategory: ['Scrum Master'],
                'work-authorization': ['US Citizen']
            }, {
                $: { id: 'hM6YLnCKnvY96IaQWUvnTA==' },
                category: ['Cloud, Big Data'],
                exp: ['40'],
                'location-city': ['Chiapas'],
                'location-state': ['Chiapas'],
                name: ['Carlos Diaz'],
                salary: ['168'],
                skills: [{ skill: ['GitKraken', 'TFS (Team Foundation Server)', 'Source Depot', 'PerForce', 'NuGet Gallery and Repository', 'Batch', 'Javascript', 'C', 'Cloud Computing', 'Cognos', 'Teradata', 'AWS'] }],
                suncategory: ['Business Analyst'],
                'work-authorization': ['US Citizen']
            }]
        }
    };
    expect(obj).toEqual(myObject);
    expect(obj.employees.employee.length).toEqual(myObject.employees.employee.length);
});

test('What is the salary expectation average for the different categories?', async () => {
    const data = await getDataFromXML(myDocc);
    const obj = await convertXMltoObj(data);
    const result = getAveragePerCategory(obj.employees.employee);
    const myObj = {
        'Cloud, Big Data': '168.00',
        DBAs: '86.00',
        'Data Warehousing/ETL': '115.00',
        'Database Developers': '69.00',
        Mainframe: '128.00',
        'Project Management': '91.00',
        'Project, Product Management, Dev Ops': '48.00',
        'QA / Testing': '95.00',
        'QA, Testing Automation': '100.00',
        'Reporting Tools': '77.00',
        'Sys Admin, IDM, Cyber, Sec OPS': '68.00',
        'Unix, C, Shell Scripting': '89.00',
        'Web/Internet': '129.00'
    };
    expect(result).toEqual(myObj);
});

test('What is the geographic distribution of employees’ location?', async () => {
    const data = await getDataFromXML(myDocc);
    const obj = await convertXMltoObj(data);
    const result = getGeographicDistribution(obj.employees.employee);
    const myObj = {
        'Baja California': 3,
        CDMX: 2,
        Chiapas: 1,
        Coahuila: 1,
        Guanajuato: 3,
        Guerrero: 1,
        Michoacan: 1,
        Oaxaca: 1,
        Sonora: 2,
        Veracruz: 1
    };
    expect(result).toEqual(myObj);
});

test('Which state has the most experienced employees?', async () => {
    const data = await getDataFromXML(myDocc);
    const obj = await convertXMltoObj(data);
    const result = getTheMostExperienced(obj.employees.employee);
    const myObj = {
        'Baja California': 19.333333333333332,
        CDMX: 22,
        Chiapas: 40,
        Coahuila: 43,
        Guanajuato: 29.666666666666664,
        Guerrero: 34,
        Michoacan: 15,
        Oaxaca: 30,
        Sonora: 21.5,
        Veracruz: 17
    };
    const greatest = greatestElement(myObj);
    expect(result).toEqual(myObj);
    expect(greatest).toEqual({
        greatest: 43,
        name: 'Coahuila'
    });
});

test('Which is the most common skill?', async () => {
    const data = await getDataFromXML(myDocc);
    const obj = await convertXMltoObj(data);
    const myArre = [['SAP', 3],
        ['Data Migration', 3],
        ['Mongo DB', 3],
        ['ETL', 3],
        ['Python', 3],
        ['Data Warehousing', 3],
        ['Node JS', 3],
        ['Javascript', 2],
        ['C', 2],
        ['Cloud Computing', 2]];
    let commonskills = getCommonSkills(obj.employees.employee);
    commonskills = Object.entries(commonskills);
    commonskills.sort(GreaterToLower);
    commonskills = commonskills.slice(0, 10);
    expect(commonskills).toEqual(myArre);
});

test('Which skills are common among high earners', async () => {
    const data = await getDataFromXML(myDocc);
    const obj = await convertXMltoObj(data);
    const result = skillsAmoungHigher(obj.employees.employee, 10);
    const myArre = [
        ['Business Intelligence', 2],
        ['Oracle', 2],
        ['PL/SQL', 2],
        ['unix', 2],
        ['ETL', 2],
        ['Python', 2],
        ['Data Warehousing', 2],
        ['Node JS', 2],
        ['Azure CLI', 2],
        ['Azure DevOps (VSTS)', 2]];
    expect(result).toEqual(myArre);
});

test('Which is the prevalent category in each state?', async () => {
    const data = await getDataFromXML(myDocc);
    const obj = await convertXMltoObj(data);
    const result = prevalentCategoryInState(obj.employees.employee);
    const myObj = {
        'Baja California': ['DBAs', 1],
        CDMX: ['Project, Product Management, Dev Ops', 1],
        Chiapas: ['Cloud, Big Data', 1],
        Coahuila: ['DBAs', 1],
        Guanajuato: ['DBAs', 1],
        Guerrero: ['QA / Testing', 1],
        Michoacan: ['Database Developers', 1],
        Oaxaca: ['Data Warehousing/ETL', 1],
        Sonora: ['Data Warehousing/ETL', 1],
        Veracruz: ['Sys Admin, IDM, Cyber, Sec OPS', 1]
    };
    expect(result).toEqual(myObj);
});
test('What are the salary expectations for junior, mid, and senior developers?', async () => {
    const data = await getDataFromXML(myDocc);
    const obj = await convertXMltoObj(data);
    const result = experienceXsalary(obj.employees.employee);
    const myObj = { junior: 67.2, mid: 83.2, senior: 133 };
    expect(result).toEqual(myObj);
});