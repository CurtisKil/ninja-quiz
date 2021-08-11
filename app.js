const correctAnswers = ["B", "B", "A", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const span = document.querySelector("span");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //   User Score
  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  //   Check Answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
    // Display Results
    scrollTo(0, 0);
    result.classList.remove("d-none");
    // span.innerHTML = score + "%";

    let output = 0;
    const timer = setInterval(() => {
      span.innerHTML = `${output}%`;
      if (output === score) {
        clearInterval(timer);
      } else {
        output++;
      }
    }, 15);
  });
});
