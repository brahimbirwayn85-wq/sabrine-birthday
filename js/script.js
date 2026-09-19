/* =========================
   PAGE NAVIGATION
========================= */

function showPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* =========================
   ENVELOPE
========================= */

const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");

envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {
        letter.classList.add("show");
    }, 800);

});

/* =========================
   NO BUTTON
========================= */

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const noMessage = document.getElementById("noMessage");

let noClicks = 0;

const noTexts = [
    "متأكدة ؟؟ 🥺🥺",
    "متأكدة جدًا ؟؟ 😭😭",
    "فكري مرة ثانية 🥺💔",
    "صبرينة لااا 😭😭",
    "آخر فرصة 😭",
    "حتى بعد كل هذا؟ 🥹"
];

noBtn.addEventListener("click", () => {

    noClicks++;

    const scale = 1 + (noClicks * 0.35);

    yesBtn.style.transform = `scale(${scale})`;

    const index = Math.min(
        noClicks - 1,
        noTexts.length - 1
    );

    noMessage.innerHTML =
        noTexts[index];

});

/* =========================
   YES BUTTON
========================= */

const yesMessage =
    document.getElementById("yesMessage");

const nextBtn1 =
    document.getElementById("nextBtn1");

yesBtn.addEventListener("click", () => {

    yesMessage.classList.add("show");

    document.querySelector(".answer-buttons").style.display =
        "none";

    noMessage.style.display = "none";

});

/* =========================
   PAGE 2
========================= */

nextBtn1.addEventListener("click", () => {

    letter.classList.remove("show");

    showPage("page2");

});

/* ========================= BIRTHDAY MUSIC ========================= */ const playMusicBtn = document.getElementById("playMusicBtn"); const pauseMusicBtn = document.getElementById("pauseMusicBtn"); const skipMusicBtn = document.getElementById("skipMusicBtn"); const music = document.getElementById("birthdayMusic"); const openGiftsBtn = document.getElementById("openGiftsBtn"); /* ========================= PLAY ========================= */ playMusicBtn.addEventListener("click", () => { music.play(); playMusicBtn.classList.add("hidden"); pauseMusicBtn.classList.remove("hidden"); }); /* ========================= PAUSE ========================= */ pauseMusicBtn.addEventListener("click", () => { music.pause(); pauseMusicBtn.classList.add("hidden"); playMusicBtn.classList.remove("hidden"); }); /* ========================= SKIP ========================= */ skipMusicBtn.addEventListener("click", () => { music.pause(); music.currentTime = 0; playMusicBtn.classList.add("hidden"); pauseMusicBtn.classList.add("hidden"); skipMusicBtn.classList.add("hidden"); openGiftsBtn.classList.remove("hidden"); }); /* ========================= MUSIC ENDED ========================= */ music.addEventListener("ended", () => { playMusicBtn.classList.add("hidden"); pauseMusicBtn.classList.add("hidden"); skipMusicBtn.classList.add("hidden"); openGiftsBtn.classList.remove("hidden"); });

/* =========================
   GIFTS PAGE
========================= */

openGiftsBtn.addEventListener("click", () => {

    showPage("page3");

});

/* =========================
   GIFT SELECTION
========================= */

const giftCards =
    document.querySelectorAll(".gift-card");

const gameBox =
    document.getElementById("gameBox");

const giftLetter =
    document.getElementById("giftLetter");

const flowersBox =
    document.getElementById("flowersBox");

giftCards.forEach(card => {

    card.addEventListener("click", () => {

        gameBox.classList.add("hidden");
        giftLetter.classList.add("hidden");
        flowersBox.classList.add("hidden");

        const gift = card.dataset.gift;

        if (gift === "game") {
            gameBox.classList.remove("hidden");
            startGame();
        }

        if (gift === "letter") {
            giftLetter.classList.remove("hidden");
        }

        if (gift === "flowers") {
            flowersBox.classList.remove("hidden");
        }

    });

});

