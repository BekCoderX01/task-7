class Student {
  constructor(name, points) {
    this.name = name;
    this.points = points;
  }
 
  passed() {
    return this.points >= 60;
  }
}
 
const student1 = new Student("Ali", 75);
const student2 = new Student("Vali", 59);
const student3 = new Student("Madina", 60);
 
console.log(student1.passed()); // true
console.log(student2.passed()); // false
console.log(student3.passed()); // true
 