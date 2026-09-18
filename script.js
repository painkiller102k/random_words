// Hajusrakenduste teemaline sõnavara.
// Iga sõna sisaldab eestikeelset ja venekeelset vastet.
// kõik sõnad
const words = [
    {
        et: "hajusrakendus",
        ru: "распределенное приложение"
    },
    {
        et: "klient",
        ru: "клиент"
    },
    {
        et: "server",
        ru: "сервер"
    },
    {
        et: "andmebaas",
        ru: "база данных"
    },
    {
        et: "võrk",
        ru: "сеть"
    },
    {
        et: "veebiteenus",
        ru: "веб-сервис"
    },
    {
        et: "HTTP päring",
        ru: "HTTP запрос"
    },
    {
        et: "endpoint",
        ru: "конечная точка"
    },
    {
        et: "pilveteenus",
        ru: "облачный сервис"
    },
    {
        et: "autentimine",
        ru: "аутентификация"
    },
    {
        et: "kasutaja",
        ru: "пользователь"
    },
    {
        et: "andmevahetus",
        ru: "обмен данными"
    },
    {
        et: "veebiserver",
        ru: "веб-сервер"
    },
    {
        et: "rakendusserver",
        ru: "сервер приложений"
    },
    {
        et: "päring",
        ru: "запрос"
    },
    {
        et: "vastus",
        ru: "ответ"
    },
    {
        et: "hajutatud süsteem",
        ru: "распределенная система"
    }
];


// Hetkel kuvatavad sõnad.

let currentEstonianWord;
let currentRussianWord;


// Punktisüsteem.

let score = 0;
let checked = 0;


// HTML elemendid.

const estonianWordElement = document.getElementById("estonianWord");
const russianWordElement = document.getElementById("russianWord");

const russianAnswer = document.getElementById("russianAnswer");
const estonianAnswer = document.getElementById("estonianAnswer");

const russianResult = document.getElementById("russianResult");
const estonianResult = document.getElementById("estonianResult");

const scoreElement = document.getElementById("score");
const checkedElement = document.getElementById("checked");

const checkRussianButton = document.getElementById("checkRussian");
const checkEstonianButton = document.getElementById("checkEstonian");
const newWordsButton = document.getElementById("newWords");


// Valib juhusliku sõna.

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);

    return words[randomIndex];
}


// Tekitab uued sõnad mõlemasse veergu.

function generateWords() {

    currentEstonianWord = getRandomWord();
    currentRussianWord = getRandomWord();

    estonianWordElement.textContent = currentEstonianWord.et;
    russianWordElement.textContent = currentRussianWord.ru;

    russianAnswer.value = "";
    estonianAnswer.value = "";

    russianResult.textContent = "";
    estonianResult.textContent = "";

    russianResult.className = "result";
    estonianResult.className = "result";
}


// Kontrollib eestikeelse sõna venekeelset vastet.

function checkRussianAnswer() {

    const answer = russianAnswer.value.trim().toLowerCase();

    if (answer === "") {
        russianResult.textContent = "Sisesta kõigepealt vastus.";
        russianResult.className = "result incorrect";
        return;
    }

    checked++;

    if (answer === currentEstonianWord.ru.toLowerCase()) {

        score++;

        russianResult.textContent = "✓ Õige vastus!";
        russianResult.className = "result correct";

    } else {

        russianResult.textContent =
            `✗ Vale. Õige vastus: ${currentEstonianWord.ru}`;

        russianResult.className = "result incorrect";
    }

    updateScore();
}


// Kontrollib venekeelse sõna eestikeelset vastet.

function checkEstonianAnswer() {

    const answer = estonianAnswer.value.trim().toLowerCase();

    if (answer === "") {
        estonianResult.textContent = "Sisesta kõigepealt vastus.";
        estonianResult.className = "result incorrect";
        return;
    }

    checked++;

    if (answer === currentRussianWord.et.toLowerCase()) {

        score++;

        estonianResult.textContent = "✓ Õige vastus!";
        estonianResult.className = "result correct";

    } else {

        estonianResult.textContent =
            `✗ Vale. Õige vastus: ${currentRussianWord.et}`;

        estonianResult.className = "result incorrect";
    }

    updateScore();
}


// Uuendab punktisüsteemi ekraanil.

function updateScore() {
    scoreElement.textContent = score;
    checkedElement.textContent = checked;
}


// Kontrollimine nupuga.

checkRussianButton.addEventListener("click", checkRussianAnswer);

checkEstonianButton.addEventListener("click", checkEstonianAnswer);


// Enter-klahviga vastuse kontrollimine.

russianAnswer.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        checkRussianAnswer();
    }

});

estonianAnswer.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        checkEstonianAnswer();
    }

});


// Uute sõnade genereerimine.

newWordsButton.addEventListener("click", generateWords);


// Esimesel laadimisel kuvatakse juhuslikud sõnad.

generateWords();