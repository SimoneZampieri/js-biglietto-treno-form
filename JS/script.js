const prezzoKm = 0.21;
const scontoMinori = 20;
const scontoOver = 40;
const bottonGen = document.getElementById('genera');
const bottonAnn = document.getElementById('annulla')

//bottoni
bottonGen.addEventListener('click', () =>{
    
    //dati da sapere
      const kmTotali = document.getElementById('inputTextKM');
      const etaPasseggero = document.getElementById('ageSelect');
      const nome = document.getElementById('inputText').value
      const eta = etaPasseggero.value;
      const distanza = kmTotali.value;
      let prezzoBiglietto;
      let calcoloPrezzo;
      let prezzoTotKm = distanza * prezzoKm;
      let tipoBiglietto = 'Standard'

     
     if (eta == 2){
          calcoloPrezzo = (prezzoTotKm / 100) * (100 - scontoMinori)
            tipoBiglietto = 'Sconto Minori';
         } else if (eta == 3){
             calcoloPrezzo = (prezzoTotKm / 100) * (100 - scontoOver)
            tipoBiglietto = 'Sconto Over';
         } else {
             calcoloPrezzo = prezzoTotKm
             tipoBiglietto;
         }
        
         prezzoBiglietto = calcoloPrezzo.toFixed(2);
         console.log( ` Il prezzo totale è: ${prezzoBiglietto}€ ` );

         //stampa biglietto
         document.getElementById('nome-passeggero').innerHTML = nome
         document.getElementById('offerta').innerHTML = tipoBiglietto
         document.getElementById('prezzo-big').innerHTML = prezzoBiglietto


     })



const costoTot = document.getElementById('Costo')

bottonGen.addEventListener('submit', () =>{
    costoTot.innerText(`${prezzoBiglietto}`)
})


