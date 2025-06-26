function Dinossauro(nome, cor) {
  this.nome = nome;
  this.cor = cor;
  this.rugir = function() {
    console.log(`${this.nome} diz: ROOOAR! 🦖`);
  };
}

const dino1 = new Dinossauro("Rex", "verde");
const dino2 = new Dinossauro("Blue", "azul");

dino1.rugir(); 
dino2.rugir(); 