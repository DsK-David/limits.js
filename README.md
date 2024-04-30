### limits.js

Este arquivo define a função `limits`, a qual calcula o limite de uma função matemática em um ponto específico. Esta função utiliza a biblioteca `mathjs` para analisar e avaliar expressões matemáticas.

```javascript
import { evaluate } from 'mathjs';

/**
 * Calcula o limite de uma função matemática em um ponto específico.
 * @param {string} funcao - A expressão matemática da função para a qual o limite será calculado.
 * @param {string} x - A variável da função que será substituída pelo valor especificado.
 * @param {number} valor - O valor pelo qual a variável `x` será substituída na expressão matemática.
 * @returns {number} O resultado da avaliação da expressão matemática após a substituição da variável `x` pelo valor especificado.
 */
export function limits(funcao, x, valor) {
 const funcaoSubstituida = evaluate(funcao, {x: valor});
 return funcaoSubstituida;
}
```

#### Documentação

##### Função `limits`

- **Parâmetros:**
  - `funcao` (string): A expressão matemática da função para a qual o limite será calculado.
  - `x` (string): A variável da função que será substituída pelo valor especificado.
  - `valor` (number): O valor pelo qual a variável `x` será substituída na expressão matemática.

- **Retorna:**
  - O resultado da avaliação da expressão matemática após a substituição da variável `x` pelo valor especificado.

- **Descrição:**
  A função `limits` usa a função `evaluate` da biblioteca `mathjs` para analisar e avaliar a expressão matemática fornecida. Ela substitui a variável `x` na expressão pelo valor especificado e retorna o resultado.

### index.js

Este arquivo é o ponto de entrada do aplicativo. Ele importa a função `limits` do arquivo `calcularLimite.js` e a usa para calcular o limite de uma função matemática exemplo.

```javascript
import { limits } from './src/lib/calcularLimite.js';

const funcao = "x^2 + 2x + 1"; // Função exemplo
const x = "x"; // Variável da função
const valor = 3; // Valor para o qual x se aproxima

const limite = limits(funcao, x, valor);
console.log(
 `O limite de ${funcao} quando ${x} se aproxima de ${valor} é ${limite}`
);
```

#### Documentação

##### Importação da Função `limits`

- **Importação:**
 ```javascript
 import { limits } from './src/lib/calcularLimite.js';
 ```

- **Descrição:**
  Importa a função `limits` do arquivo `calcularLimite.js`. Esta função é usada para calcular o limite de uma função matemática.

##### Uso da Função `limits`

- **Definição da Função Matemática:**
 ```javascript
 const funcao = "x^2 + 2x + 1";
 ```

- **Definição da Variável e Valor:**
 ```javascript
 const x = "x";
 const valor = 3;
 ```

- **Cálculo do Limite:**
 ```javascript
 const limite = limits(funcao, x, valor);
 ```

- **Saída do Resultado:**
 ```javascript
 console.log(
   `O limite de ${funcao} quando ${x} se aproxima de ${valor} é ${limite}`
 );
 ```

- **Descrição:**
 Define uma função matemática exemplo, especifica a variável e o valor pelo qual a variável se aproxima, calcula o limite usando a função `limits` e imprime o resultado.

### Conclusão

Este código fornece uma estrutura clara e documentada para calcular o limite de uma função matemática em um ponto específico, facilitando sua compreensão e uso.