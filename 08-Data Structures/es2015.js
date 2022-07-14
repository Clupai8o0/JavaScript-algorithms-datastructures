//* Class Syntax
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  //* Instance Methods
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  //* Static Function -> Functions that cannot be called by class instance
  //* Called by the class instead
  static EnrollStudent() {
    return "Enrolling Student"
  }
}

//* Instantiating a class
const firstStudent = new Student("Colt", "Steele");
const secondStudent = new Student("John", "Marston");

//* Calling class function
console.log(firstStudent.fullName())

//* Calling static function
console.log(Student.EnrollStudent())