// Criação do objeto person com propriedades e um setter para fullName
const person = {
  firstName: "Pedro", 
  lastName: "Rodrigues",

  // Setter para fullName: permite definir nome completo e faz validações
  set fullName(value) {
    // Verifica se o valor recebido é uma string
    if(typeof value !== "string") 
      throw new Error("Value is not a string");

    // Divide o valor em partes usando espaço como separador
    const parts = value.split(" ");

    // Verifica se foram fornecidos exatamente dois nomes (nome e sobrenome)
    if(parts.length !== 2)
      throw new Error("Enter a first and last name");

    // Atualiza as propriedades firstName e lastName
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

// Bloco try/catch para testar o setter e capturar possíveis erros
try{
  // Tenta definir um nome completo inválido (apenas um espaço)
  person.fullName = " ";
}
catch (e){
  // Exibe o erro em um alerta caso ocorra
  alert(e);
}

// Exibe o objeto person atualizado