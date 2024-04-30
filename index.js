const { limits } = require("./src/lib/limits");



// Exemplo de uso
const funcao = "x^2 + 2x + 1"; // Função exemplo
const x = "x"; // Variável da função
const valor = 3; // Valor para o qual x se aproxima

const limite = limits(funcao,x,valor);
console.log(
  `O limite de ${funcao} quando ${x} se aproxima de ${valor} é ${limite}`
);
