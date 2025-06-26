function criarDinossauro(nome, cor) {
  return {
    nome: nome,
    cor: cor,
    rugir: function() {
      console.log(`${this.nome} diz: ROOOAR! 🦖`);
    }
  };
}
const dino1 = criarDinossauro("Rex", "verde");
const dino2 = criarDinossauro("Blue", "azul");

dino1.rugir();
dino2.rugir(); 