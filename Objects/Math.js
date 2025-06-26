// Random number generator

// Gerando um número aleatório entre 0 (inclusivo) e 1 (exclusivo)
function getRandom() {
  return Math.random();
}

// Gerando um número aleatório entre dois valores
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// Gerando um número inteiro aleatório entre dois valores
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
