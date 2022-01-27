// tableau de question et réponse 
const questions = [
    {
        question: "En quelle année Cristiano ronaldo <br/> a signé son premier contrat professionnel",
        answers: ["2002", "2005", "1999", "2001"],
        correct: 0
    },
    {
        question: "Combien de trophée collectif comptabilise <br/> Cristiano Ronaldo en 2021",
        answers: ["31", "39", "41", "36"],
        correct: 3
    },
    {
        question: "Sous quel entraîneur Cristiano Ronaldo a t-il jouer <br/> son premier match pro?",
        answers: ["Fernando Santos", "Laszlo Bölöni", "Alex Ferguson", "José Peseiro"],
        correct: 1
    },
    {
        question: "Contre quelle équipe a-t-il marquer son  <br/> premier triple de sa carrière?",
        answers: ["Fulham", "Crystal Palace", "Newcastle", "West Ham"],
        correct: 2
    },
    {
        question: "Quelle est la date de naissance <br/> de Cristiano Ronaldo",
        answers: ["15 fevrier 1985", "5 fevrier 1985", "15 Janvier 1984", "5 Janvier 1984"],
        correct: 1
    },
    {
        question: "Combien d'enfants à Cristiano Ronaldo?",
        answers: ["4", "6", "3", "5"],
        correct: 1
    },
    {
        question: "Premier Ballon d'Or de Cristiano Ronaldo?",
        answers: ["2006", "2008", "2010", "2007"],
        correct: 3
    },
    {
        question: "Nombre de club côtoyé par Cristiano Ronaldo?",
        answers: ["4", "3", "5", "1"],
        correct: 0
    },
    {
        question: "Taille Cristiano Ronaldo?",
        answers: ["1m90", "1m89", "1m87", "1m85"],
        correct: 2
    },
    {
        question: "Nombre de league des champions",
        answers: ["4", "5", "3", "6"],
        correct: 1
    }
];

  //initialisation des comptes à 0 pour le calcul du score a la fin? 

let currentQuestion = 0;
let yourAnswers = {
    points: 0,
    corrects: []
};

  //recuperation des boutons, chaine de question pour pouvoir les manipuler sur le js.

    const form = document.getElementById("answers");
    const titleQuestion = document.getElementById("title-question");
    const question = document.getElementById("question");
    const buttonStart = document.getElementById("btn-start");
    const buttonNext = document.getElementById("btn-next");

  // évenement click permettant d'avancer sur le quizz et affichage d'un message de bienvenue sur le quizz.

    const startGame = () => {
        titleQuestion.innerHTML = "Bienvenue sur le Quiz de <br/> Cristiano Ronaldooooo!";
        buttonStart.addEventListener("click", () => buildQuestion(0));
        buttonNext.addEventListener("click", () => checkAnswer());
        buttonsStyle(currentQuestion);
};

  // ce qui permet d'avancer dans les questions.

    const buildQuestion = (currentQuestion) => {
        if (currentQuestion < questions.length) {
        let ans = [];
        questions[currentQuestion].answers.forEach((item, index) => {
        ans.push(
        `<label><input type="radio" name="question" value="${index}">
        ${item}</label>`
);
});
    titleQuestion.innerHTML = `Question ${currentQuestion + 1}`;
    question.innerHTML = questions[currentQuestion].question;
    form.innerHTML = ans.join("");
    buttonsStyle(currentQuestion + 1);
} else {
    gameOver();
}
};

  // un peu de style pour les boutons .

const buttonsStyle = (currentQuestion) => {
buttonStart.innerHTML = "Jouer";
//display
if (currentQuestion === 0) {
    buttonStart.style.display = "block";
    buttonNext.style.display = "none";
} else {
    buttonStart.style.display = "none";
    buttonNext.style.display = "block";
}

// texte dans les boutons 
if (currentQuestion === questions.length) {
    buttonNext.innerHTML = "Terminer";
} else {
    buttonNext.innerHTML = "Valider";
}
};

  // ce qui permet de verifier si la reponse est correct ou non et calcul des scores corrects et dans quelle question elle a ete correct.

const checkAnswer = () => {
let userAnswer = document.forms["answers"]["question"].value;
if (userAnswer === "" || userAnswer === null) {
    alert("Choisissez une reponse!");
} else {
    userAnswer = Number(userAnswer);
    let correctAnswer = questions[currentQuestion].correct;
    if (userAnswer === correctAnswer) {
    yourAnswers.points++;
    yourAnswers.corrects.push(currentQuestion + 1);
}
    currentQuestion++;
    buildQuestion(currentQuestion);
}
};

  // message de fin de quizz, affichage du score et dans quelle question elles ont ete bonne.
const gameOver = () => {
    form.innerHTML = "";
    titleQuestion.innerHTML = "Fin du Quiz";
    buttonStart.style.display = "none";
    buttonNext.style.display = "none";
    question.innerHTML = `Votre score est de ${yourAnswers.points
    }/10 et vous repondez correctement au question suivante ${yourAnswers.corrects.join(" - ")}`;
};

startGame();