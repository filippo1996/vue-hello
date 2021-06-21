/**
 * Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
 * Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.
 */

const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World!',
        img: 'https://www.trovafrasi.com/wp-content/uploads/2019/12/frasi-sull-estate-700x490.jpg',
        bkground: 'background-green'
    }
});