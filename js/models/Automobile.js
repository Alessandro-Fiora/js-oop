class Automobile extends Veicolo {
  porte;
  alimentazione;

  constructor(marca, anno, colore, porte, alimentazione) {
    super(marca, anno, colore);
    this.porte = porte;
    this.alimentazione = alimentazione;
  }
}
