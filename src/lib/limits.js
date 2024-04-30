const math = require("mathjs");
// Função para calcular o limite de uma função
function limits(funcao, x, valor) {
  // Substitui x pela aproximação do valor
  const funcaoSubstituida = math.parse(funcao).evaluate({ x: valor });

  return funcaoSubstituida;
}
module.exports = {limits};
