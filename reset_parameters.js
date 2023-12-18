// Parâmetros Reset

function sum(...parcels) {
  return parcels.reduce((acc, currentValue) => acc + currentValue, 0);
}

function gradeSum(name, lastName, ...parcels) {
  return `O aluno ${name} ${lastName} acumulou ${parcels.reduce(
    (acc, currentValue) => acc + currentValue,
    0
  )} em todas as suas avaliações`;
}

// console.log(sum(2, 3));
// console.log(sum(2, 3, 4));
// console.log(sum(2, 3, 4, 5, 6, 7, 8, 9));

console.log(gradeSum("Zé", "Cardoso", 5, 8, 6, 10));
