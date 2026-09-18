// Hajusrakenduste teemaline sõnavara.
// Eesti sõna ja selle venekeelne vaste.

const words = [

    {
        et: "hajusrakendus",
        ru: "распределенное приложение"
    },

    {
        et: "hajutatud süsteem",
        ru: "распределенная система"
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
        et: "veebiserver",
        ru: "веб-сервер"
    },

    {
        et: "rakendusserver",
        ru: "сервер приложений"
    },

    {
        et: "andmebaas",
        ru: "база данных"
    },

    {
        et: "andmebaasiserver",
        ru: "сервер базы данных"
    },

    {
        et: "andmevahetus",
        ru: "обмен данными"
    },

    {
        et: "andmeedastus",
        ru: "передача данных"
    },

    {
        et: "võrk",
        ru: "сеть"
    },

    {
        et: "arvutivõrk",
        ru: "компьютерная сеть"
    },

    {
        et: "veebiteenus",
        ru: "веб-сервис"
    },

    {
        et: "endpoint",
        ru: "конечная точка"
    },

    {
        et: "HTTP päring",
        ru: "HTTP запрос"
    },

    {
        et: "HTTP-protokoll",
        ru: "протокол HTTP"
    },

    {
        et: "protokoll",
        ru: "протокол"
    },

    {
        et: "andmestruktuur",
        ru: "структура данных"
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
        et: "sõnum",
        ru: "сообщение"
    },

    {
        et: "sõnumijärjekord",
        ru: "очередь сообщений"
    },

    {
        et: "sõnumivahendus",
        ru: "обмен сообщениями"
    },

    {
        et: "mikroteenus",
        ru: "микросервис"
    },

    {
        et: "mikroteenuste arhitektuur",
        ru: "архитектура микросервисов"
    },

    {
        et: "teenus",
        ru: "сервис"
    },

    {
        et: "teenusepakkuja",
        ru: "поставщик услуг"
    },

    {
        et: "pilveteenus",
        ru: "облачный сервис"
    },

    {
        et: "pilvandmetöötlus",
        ru: "облачные вычисления"
    },

    {
        et: "pilv",
        ru: "облако"
    },

    {
        et: "pilveplatvorm",
        ru: "облачная платформа"
    },

    {
        et: "virtuaalserver",
        ru: "виртуальный сервер"
    },

    {
        et: "konteiner",
        ru: "контейнер"
    },

    {
        et: "konteineriseerimine",
        ru: "контейнеризация"
    },

    {
        et: "serverita arhitektuur",
        ru: "бессерверная архитектура"
    },

    {
        et: "serverless",
        ru: "бессерверная технология"
    },

    {
        et: "koormus",
        ru: "нагрузка"
    },

    {
        et: "koormusjaotus",
        ru: "распределение нагрузки"
    },

    {
        et: "koormusjaotur",
        ru: "балансировщик нагрузки"
    },

    {
        et: "skaleerimine",
        ru: "масштабирование"
    },

    {
        et: "horisontaalne skaleerimine",
        ru: "горизонтальное масштабирование"
    },

    {
        et: "vertikaalne skaleerimine",
        ru: "вертикальное масштабирование"
    },

    {
        et: "replikatsioon",
        ru: "репликация"
    },

    {
        et: "andmebaasi replikatsioon",
        ru: "репликация базы данных"
    },

    {
        et: "varundamine",
        ru: "резервное копирование"
    },

    {
        et: "tõrketaluvus",
        ru: "отказоустойчивость"
    },

    {
        et: "kättesaadavus",
        ru: "доступность"
    },

    {
        et: "töökindlus",
        ru: "надежность"
    },

    {
        et: "latentsus",
        ru: "задержка"
    },

    {
        et: "jõudlus",
        ru: "производительность"
    },

    {
        et: "autentimine",
        ru: "аутентификация"
    },

    {
        et: "autoriseerimine",
        ru: "авторизация"
    },

    {
        et: "kasutaja",
        ru: "пользователь"
    },

    {
        et: "kasutajaroll",
        ru: "роль пользователя"
    },

    {
        et: "turvalisus",
        ru: "безопасность"
    },

    {
        et: "ligipääs",
        ru: "доступ"
    },

    {
        et: "ligipääsuõigus",
        ru: "право доступа"
    },

    {
        et: "sessioon",
        ru: "сессия"
    },

    {
        et: "märk",
        ru: "токен"
    },

    {
        et: "krüpteerimine",
        ru: "шифрование"
    },

    {
        et: "logimine",
        ru: "журналирование"
    },

    {
        et: "seire",
        ru: "мониторинг"
    },

    {
        et: "veatuvastus",
        ru: "обнаружение ошибок"
    },

    {
        et: "sündmus",
        ru: "событие"
    },

    {
        et: "sündmuspõhine arhitektuur",
        ru: "событийно-ориентированная архитектура"
    },

    {
        et: "sünkroniseerimine",
        ru: "синхронизация"
    },

    {
        et: "asünkroonne töötlus",
        ru: "асинхронная обработка"
    },

    {
        et: "sünkroonne töötlus",
        ru: "синхронная обработка"
    },

    {
        et: "vahemälu",
        ru: "кэш"
    },

    {
        et: "vahemällu salvestamine",
        ru: "кэширование"
    },

    {
        et: "andmebaasiühendus",
        ru: "подключение к базе данных"
    },

    {
        et: "rakendus",
        ru: "приложение"
    },

    {
        et: "arhitektuur",
        ru: "архитектура"
    },

    {
        et: "komponent",
        ru: "компонент"
    },

    {
        et: "sõltuvus",
        ru: "зависимость"
    },

    {
        et: "integratsioon",
        ru: "интеграция"
    },

    {
        et: "süsteemiintegratsioon",
        ru: "системная интеграция"
    }

];


