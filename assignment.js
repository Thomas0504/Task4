//1. Create array of objects of employee (name age gender experience and salary)
studentList = [{
        name: "thomas",
        age: 18,
        gender: "male",
        experience: 2,
        salary: 15000
    },
    {
        name: "Ashwini",
        age: 16,
        gender: "female",
        experience: 3,
        salary: 22000
    },
    {
        name: "cathirne",
        age: 17,
        gender: "female",
        experience: 4,
        salary: 30000

    },
    {
        name: "mithun",
        age: 22,
        gender: "male",
        experience: 5,
        salary: 40000
    },
    {
        name: "sathis",
        age: 24,
        gender: "male",
        experience: 6,
        salary: 62000
    }
];




let totalSalries = 0;
studentList.forEach(x => {
    //Change the names are in capital letters  
    x.name = x.name.toUpperCase();
    console.log(x.name);

    //change the all the employee age 35
    x.age = 35;
    console.log(x.age);

    //Each employee salary multiply by 2
    x.salary *= 2;
    console.log(x.salary);

    //add the salaries
    totalSalries += x.salary;
    console.log(totalSalries);

    //divide by 4
    divdevalue = totalSalries / 4;
    console.log(divdevalue);


    //And the value is converted to string
    x.salary = divdevalue.toString();
    console.log(x.salary);

    //again converted to money
    finalValue = parseInt(x.salary);
    console.log(finalValue);

    // add 7000 rupees
    finalValue += 7000;
    console.log(finalValue);

    //split the amount to each employee
    finalValue /= x.salary.length
    console.log(finalValue);

});