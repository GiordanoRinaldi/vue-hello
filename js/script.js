//Descrizione:
//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
//Bonus:
//Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue(
    {
        el: "#root",
        data: {
            message: "CIAO A TUTTI!!!!",
            immagine: "https://c.tenor.com/Z6gmDPeM6dgAAAAM/dance-moves.gif",
        }
    }
);