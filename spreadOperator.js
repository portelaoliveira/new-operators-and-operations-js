const objectA = {
  id: 0,
  name_: "João",
  lastName: "Lira",
};

const listA = [10, 2, 3, 456, 23, 1, 2, 34];
const listB = [...listA]; // Não altera a lista original
const objectB = { ...objectA, saldoBancario: 1_000_000_000_000 };

listA[2] = 652;
console.log(listB[2]);
console.log(listA[2]);

console.log(objectA);
console.log(objectB);
