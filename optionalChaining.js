// Truthy - Valores que tem CARA DE VERDADEIRO
// Falsy - Valores que tem CARA DE FALSO - 0, null, undefined e ""
// [] e {} NÂO SÂO FALSY
const person = {
  _name: "John",
  surname: "Kant",
  age: 26,
  postalCode: "12345-230",
  // mother: {
  //   _name: "Ana",
  //   surname: "Kant",
  // },
};

// if (person && person.mother && person.mother._name) {
//   console.log(person.mother._name);
// }

console.log(person?.mother?._name);
