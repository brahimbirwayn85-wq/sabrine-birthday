/* =========================
   PAGE NAVIGATION
========================= */

function showPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const targetPage =
        document.getElementById(pageId);

    if (!targetPage) return;

    targetPage.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   ENVELOPE
========================= */

const envelope =
    document.getElementById("envelope");

const letter =
    document.getElementById("letter");


function openEnvelope() {

    if (envelope.classList.contains("open")) {
        return;
    }

    envelope.classList.add("open");

    setTimeout(() => {

        letter.classList.add("show");

        letter.setAttribute(
            "aria-hidden",
            "false"
        );

    }, 650);
}


envelope.addEventListener(
    "click",
    openEnvelope
);


envelope.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            openEnvelope();
        }
    }
);


/* =========================
   NO / YES BUTTONS
========================= */

const noBtn =
    document.getElementById("noBtn");

const yesBtn =
    document.getElementById("yesBtn");

const noMessage =
    document.getElementById("noMessage");

const answerButtons =
    document.querySelector(".answer-buttons");


let noClicks = 0;


const noTexts = [

    "متأكدة ؟؟ 🤧😭",

    "بليييز 😔🙃",

    "واسسسففففففف 😭😭🤧",

    "آخر فرصة، متأكدة ؟؟ 🥺😭",

    "طيب لاااا 😭😭🤧"

];


noBtn.addEventListener(
    "click",
    () => {

        noClicks++;


        /*
            كل مرة تكبر نعم
            مع إضافة margin
            حتى لا تطغى على العناصر
        */

        const scale =
            1 + (
                noClicks * 0.20
            );


        yesBtn.style.transform =
            `scale(${scale})`;


        yesBtn.style.margin =
            `${noClicks * 3}px ${noClicks * 4}px`;


        answerButtons.style.paddingTop =
            `${noClicks * 3}px`;

        answerButtons.style.paddingBottom =
            `${noClicks * 3}px`;

        answerButtons.style.paddingLeft =
            `${noClicks * 5}px`;

        answerButtons.style.paddingRight =
            `${noClicks * 5}px`;


        const index =
            Math.min(
                noClicks - 1,
                noTexts.length - 1
            );


        noMessage.textContent =
            noTexts[index];


        /*
            بعد الضغطة الخامسة
            يختفي زر لا
        */

        if (noClicks >= 5) {

            noBtn.classList.add(
                "hidden-after-clicks"
            );

            noMessage.textContent =
                "خلاص خلاص 😭🤧 ما عاد عندك خيار إلا نعم 😂💗";
        }

    }
);


/* =========================
   YES BUTTON
========================= */

const yesMessage =
    document.getElementById(
        "yesMessage"
    );

const nextBtn1 =
    document.getElementById(
        "nextBtn1"
    );


yesBtn.addEventListener(
    "click",
    () => {

        yesMessage.classList.add(
            "show"
        );

        answerButtons.style.display =
            "none";

        noMessage.style.display =
            "none";
    }
);


/* =========================
   PAGE 2
========================= */

nextBtn1.addEventListener(
    "click",
    () => {

        letter.classList.remove(
            "show"
        );

        letter.setAttribute(
            "aria-hidden",
            "true"
        );

        showPage("page2");
    }
);


/* =========================
   BIRTHDAY MUSIC
========================= */

const playMusicBtn =
    document.getElementById(
        "playMusicBtn"
    );

const pauseMusicBtn =
    document.getElementById(
        "pauseMusicBtn"
    );

const skipMusicBtn =
    document.getElementById(
        "skipMusicBtn"
    );

const music =
    document.getElementById(
        "birthdayMusic"
    );


function resetMusicButtons() {

    playMusicBtn.classList.remove(
        "hidden"
    );

    pauseMusicBtn.classList.add(
        "hidden"
    );

    skipMusicBtn.classList.remove(
        "hidden"
    );
}


/* PLAY */

playMusicBtn.addEventListener(
    "click",
    async () => {

        try {

            await music.play();

            playMusicBtn.classList.add(
                "hidden"
            );

            pauseMusicBtn.classList.remove(
                "hidden"
            );

        } catch (error) {

            console.error(
                "تعذر تشغيل الموسيقى:",
                error
            );
        }

    }
);


/* PAUSE */

pauseMusicBtn.addEventListener(
    "click",
    () => {

        music.pause();

        pauseMusicBtn.classList.add(
            "hidden"
        );

        playMusicBtn.classList.remove(
            "hidden"
        );
    }
);