/* =========================
   MINI GAME
========================= */

let score = 0;
let gameStarted = false;

function startGame() {

    if (gameStarted) return;

    gameStarted = true;
    score = 0;

    const game =
        document.getElementById("heartGame");

    const scoreText =
        document.getElementById("score");

    const result =
        document.getElementById("gameResult");

    result.innerHTML = "";

    createHeart();

}

function createHeart() {

    if (score >= 10) {

        document.getElementById("gameResult").innerHTML =
            "فزتِ! 🎉💗 هذه الجائزة لكِ 🌸";

        gameStarted = false;

        return;
    }

    const game =
        document.getElementById("heartGame");

    const heart =
        document.createElement("div");

    heart.className = "game-heart";

    heart.innerHTML = "💗";

    const maxX =
        game.clientWidth - 50;

    const maxY =
        game.clientHeight - 50;

    heart.style.left =
        Math.random() * maxX + "px";

    heart.style.top =
        Math.random() * maxY + "px";

    heart.addEventListener("click", () => {

        score++;

        document.getElementById("score").innerHTML =
            `القلوب: ${score} / 10`;

        heart.remove();

        createHeart();

    });

    game.appendChild(heart);

}

/* =========================
   CONTINUE
========================= */

const continueBtn =
    document.getElementById("continueBtn");

continueBtn.addEventListener("click", () => {

    showPage("page4");

});

/* =========================
   30 LANGUAGES
========================= */

const languages = [

    ["العربية", "أحبك 🤍🌹"],
    ["الإنجليزية", "I love you 🤍🌸"],
    ["الفرنسية", "Je t’aime 🤍🌷"],
    ["الإسبانية", "Te amo 🤍🌹"],
    ["الإيطالية", "Ti amo 🤍🐱"],
    ["الألمانية", "Ich liebe dich 🤍🌸"],
    ["البرتغالية", "Eu te amo 🤍🌷"],
    ["الهولندية", "Ik hou van jou 🤍🐰"],
    ["التركية", "Seni seviyorum 🤍🌹"],
    ["اليابانية", "愛してる 🤍🌸"],
    ["الكورية", "사랑해 🤍🐻"],
    ["الصينية", "我爱你 🤍🌷"],
    ["الروسية", "Я тебя люблю 🤍🌹"],
    ["الأوكرانية", "Я тебе кохаю 🤍🌸"],
    ["اليونانية", "Σ' αγαπώ 🤍🐱"],
    ["العبرية", "אני אוהב אותך 🤍🌷"],
    ["الهندية", "मैं तुमसे प्यार करता हूँ 🤍🌸"],
    ["البنغالية", "আমি তোমাকে ভালোবাসি 🤍🌹"],
    ["الأردية", "میں تم سے محبت کرتا ہوں 🤍🌷"],
    ["الفارسية", "دوستت دارم 🤍🐰"],
    ["الإندونيسية", "Aku cinta kamu 🤍🌸"],
    ["الفلبينية", "Mahal kita 🤍🌹"],
    ["الفيتنامية", "Anh yêu em 🤍🌷"],
    ["التايلاندية", "ฉันรักคุณ 🤍🐻"],
    ["السويدية", "Jag älskar dig 🤍🌸"],
    ["النرويجية", "Jeg elsker deg 🤍🌹"],
    ["الدنماركية", "Jeg elsker dig 🤍🌷"],
    ["الفنلندية", "Minä rakastan sinua 🤍🐰"],
    ["البولندية", "Kocham cię 🤍🌸"],
    ["الرومانية", "Te iubesc 🤍🌹"]

];

const loveList =
    document.getElementById("loveList");

languages.forEach(item => {

    const div =
        document.createElement("div");

    div.className = "love-item";

    div.innerHTML =
        `<strong>${item[0]}</strong><br>${item[1]}`;

    loveList.appendChild(div);

});