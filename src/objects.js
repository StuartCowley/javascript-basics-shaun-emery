const createPerson = (name, age) => {
  const person = {
  name: name,  
  age: age
  }
  return person;
};

const getName = object => {
  return object["name"];
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  return person.age>65;
};

const getAges = people => {
  let newArray=[];
  for (i=0; i<people.length; i++) {
  newArray.push(people[i].age)}
  return newArray;
};

const findByName = (name, people) => {
  for (let i =0; i < people.length; i++) {
    if(people[i].name === name) {
      return people[i];
    }
  }
};

const findHondas = cars => {
  let newArray=[];
  for (let i = 0; i < cars.length; i++){
    if (cars[i].manufacturer === "Honda"){
      newArray.push(cars[i]);
    }
  }
  return newArray;
};

const averageAge = people => {
  let ageTotal=0;
  for (let i = 0; i<people.length; i++){
    ageTotal += people[i].age;
  }
  return ageTotal/people.length;
};

const createTalkingPerson = (name, age) => {
  // Hi Fred, my name is Bill and I am 40!'
  
  const person = {
    name: name,
    age: age,
    introduce: function() {
      const speech = `Hi Fred, my name is ${name} and I am ${age}!`;
      return speech;
    }
  }

  return person;
 
  
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
