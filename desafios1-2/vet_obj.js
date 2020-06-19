//Programa para armazenar dados de um programador

const programador = {
    nome: "Carlos",
    idade: 32,
    especialidade: [
        {nome: "C++", especialidade: "Desktop"},
        {nome: "Python", especialidade: "Data Science"},
        {nome: "JavaScript", especialidade: "Web/Mobile"}
    ]
};

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.especialidade[0].nome} com especialidade em ${programador.especialidade[0].especialidade}`);