// Hetkel kuvatavad sõnad.

let currentEstonianWord;
let currentRussianWord;


// Punktisüsteem.

let score = 0;
let checked = 0;


// HTML elemendid.

const estonianWordElement =
    document.getElementById("estonianWord");

const russianWordElement =
    document.getElementById("russianWord");

const russianAnswer =
    document.getElementById("russianAnswer");

const estonianAnswer =
    document.getElementById("estonianAnswer");

const russianResult =
    document.getElementById("russianResult");

const estonianResult =
    document.getElementById("estonianResult");

const scoreElement =
    document.getElementById("score");

const checkedElement =
    document.getElementById("checked");

const russianSelect =
    document.getElementById("russianSelect");

const estonianSelect =
    document.getElementById("estonianSelect");


// Valib juhusliku sõna.

function getRandomWord() {

    const randomIndex =
        Math.floor(Math.random() * words.length);

    return words[randomIndex];
}


// Täidab vene keelse dropdowni.

function createRussianDropdown() {

    words.forEach((word, index) => {

        const option =
            document.createElement("option");

        option.value = index;

        option.textContent = word.ru;

        russianSelect.appendChild(option);
    });
}


// Täidab eesti keelse dropdowni.

function createEstonianDropdown() {

    words.forEach((word, index) => {

        const option =
            document.createElement("option");

        option.value = index;

        option.textContent = word.et;

        estonianSelect.appendChild(option);
    });
}


// Tekitab uued juhuslikud sõnad.

function generateWords() {

    currentEstonianWord = getRandomWord();

    currentRussianWord = getRandomWord();


    estonianWordElement.textContent =
        currentEstonianWord.et;

    russianWordElement.textContent =
        currentRussianWord.ru;


    russianAnswer.value = "";

    estonianAnswer.value = "";


    russianSelect.value = "";

    estonianSelect.value = "";


    russianResult.textContent = "";

    estonianResult.textContent = "";


    russianResult.className = "result";

    estonianResult.className = "result";
}


// Kontrollib Eesti -> Vene kirjutatud vastust.

