

class Person {
    constructor(fullName, age, profession) {
        this.fullName = fullName;
        this.age = age;
        this.profession = profession;
    }
}

class Student extends Person {
    constructor(graduation, fullName, age, profession) {
        super(fullName,age, profession);
        this.graduation = graduation;
    }
}

const studentdetail = new Student("BE elec", "Shatakshi", 26, "Developer");
console.log(studentdetail);
