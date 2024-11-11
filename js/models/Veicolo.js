class Veicolo {
  marca;
  anno;
  colore;

  constructor(marca, anno, colore) {
    this.marca = marca;
    this.anno = anno;
    this.colore = colore;
  }

  informazioni() {
    return `Questa è una ${this.marca} del ${this.anno} di colore ${this.colore}`;
  }

  calcolaEtà() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.anno;
  }
}
