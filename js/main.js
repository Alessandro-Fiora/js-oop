// Dichiaro una nuova istanza di Veicolo
const myVehicle = new Veicolo("Fiat", 2019, "blu");
console.log(myVehicle);
// Evoco il metodo che mi restituisce le informazioni del veicolo
const vehicleInfo = myVehicle.informazioni();
console.log(vehicleInfo);
// Evoco il metodo che mi restituisce il calcolo dell'età del veicolo
const myVehicleAge = myVehicle.calcolaEtà();
console.log(`L'auto ha ${myVehicleAge} anni`);

// Dichiaro una nuova istanza di Automobile
const myCar = new Automobile("Opel", 2020, "nero", 4, "benzina");
console.log(myCar);
console.log(myCar.porte + " porte");
console.log("alimentazione: " + myCar.alimentazione);
