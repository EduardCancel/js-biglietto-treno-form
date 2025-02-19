/* 

Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

*/
let price
const costTravelEl = document.getElementById('cost-travel')
const distanceEl = document.getElementById('distance')
const ageEl = document.getElementById('age')
console.log(distanceEl, ageEl);
/* const totalTravel = distanceEl.value * 0.21;
console.log(totalTravel); */


costTravelEl.addEventListener('submit',function(c){
    c.preventDefault();

    const distanceVl = distanceEl.value
    console.log(distanceVl);
    
    const ageVl= ageEl.value
    console.log(ageVl);

    const totalTravel = distanceEl.value * 0.21;
    console.log(totalTravel);


    if (ageVl < 18){

        price = totalTravel - ((totalTravel / 100) * 20).toFixed(2);
        console.log(price);
        
    } else if ( ageVl >= 65) {
    
        price = totalTravel - ((totalTravel / 100) * 20).toFixed(2);
        console.log(price);
    
    } else{
    console.log(totalTravel);
    } 

})


