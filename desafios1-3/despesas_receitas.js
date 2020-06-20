//Calcula a soma de receitas e despesas de usuários e no fim retorna o saldo

const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];

for (let i= 0; i < usuarios.length; i++)
    {
    const saldo = calculaSaldo(usuarios[i].receitas,usuarios[i].despesas);
   
    const teste = testaSaldo(saldo);

    imprimeSaldo(usuarios[i].nome,saldo,teste);
    }
   

function testaSaldo(saldo) {
    if (saldo > 0) return 'POSITIVO';
    else return 'NEGATIVO';
}

function somaNumeros(numeros) {
var soma = 0;

for (let i= 0; i < numeros.length; i++)
    {
        soma = soma + numeros[i];
    }

return soma;
}

function calculaSaldo(receitas,despesas) {
    const saldo = somaNumeros(receitas) - somaNumeros(despesas);
    
    return saldo;
}

function imprimeSaldo(nome,saldo,teste) {
 
    console.log(`${nome} possui saldo ${teste} de ${saldo}`);
}