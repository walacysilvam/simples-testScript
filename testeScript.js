// resposta para a questão 1
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA); // soma vai ser 91

// resposta para a questão de fibonacci
function fibonacci(n) {
    let fib = [0, 1]; // comeca com 0 e 1
    
    while (fib[fib.length - 1] < n) {
      let next = fib[fib.length - 1] + fib[fib.length - 2];
      fib.push(next);
    }
  
    
    if (fib.includes(n)) {
      return `${n} pertence à sequência de Fibonacci.`;
    } else {
      return `${n} não pertence à sequência de Fibonacci.`;
    }
}
  
  
let numero = 21; // teste
console.log(fibonacci(numero));

// resposta para o desafio 4

let faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  let totalFaturamento = Object.values(faturamento).reduce((total, valor) => total + valor, 0);
  
 
  for (let estado in faturamento) {
    let percentual = (faturamento[estado] / totalFaturamento) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}

// resposta para o desafio 5
function inverterString(str) {
    let strInvertida = ''; 
  
    // Loop para percorrer a string de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
      strInvertida += str[i];
    }
  
    return strInvertida;
}

let minhaString = "Exemplo de string";
let resultado = inverterString(minhaString);

console.log("String original:", minhaString);
console.log("String invertida:", resultado);
