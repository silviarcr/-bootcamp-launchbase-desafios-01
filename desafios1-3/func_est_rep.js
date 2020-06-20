//Desafios para fortalecer alguns conceitos, entre eles:
//Funções e métodos
// Estruturas de repetição
// Escopos

const usuarios = [
    {nome: "Carlos", tecnologias: ["HTML","CSS"]},
    {nome: "Jasmine", tecnologias: ["Javascript","CSS"]},
    {nome: "Tuane", tecnologias: ["HTML","Node.js"]},
];

for (let i= 0; i < usuarios.length; i++)
     {
        const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

        if (usuarioTrabalhaComCSS)
        {
            console.log(`${usuarios[i].nome} trabalha com CSS`);
        }       
    }


function imprimeUsuarios(users) {
    for (let i = 0; i<users.length; i++)
        {
            console.log(`${users[i].nome} trabalha com ${users[i].tecnologias[0]}, ${users[i].tecnologias[1]}`);
        }
}

function checaSeUsuarioUsaCSS(usuario) {
      var n =  usuario.tecnologias.indexOf("CSS");

      if (n != -1) return true;
      else return false;

}


//imprimeUsuarios(usuarios);



