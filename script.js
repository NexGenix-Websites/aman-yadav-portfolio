const quest = document.querySelector(".quest-dialog");
const screens = [...document.querySelectorAll("[data-quest-screen]")];
const answers = [...document.querySelectorAll("[data-answer]")];
const routeNodes = [...document.querySelectorAll("[data-route-node]")];
const feedback = document.querySelector("[data-feedback]");
const correctRoute = ["amplify", "edge"];
let step = 0;

function showScreen(name) {
  screens.forEach((screen) => {
    screen.hidden = screen.dataset.questScreen !== name;
  });
}

function resetQuest() {
  step = 0;
  answers.forEach((answer) => answer.classList.remove("is-correct", "is-wrong"));
  routeNodes.forEach((node, index) => {
    node.classList.toggle("route-node-done", index === 0);
    node.classList.remove("route-node-active");
  });
  feedback.textContent = "";
  showScreen("intro");
}

function startQuest() {
  resetQuest();
  showScreen("game");
  routeNodes[1].classList.add("route-node-active");
  document.querySelector("[data-step-label]").textContent = "STEP 1 OF 2";
}

function handleAnswer(event) {
  const selected = event.currentTarget;
  const expected = correctRoute[step];
  answers.forEach((answer) => answer.classList.remove("is-correct", "is-wrong"));

  if (selected.dataset.answer !== expected) {
    selected.classList.add("is-wrong");
    feedback.textContent = "Not quite — follow the request from browser to host, then to an edge.";
    return;
  }

  selected.classList.add("is-correct");
  if (step === 0) {
    feedback.textContent = "That’s the host. Where can the page be served from next?";
    routeNodes[1].classList.remove("route-node-active");
    routeNodes[1].classList.add("route-node-done");
    routeNodes[2].classList.add("route-node-active");
    step = 1;
    document.querySelector("[data-step-label]").textContent = "STEP 2 OF 2";
    return;
  }

  routeNodes[2].classList.remove("route-node-active");
  routeNodes[2].classList.add("route-node-done");
  feedback.textContent = "Signal received!";
  window.setTimeout(() => showScreen("result"), 350);
}

document.querySelectorAll("[data-open-quest]").forEach((button) => {
  button.addEventListener("click", () => {
    resetQuest();
    quest.showModal();
  });
});
document.querySelector("[data-start-quest]").addEventListener("click", startQuest);
document.querySelectorAll("[data-close-quest]").forEach((button) => button.addEventListener("click", () => quest.close()));
document.querySelector("[data-reset-quest]").addEventListener("click", startQuest);
answers.forEach((answer) => answer.addEventListener("click", handleAnswer));
quest.addEventListener("click", (event) => {
  if (event.target === quest) quest.close();
});
quest.addEventListener("close", resetQuest);
document.querySelector("[data-year]").textContent = new Date().getFullYear();