/* SKIP */

skipMusicBtn.addEventListener(
    "click",
    () => {

        music.pause();

        music.currentTime = 0;

        resetMusicButtons();

        showPage("page3");
    }
);


/* SONG ENDED */

music.addEventListener(
    "ended",
    () => {

        resetMusicButtons();

        showPage("page3");
    }
);


/* =========================
   GIFTS
========================= */

const giftCards =
    document.querySelectorAll(
        ".gift-card"
    );

const giftContent =
    document.getElementById(
        "giftContent"
    );

const gameBox =
    document.getElementById(
        "gameBox"
    );

const photosBox =
    document.getElementById(
        "photosBox"
    );

const giftLetter =
    document.getElementById(
        "giftLetter"
    );


function hideGiftPanels() {

    gameBox.classList.add(
        "hidden"
    );

    photosBox.classList.add(
        "hidden"
    );

    giftLetter.classList.add(
        "hidden"
    );
}


giftCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            hideGiftPanels();

            giftContent.classList.remove(
                "hidden"
            );


            const gift =
                card.dataset.gift;


            /* GAME */

            if (gift === "game") {

                gameBox.classList.remove(
                    "hidden"
                );

                startGame();
            }


            /* PHOTOS */

            if (gift === "photos") {

                photosBox.classList.remove(
                    "hidden"
                );
            }


            /* LETTER */

            if (gift === "letter") {

                giftLetter.classList.remove(
                    "hidden"
                );
            }


            /*
                على الهاتف:
                انزل مباشرة للمحتوى
            */

            setTimeout(() => {

                giftContent.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 60);

        }
    );

});


/* =========================
   MINI GAME
========================= */

let score = 0;

let gameStarted = false;


const restartGameBtn =
    document.getElementById(
        "restartGameBtn"
    );


function startGame() {

    if (gameStarted) {
        return;
    }


    gameStarted = true;

    score = 0;


    const game =
        document.getElementById(
            "heartGame"
        );

    const scoreText =
        document.getElementById(
            "score"
        );

    const result =
        document.getElementById(
            "gameResult"
        );


    game.innerHTML = "";

    scoreText.textContent =
        "القلوب: 0 / 10";

    result.textContent =
        "";

    restartGameBtn.classList.add(
        "hidden"
    );


    createHeart();
}


function createHeart() {

    if (score >= 10) {

        document.getElementById(
            "gameResult"
        ).textContent =
            "فزتِ! 🎉💗 هذه الجائزة لكِ 🌸";


        gameStarted = false;


        restartGameBtn.classList.remove(
            "hidden"
        );


        return;
    }


    const game =
        document.getElementById(
            "heartGame"
        );


    const heart =
        document.createElement(
            "div"
        );


    heart.className =
        "game-heart";


    heart.textContent =
        "💗";


    const heartSize = 45;


    const maxX =
        Math.max(
            0,
            game.clientWidth -
            heartSize
        );


    const maxY =
        Math.max(
            0,
            game.clientHeight -
            heartSize
        );


    heart.style.left =
        Math.random() *
        maxX +
        "px";


    heart.style.top =
        Math.random() *
        maxY +
        "px";


    heart.addEventListener(
        "click",
        () => {

            score++;


            document.getElementById(
                "score"
            ).textContent =
                `القلوب: ${score} / 10`;


            heart.remove();


            createHeart();
        }
    );


    game.appendChild(
        heart
    );
}


restartGameBtn.addEventListener(
    "click",
    startGame
);


/* =========================
   CONTINUE
========================= */

const continueBtn =
    document.getElementById(
        "continueBtn"
    );


continueBtn.addEventListener(
    "click",
    () => {

        showPage("page4");

    }
);


