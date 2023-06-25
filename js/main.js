class voiture {
  constructor() {
    // this.reactions = []; on cree un objet avec les tableaux pour chaque reactions
    this.reactions = {
      demarrage: [],
      acceleration: [],
    };
  }
  addEventListener(type, callback) {
    this.reactions[type].push(callback);
  }
  dispatch(type) {
    if (this.reactions[type].length > 0) {
      this.reactions[type].forEach((reaction) => {
        reaction();
      });
    }
  }
  rouler() {
    console.log("je demarre");
    this.dispatch("demarrage");
    console.log("j'acceler'");
    this.dispatch("acceleration");
    console.log("je m'arrete");
  }
}
const maVoiture = new voiture();
maVoiture.addEventListener("demarrage", () => {
  console.log("ajout d'une nouvelle fonction");
});
maVoiture.addEventListener("acceleration", () => {
  console.log("un autre comportement");
});
maVoiture.rouler();
