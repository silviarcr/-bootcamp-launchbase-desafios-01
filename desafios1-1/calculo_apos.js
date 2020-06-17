//Cálculo Aposentadoria
const nome = "Silvana";
const sexo = "M";
const idade = 85;
const contribuicao = 30;

switch (sexo) {
    case "F":
            if (contribuicao >= 30 && idade >= 85)
                console.log("Silvana, você pode se aposentar!")
            else    
                console.log("Silvana, você ainda não pode se aposentar!")
    break;
    case "M":
            if (contribuicao >= 35 && idade >= 95)
                console.log("Você pode se aposentar!")
            else    
                 console.log("Você ainda não pode se aposentar!")
      break;
    default:
}

