// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Per la soluzione di questo esercizio NON è consentito utilizzare .includes di js!

const emails = ['pasuqale.3@gmail.com', 'domenico03@gmail.com', 'booo@libero.it', 'giovanna@gmail.com'];

const usermail = prompt('Inserisci il tuo indirizzo email');


let accesso = false;


for(let i = 0; i < emails.length; i++) {
    const xemail = emails[i];
        if(xemail === usermail) {
        accesso = true;
    }
}


if(accesso === true) {
    alert('accesso effettuato ');
} else {
    alert('accesso negato');
}

