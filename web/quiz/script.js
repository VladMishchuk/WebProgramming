const quizData = [
  {
    question: "Яка мова програмування найпопулярніша у 2023 році?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "JavaScript",
  },
  {
    question: "Що таке HTML?",
    a: "Мова програмування",
    b: "Мова розмітки",
    c: "База даних",
    d: "Операційна система",
    correct: "Мова розмітки",
  },
  {
    question: "Що таке CSS?",
    a: "Мова програмування",
    b: "Каскадні таблиці стилів",
    c: "База даних",
    d: "Операційна система",
    correct: "Каскадні таблиці стилів",
  },
  {
    question: "Що таке Git?",
    a: "Редактор коду",
    b: "Система контролю версій",
    c: "База даних",
    d: "Фреймворк",
    correct: "Система контролю версій",
  },
  {
    question: "Яка функція в JS дозволяє виводити дані в консоль?",
    a: "console.log()",
    b: "print()",
    c: "output()",
    d: "display()",
    correct: "console.log()",
  },
  {
    question: "Яким символом позначається однорядковий коментар у JavaScript?",
    a: "//",
    b: "/* */",
    c: "<!-- -->",
    d: "#",
    correct: "//",
  },
  {
    question: "Які існують типи даних у JavaScript?",
    a: "number, string, boolean",
    b: "object, function, array",
    c: "undefined, null",
    d: "все перераховані відповіді",
    correct: "все перераховані відповіді",
  },
  {
    question: "Яка функція у JavaScript дозволяє перетворити рядок в число?",
    a: "parseInt()",
    b: "toString()",
    c: "toFixed()",
    d: "toLocaleString()",
    correct: "parseInt()",
  },
  {
    question: "Які існують типи циклів у JavaScript?",
    a: "for, while, do/while",
    b: "repeat, until",
    c: "foreach, in",
    d: "всі перераховані відповіді",
    correct: "for, while, do/while",
  },
  {
    question: "Як можна створити новий елемент у HTML за допомогою JavaScript?",
    a: "document.createElement()",
    b: "document.getElement()",
    c: "document.newElement()",
    d: "document.create()",
    correct: "document.createElement()",
  },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
loadQuiz();

function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = document.getElementById(answerEl.id + "_text").innerHTML;
    }
  });
  return answer;
}
function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = "<h2>Ваш результат " + score + "/" + quizData.length + "</h2>";
    }
  }
});
