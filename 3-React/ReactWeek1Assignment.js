class Student {
  constructor(name, email, community) {
    (this.name = name), (this.email = email), (this.community = community);
  }
}

class Bootcamp {
  constructor(name, level, students = []) {
    (this.name = name), (this.level = level), (this.students = students);
  }
  registerStudent(student) {
    for (let i = 0; i < this.students.length; i++) {
      if (student.email === this.students[i].email) {
        console.log(`The student ${student.email} is already registered!`);
        return;
      }
    }
    this.students.push(student);
    console.log(
      `Registering ${student.email} to the bootcamp Web Dev Fundamentals`
    );
    return this.students;
  }
}
