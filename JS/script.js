const prezzoKm = 0.21;
const scontoMinori = 20;
const scontoOver = 40;
const bottonGen = document.getElementById('genera');
const bottonAnn = document.getElementById('annulla')

//svolgimento

//output


//bottoni
bottonGen.addEventListener('click', () =>{
    
    //dati da sapere
      const kmTotali = document.getElementById('inputTextKM');
      const etaPasseggero = document.getElementById('ageSelect');
      const eta = etaPasseggero.value;
      const distanza = kmTotali.value;
      let prezzoBiglietto;
      let calcoloPrezzo;
      let prezzoTotKm = distanza * prezzoKm;

     
     if (eta == 2){
          calcoloPrezzo = (prezzoTotKm / 100) * (100 - scontoMinori)
         } else if (eta == 3){
             calcoloPrezzo = (prezzoTotKm / 100) * (100 - scontoOver)
         } else {
             calcoloPrezzo = prezzoTotKm
         }
        
         prezzoBiglietto = calcoloPrezzo.toFixed(2);
         console.log( ` Il prezzo totale è: ${prezzoBiglietto}€ ` );

     })



const costoTot = document.getElementById('Costo')

bottonGen.addEventListener('submit', () =>{
    costoTot.innerHTML(prezzoBiglietto)
})