function checkRussianAnswer() {

    const answer =
        russianAnswer.value.trim().toLowerCase();


    if (answer === "") {

        russianResult.textContent =
            "Sisesta kõigepealt vastus.";

        russianResult.className =
            "result incorrect";

        return;
    }


    checked++;


    if (
        answer ===
        currentEstonianWord.ru.toLowerCase()
    ) {

        score++;

        russianResult.textContent =
            "✓ Õige vastus!";

        russianResult.className =
            "result correct";

    } else {

        russianResult.textContent =
            `✗ Vale. Õige vastus: ${currentEstonianWord.ru}`;

        russianResult.className =
            "result incorrect";
    }


    updateScore();
}


// Kontrollib Vene -> Eesti kirjutatud vastust.

function checkEstonianAnswer() {

    const answer =
        estonianAnswer.value.trim().toLowerCase();


    if (answer === "") {

        estonianResult.textContent =
            "Sisesta kõigepealt vastus.";

        estonianResult.className =
            "result incorrect";

        return;
    }


    checked++;


    if (
        answer ===
        currentRussianWord.et.toLowerCase()
    ) {

        score++;

        estonianResult.textContent =
            "✓ Õige vastus!";

        estonianResult.className =
            "result correct";

    } else {

        estonianResult.textContent =
            `✗ Vale. Õige vastus: ${currentRussianWord.et}`;

        estonianResult.className =
            "result incorrect";
    }


    updateScore();
}


// Kontrollib Eesti -> Vene dropdowni.

function checkRussianDropdown() {

    if (russianSelect.value === "") {

        russianResult.textContent =
            "Vali kõigepealt vastus nimekirjast.";

        russianResult.className =
            "result incorrect";

        return;
    }


    const selectedIndex =
        Number(russianSelect.value);

    const selectedAnswer =
        words[selectedIndex].ru;


    checked++;


    if (
        selectedAnswer.toLowerCase() ===
        currentEstonianWord.ru.toLowerCase()
    ) {

        score++;

        russianResult.textContent =
            "✓ Õige vastus!";

        russianResult.className =
            "result correct";

    } else {

        russianResult.textContent =
            `✗ Vale. Õige vastus: ${currentEstonianWord.ru}`;

        russianResult.className =
            "result incorrect";
    }


    updateScore();
}


// Kontrollib Vene -> Eesti dropdowni.

function checkEstonianDropdown() {

    if (estonianSelect.value === "") {

        estonianResult.textContent =
            "Vali kõigepealt vastus nimekirjast.";

        estonianResult.className =
            "result incorrect";

        return;
    }


    const selectedIndex =
        Number(estonianSelect.value);

    const selectedAnswer =
        words[selectedIndex].et;


    checked++;


    if (
        selectedAnswer.toLowerCase() ===
        currentRussianWord.et.toLowerCase()
    ) {

        score++;

        estonianResult.textContent =
            "✓ Õige vastus!";

        estonianResult.className =
            "result correct";

    } else {

        estonianResult.textContent =
            `✗ Vale. Õige vastus: ${currentRussianWord.et}`;

        estonianResult.className =
            "result incorrect";
    }


    updateScore();
}


// Uuendab punktisüsteemi.

function updateScore() {

    scoreElement.textContent = score;

    checkedElement.textContent = checked;
}


// Kirjutatud vastuste nupud.

document
    .getElementById("checkRussian")
    .addEventListener("click", checkRussianAnswer);

document
    .getElementById("checkEstonian")
    .addEventListener("click", checkEstonianAnswer);


// Dropdown nuppude sündmused.

document
    .getElementById("selectRussian")
    .addEventListener("click", checkRussianDropdown);

document
    .getElementById("selectEstonian")
    .addEventListener("click", checkEstonianDropdown);


// Uute sõnade nupp.

document
    .getElementById("newWords")
    .addEventListener("click", generateWords);


// Enter-klahviga saab vastust kontrollida.

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


// Käivitamisel täidetakse dropdownid
// ja genereeritakse juhuslikud sõnad.

createRussianDropdown();

createEstonianDropdown();

generateWords();
