export class Item {
  constructor(
    // private imgSrc: string,
    public imgSrc: string,
    public title: string,
    public price: number,
    public category: string,
    public barcode: number,
    public producer: string,
    public description: string
  ) {}

  // getImgSrc() {
  //     return this.imgSrc;
  // }
  // pangakonto näide, et ei lisa kohe muutja +1000, vaid teed seda setteri ja getteri abil
  // pangakonto: saab võtta ja lisada, aga mitte otse väärtust panna (get ja set funkitsiooni kaudu)
  // private on selleks, et keegi väljaspool funktsiooni seda üle ei kirjutaks suvalise väärtusega
}

// paremal pool on tüüp, teised on muutujad/omadused, pulbic - kas ta on selle klassi kaudu koheselt kätte saadav
// public - klassi kaudu saab otse kätte
// private - seda muutujat saab ainult funktsiooni kaudu kätte
