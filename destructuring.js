// Destructuring - Desestruturação de um objeto

const person = {
  name_: "Augusto",
  lastName: "Burle",
  age: 79,
  netWorth: 1_000_000,
  car: {
    brand: "Volkswagen",
    model: "Gol",
    year: 2002,
  },
};

// const name_ = person.name_;
// const lastName = person.lastName;
// const age = person.age;
// const netWorth = person.netWorth;
// const brand = person.car.brand;
// const model = person.car.model;
// const year = person.car.year;

// function printUserInfo({ name_, lastName, age }) {
//   const { brand, model, year } = person.car;
//   console.log(
//     `Você é ${name_} ${lastName}, tem ${age} anos, possui o carro da ${brand}, modelo ${model} e ano ${year}.`
//   );
// }

function printUserInfo(person) {
  const { name_, lastName, age } = person;
  const { brand, model, year } = person.car;
  console.log(
    `Você é ${name_} ${lastName}, tem ${age} anos, possui o carro da ${brand}, modelo ${model} e ano ${year}.`
  );
}

printUserInfo(person);

const grades = [8, 9, 4, 6];

// const [value1, value2, value3, value4] = grades;

const [value1, value2, ...rest] = grades;
