import { examples, explain } from "./explainer.js";

const form = document.querySelector("#ask");
const input = document.querySelector("#question");
const examplesRoot = document.querySelector("#examples");
const answer = document.querySelector("#answer");
const hint = document.querySelector("#hint");
const historyRoot = document.querySelector("#history");

const HISTORY_KEY = "what-if-history";

renderExamples();
renderHistory(loadHistory());

form.addEventListener("submit", (event) => {
  event.preventDefault();
  ask(input.value);
});

function renderExamples() {
  for (const example of examples) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chip";
    button.textContent = example;
    button.addEventListener("click", () => {
      input.value = example;
      ask(example);
    });
    examplesRoot.append(button);
  }
}

function ask(value) {
  const result = explain(value);
  if (!result) {
    hint.hidden = false;
    answer.hidden = true;
    input.focus();
    return;
  }

  hint.hidden = true;
  renderAnswer(result);
  remember(value.trim());
  answer.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderAnswer(result) {
  answer.hidden = false;
  answer.replaceChildren();

  const mark = document.createElement("p");
  mark.className = result.checked ? "mark mark-checked" : "mark mark-open";
  mark.textContent = result.mark;

  const title = document.createElement("h2");
  title.textContent = result.title;

  const summary = document.createElement("p");
  summary.className = "summary";
  summary.textContent = result.summary;

  const unfoldLabel = document.createElement("h3");
  unfoldLabel.textContent = result.labels.unfold;

  const steps = document.createElement("ol");
  steps.className = "steps";
  for (const step of result.steps) {
    const item = document.createElement("li");
    const when = document.createElement("span");
    when.className = "when";
    when.textContent = step.when;
    const text = document.createElement("p");
    text.textContent = step.text;
    item.append(when, text);
    steps.append(item);
  }

  const columns = document.createElement("div");
  columns.className = "columns";
  columns.append(renderList(result.labels.known, result.known), renderList(result.labels.open, result.open));

  answer.append(mark, title, summary, unfoldLabel, steps, columns);
}

function renderList(label, items) {
  const block = document.createElement("section");
  const heading = document.createElement("h3");
  heading.textContent = label;
  const list = document.createElement("ul");
  for (const item of items) {
    const li = document.createElement("li");
    li.textContent = item;
    list.append(li);
  }
  block.append(heading, list);
  return block;
}

function loadHistory() {
  try {
    const stored = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
    return Array.isArray(stored) ? stored.filter((item) => typeof item === "string").slice(0, 6) : [];
  } catch {
    return [];
  }
}

function remember(value) {
  const next = [value, ...loadHistory().filter((item) => item.toLowerCase() !== value.toLowerCase())].slice(0, 6);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
  renderHistory(next);
}

function renderHistory(items) {
  historyRoot.replaceChildren();
  if (items.length === 0) {
    historyRoot.hidden = true;
    return;
  }

  historyRoot.hidden = false;
  const label = document.createElement("p");
  label.className = "group-label";
  label.textContent = "Zuletzt gefragt";
  const row = document.createElement("div");
  row.className = "chips";
  for (const item of items) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chip chip-quiet";
    button.textContent = item;
    button.addEventListener("click", () => {
      input.value = item;
      ask(item);
    });
    row.append(button);
  }
  historyRoot.append(label, row);
}
