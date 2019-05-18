class School {
  constructor(name, field, price, hours, weeks, location, outcome, age) {
    this.name = name;
    this.field = field;
    this.price = price;
    this.hours = hours;
    this.weeks = weeks;
    this.location = location;
    this.outcome = outcome;
    this.age = age;
  }
}

// for prototyping purposes "location" will be given as a static number that represents a distance from the user. A 0 value is "remote"

const ga = new School ('General Assembly', 'tech', 15000, 5, 15, 0, 'knowledge', 8)

const chris = new School ('Christophers Development School For Good Boys', 'vocational', 12000, 10, 3, 1 , 'degree', 33)

const goku = new School ('Master Rosh\'s', 'business', 50000, 35, 90, 1, 'placement', 1000)

const batman = new School ('Bruce Wayne Is Tall','design', 2000, 15, 52, 1, 'certificate', 1000)

const charmeleon = new School ('Pika Pika', 'business', 8000, 14, 16, 2, 'degree', 2)

const ribeye = new School ('Steak University','design', 1600, 3, 52, 0, 'certificate', 4)

const angle = new School ('Triangles Are Perfect','vocational', 8000, 40, 6, 1,'placement', 35)

const marker = new School ('HTML IS A REAL PROGRAMMING LANGUAGE','tech', 24000, 50, 18, 6, 'certificate', 10)

const coffee = new School ('Coffee Pourers International','business', 2000, 5, 80, 0, 'knowledge', 10)

const reggie = new School ('Reggie Watts Univerisity','design', 30000, 30, 104, 5, 'degree', 3)

const green = new School ('Green Man','tech', 6000, 40, 12, 6, 'certificate', 8)

const schoolArray = [chris, ga, goku, batman, charmeleon, ribeye, angle, marker, coffee, reggie, green]


