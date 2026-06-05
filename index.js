// =====================

function createHeart(){

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    // heart.innerHTML = "❤️";
    const hearts = [
    "❤️",
    "💖",
    "💕",
    "💗"
];

heart.innerHTML =
hearts[
Math.floor(
Math.random() * hearts.length
)
];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 5 + 4 + "s";

    document
        .querySelector(".hearts-container")
        .appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);

}

setInterval(createHeart, 300);
// PAGES
// =====================


function showPage(pageId) {

    document.querySelectorAll(".page")
        .forEach(page => {
            page.classList.remove("active");
        });

    document.getElementById(pageId)
        .classList.add("active");

    // تشغيل الرسالة عند الوصول لصفحة الخطاب
    if (pageId === "letter") {
        startLetter();
    }
}

function showModal(){

    document
    .getElementById("wrongAnswerModal")
    .style.display = "flex";

}

function closeModal(){

    document
    .getElementById("wrongAnswerModal")
    .style.display = "none";

}

// =====================
// START ADVENTURE
// =====================

function startAdventure() {

    const music =
        document.getElementById("music");

    music.play();

    showPage("quiz");

    loadQuestion();
}

// =====================
// QUIZ
// =====================

const quiz = [

    {
        question: "بتحبني؟",
        answers: [
            "طبعا يحياتي",
            "بحبك",
         " (بصوتك) بعشقك عشق كدا "
            
        ],
            
         
        correct: " (بصوتك) بعشقك عشق كدا "
    },

    {
        question: "لو مكنتش اتولدت  كنت هتتجوز مين",
        answers: [
            "مش هتجوز",
             "هستناكي تتولدي",
            "مش هتجوز"
           
           
        ],
        correct:  "هستناكي تتولدي"
    },

    {
        question: "  اي اكتر اسم بحبه اسمعه منك ",
        answers: [
            "ايمان",
            "منو",
            "منونه",
            "مانا"
        ],
        correct: "منونه"
    }

];

let currentQuestion = 0;

function loadQuestion() {

    const question =
        document.getElementById("question");

    const answers =
        document.getElementById("answers");

    question.innerText =
        quiz[currentQuestion].question;

    answers.innerHTML = "";

    quiz[currentQuestion].answers.forEach(answer => {

        const btn =
            document.createElement("button");

        btn.innerText = answer;

        btn.onclick = () => {

            if (
                answer ===
                quiz[currentQuestion].correct
            ) {

                currentQuestion++;

                if (
                    currentQuestion <
                    quiz.length
                ) {

                    loadQuestion();

                } else {
                    showPage("success");

setTimeout(() => {

    showPage("passwordPage");

}, 2500);

                }

            } else {

           showModal();

            }

        };

        answers.appendChild(btn);

    });

}

// =====================
// PASSWORD
// =====================

function checkPassword() {

    const password =
        document
        .getElementById("passwordInput")
        .value;

if (password === "HappyBirthday") {

    showPage("gift");



    } else {
          showModal();


        // alert("Wrong Password 🔐");

    }

}


// =====================
// GIFT
// =====================

function openGift() {

    confetti({

        particleCount: 250,

        spread: 180,

        origin: {
            y: 0.6
        }

    });

    document
        .getElementById("giftMessage")
        .innerHTML =
        " Happy Birthday my love❤️ ";

    document
        .getElementById("memoryBtn")
        .style.display =
        "inline-block";

}

// =====================
// LETTER
// =====================


const letterMessage =

`عيد ميلاد أحن حد في الدنيا كل سنة وأنت طيب يا حبيب عمري ❤️
كل سنة وأنت سندي وصاحبي وأخويا وحبيبي وكل حاجة في حياتي.🥺❤️
أول عيد ميلاد يعدي علينا وإحنا سوا، وعقبال العمر كله وانت مبسوط وبخير وفي أحسن حال وأشوفك أنجح واحد في الدنيا وتحقق كل اللي نفسك فيه، وأفضل موجودة جنبك في كل خطوة فخورة بيك وبكل حاجة بتعملها.
شكرًا على كل حاجة بتعملها عشاني وانك دايمًا مخليني مبسوطة ومطمنة🥺❤️
مفيش كلام يقدر يوصف  بحبك اد اي وان وجودك فرق في حياتي 
ربنا رزقني بأحن وأطيب راجل في الدنيا  
وربنا يخليك ليا وميحرمنيش منك أبدًا، ويجمعنا سوا في بيت واحد ونفضل سند لبعض طول العمر.
بحبك أوي يا حمودي 🥺😘❤️

With love,
Eman ❤️`;

let letterIndex = 0;

function startLetter() {

    const letter =
        document.getElementById("letterText");

    if (letter.dataset.loaded)
        return;

    function typeWriter() {

        if (
            letterIndex <
            letterMessage.length
        ) {

            letter.innerHTML +=
                letterMessage.charAt(letterIndex);

            letterIndex++;

            setTimeout(
                typeWriter,
                40
            );

        }

    }

    letter.dataset.loaded = true;

    typeWriter();

}

// =====================
// COUNTDOWN
// =====================

let count = 3;

const countdown =
    document.getElementById("countdown");

if (countdown) {

    const timer = setInterval(() => {

        count--;

        if (count > 0) {

            countdown.innerText =
                count + "...";

        } else {

            countdown.innerText =
                "🎉";

            clearInterval(timer);

        }

    }, 1000);

}