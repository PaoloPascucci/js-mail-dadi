/*Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
*/
/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/
const UserEmail = prompt('Mi serve la tua Email, grazie')
var check = 0
console.log(UserEmail);
//- prompt (email)
const Lista = ["paolopascucci@gmail.com", "pippo@hotmal.com", "giovanni@belda.net", "pablo.valerio@silva.it", "john@lennon.gov"]
/*console.log(Lista[0]);
console.log(Lista[1]);
console.log(Lista[2]);
console.log(Lista[3]);
console.log(Lista[4]);*/
//- array con email
for (let i = 0; i <= Lista.length; i++) {
    if (Lista[i] == UserEmail) {
        var check = 1

    }
}
console.log(check);
//controllo email

if (check == 1) {
    document.getElementById('email').innerHTML = "GG, email check positivo"

}
else if (check == 0) {
    document.getElementById('email').innerHTML = "X, email check Negativo"

}

//- messaggio sull'esito del controllo