/* =========================
   50 LANGUAGES
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

    ["الرومانية", "Te iubesc 🤍🌹"],

    ["التشيكية", "Miluji tě 🤍🌸"],

    ["السلوفاكية", "Ľúbim ťa 🤍🌷"],

    ["المجرية", "Szeretlek 🤍🌹"],

    ["البلغارية", "Обичам те 🤍🌸"],

    ["الصربية", "Волим те 🤍🌷"],

    ["الكرواتية", "Volim te 🤍🌹"],

    ["السلوفينية", "Ljubim te 🤍🌸"],

    ["الألبانية", "Të dua 🤍🌷"],

    ["الليتوانية", "Aš tave myliu 🤍🌹"],

    ["اللاتفية", "Es tevi mīlu 🤍🌸"],

    ["الإستونية", "Ma armastan sind 🤍🌷"],

    ["الجورجية", "მიყვარხარ 🤍🌹"],

    ["الأرمينية", "Ես քեզ սիրում եմ 🤍🌸"],

    ["الماليزية", "Aku cinta padamu 🤍🌷"],

    ["السواحيلية", "Nakupenda 🤍🌹"],

    ["الأفريكانية", "Ek is lief vir jou 🤍🌸"],

    ["الأيسلندية", "Ég elska þig 🤍🌷"],

    ["الأيرلندية", "Is breá liom tú 🤍🌹"],

    ["الويلزية", "Rwy'n dy garu di 🤍🌸"],

    ["الكتالونية", "T'estimo 🤍🌷"]

];


const loveList =
    document.getElementById(
        "loveList"
    );


languages.forEach(item => {

    const div =
        document.createElement(
            "div"
        );


    div.className =
        "love-item";


    div.innerHTML =
        `<strong>${item[0]}</strong><br>${item[1]}`;


    loveList.appendChild(
        div
    );

});


/* =========================
   RATING
========================= */

const ratingOpenBtn =
    document.getElementById(
        "ratingOpenBtn"
    );

const ratingBox =
    document.getElementById(
        "ratingBox"
    );

const ratingRange =
    document.getElementById(
        "ratingRange"
    );

const ratingValue =
    document.getElementById(
        "ratingValue"
    );

const ratingEmoji =
    document.getElementById(
        "ratingEmoji"
    );

const sendRatingBtn =
    document.getElementById(
        "sendRatingBtn"
    );

const ratingStatus =
    document.getElementById(
        "ratingStatus"
    );


const ratingEmojis = [

    "😭",

    "😢",

    "🥺",

    "😔",

    "🙃",

    "🙂",

    "😊",

    "🥰",

    "🤭",

    "🥹",

    "🤧"

];


ratingOpenBtn.addEventListener(
    "click",
    () => {

        ratingBox.classList.toggle(
            "hidden"
        );


        if (
            !ratingBox.classList.contains(
                "hidden"
            )
        ) {

            ratingBox.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }

    }
);


function updateRating() {

    const value =
        Number(
            ratingRange.value
        );


    ratingValue.textContent =
        value;


    ratingEmoji.textContent =
        ratingEmojis[value];
}


ratingRange.addEventListener(
    "input",
    updateRating
);


updateRating();


/* =========================
   RATING DELIVERY
========================= */

/*
    ضعي رقم واتسابك هنا بصيغة دولية
    بدون + أو مسافات.

    مثال المغرب:
    2126XXXXXXXX

    ويمكنك أيضًا وضع بريدك الإلكتروني
    في YOUR_EMAIL.
*/

const YOUR_WHATSAPP = "212716609033";

const YOUR_EMAIL = "brahimbirwayn85@gmail.com";


sendRatingBtn.addEventListener(
    "click",
    () => {

        const value =
            Number(
                ratingRange.value
            );


        const emoji =
            ratingEmojis[value];


        const message =
            `صبرينة قيّمت الهدية بـ ${value}/10 ${emoji}\n` +
            `من موقع عيد الميلاد 🎂💗`;


        /*
            WhatsApp
        */

        if (
            YOUR_WHATSAPP.trim() !== ""
        ) {

            const whatsappUrl =
                `https://wa.me/${YOUR_WHATSAPP.trim()}?text=${encodeURIComponent(message)}`;


            window.open(
                whatsappUrl,
                "_blank",
                "noopener,noreferrer"
            );


            ratingStatus.textContent =
                "تم تجهيز التقييم في واتساب 💗";


            return;
        }


        /*
            Email
        */

        if (
            YOUR_EMAIL.trim() !== ""
        ) {

            const mailUrl =
                `mailto:${YOUR_EMAIL.trim()}?subject=${encodeURIComponent("تقييم هدية صبرينة 🎁")}&body=${encodeURIComponent(message)}`;


            window.location.href =
                mailUrl;


            ratingStatus.textContent =
                "تم تجهيز التقييم في البريد 💌";


            return;
        }


        /*
            لم يتم إعداد وسيلة الإرسال
        */

        ratingStatus.textContent =
            "التقييم جاهز، لكن يجب وضع رقم واتسابك أو بريدك في الكود أولًا 📩";

    }
);