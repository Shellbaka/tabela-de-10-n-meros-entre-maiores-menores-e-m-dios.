
let maior = Number.MIN_VALUE; 
let menor = Number.MAX_VALUE; 
let soma = 0;

for (let i = 1; i <= 10; i++) {
  let num = parseInt(prompt("Digite o " + i + "º número:"));
console.log ("numero : ", + num );
  
  if (!isNaN(num)) {
   
    if (num > maior) {
      maior = num;
    }
    if (num < menor) {
      menor = num;
    }

    soma += num; 
  } else {
    
    alert("Você não digitou um número válido. Tente novamente.");
    i--;
  }
}


let media = soma / 10;


alert("O maior número é: " + maior);
console.log(" o maior numero é: ",maior);
alert("O menor número é: " + menor);
console.log (" o menor número é: ", menor);
alert("A média dos números é: " + media);
console.log(" A média dos números é:",media);