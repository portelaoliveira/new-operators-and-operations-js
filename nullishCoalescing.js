// Operador de coalescência nula

const numeroDeParticipantes = null; // await getNumberOfParticipants();

const participants = numeroDeParticipantes ?? 0; // Verifica se é null ou undefined, ser fro, atribuí um valor especificado

console.log(participants);
