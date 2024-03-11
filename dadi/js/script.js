//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

const numg=Math.floor(Math.random()*7);
const numcpu=Math.floor(Math.random()*7);

if(numcpu<numg){
    alert('Vince Giocatore con il numero: '+ numg + ' - Numero CPU: ' + numcpu);
} else if (numcpu>numg){
    alert('Vince la CPU con il numero: ' + numcpu + ' - Numero giocatore: ' +  numg);

} else {
    alert('pari');
}
