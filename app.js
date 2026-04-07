const cardArray = [
    {
        name: "cheeseburger",
        img: "cheeseburger.png",
    },
    {
        name: "fries",
        img: "fries.png",
    },
    {
        name: "hotdog",
        img: "hotdog.png",
    },
    {
        name: "ice-cream",
        img: "ice-cream.png",
    },
    {
        name: "milkshake",
        img: "milkshake.png",
    },
    {
        name: "pizza",
        img: "pizza.png",
    },
    {
        name: "cheeseburger",
        img: "cheeseburger.png",
    },
    {
        name: "fries",
        img: "fries.png",
    },
    {
        name: "hotdog",
        img: "hotdog.png",
    },
    {
        name: "ice-cream",
        img: "ice-cream.png",
    },
    {
        name: "milkshake",
        img: "milkshake.png",
    },
    {
        name: "pizza",
        img: "pizza.png",
    },
];

// Shuffle the card array
// sort -> faz baralhar a lista
cardArray.sort(() => 0.5 - Math.random());

const cardCover = "cover.png";
const cardWhite = "white.png";
const cardPath = "images/"; // caminho para monstrar as imagens
const score = document.querySelector("#score");
let timeStart, timeEnd, timeTotal;

let cardsChosen = [];
let cardsChosenIds = []; // está a guardar os ids do cardId
const cardsWon = []; // declara os pontos

console.log(cardArray);

function createBoard() {
    const grid = document.querySelector("#grid");
    cardArray.forEach((cardItem, key) => {
        const card = document.createElement("img");
        // card.setAttribute("src", cardPath + cardCover);
        // ter a de cima ou a de baixo é igual, mas se não tivermos um element criado, assim a de cima tem que ser
        card.src = cardPath + cardCover;
        card.setAttribute("data-id", key);
        card.addEventListener("click", flipCard);
        grid.appendChild(card);
    });
}

function flipCard() {
    if (!timeStart) {
        timeStart = Date.now();
    }
    //const cardId = this.getAttribute("data-id");
    const cardId = this.dataset.id;
    // virar a carta (na function tambem tem que ter ligação)
    // console.log("Virar a carta", cardArray[cardId].img); <- essa opção não vale a pena, tendo a de baixo que é mais completa
    this.src = cardPath + cardArray[cardId].img;
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId); //possicção da imagem
    if (cardsChosen.length === 2) {
        setTimeout(matchCards, 200);
        // espera 2seg para executar
    }
}

function matchCards() {
    // está a ir buscar todas as imagens na #grid
    const cards = document.querySelectorAll("#grid img");
    if (cardsChosenIds[0] === cardsChosenIds[1]) {
        alert("BATOTEIRO!!!! Procura lá outra carta...");
        cards[cardsChosenIds[0]].src = cardPath + cardCover;
        // print que achou um par
    } else if (cardsChosen[0] === cardsChosen[1]) {
        alert("OOOHHHHHH YYYEEEAAAHHHH!!!!!! Um par já está!!!!");
        cards[cardsChosenIds[0]].src = cards[cardsChosenIds[1]].src =
            cardPath + cardWhite;
        // faz que as cartas ja viradas, nao seja possivel velas mais
        cards[cardsChosenIds[0]].removeEventListener("click", flipCard);
        cards[cardsChosenIds[1]].removeEventListener("click", flipCard);
        cards[cardsChosenIds[0]].setAttribute("feito", "");
        cards[cardsChosenIds[1]].setAttribute("feito", "");
        cardsWon.push(cardsChosen); // pontos das cartas
    } else {
        alert("Falhou!!! Voltar a tentar ;)");
        cards[cardsChosenIds[0]].src = cards[cardsChosenIds[1]].src =
            cardPath + cardCover;
    }

    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length < cardArray.length / 2) {
        score.firstElementChild.innerText = cardsWon.length;
    } else {
        timeEnd = Date.now();
        timeTotal = Math.floor((timeEnd - timeStart) / 1000);
        score.innerText = `WWWWOOOOOOWWWWWW!!!!!! Ganhaste!!!!! Demoraste ${timeTotal} segundos`;
    }
}

createBoard();
