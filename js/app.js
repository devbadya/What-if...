import { explain, featured, questionsFor, suggestions, topics } from "./explainer.js";

const COPY = {
  de: {
    kicker: "Eine Frage, eine Erklärung",
    lede: "Vierzig Fragen haben einen eigenen Text. Die Seite erkennt, welche du meinst, und schlägt sie vor.",
    label: "Deine Frage hinter What if",
    placeholder: "der Mond über Nacht verschwindet",
    submit: "Erklären",
    hint: "Schreib hinter „What if“ noch, was passieren soll.",
    meant: "Meintest du",
    start: "Zum Einstieg",
    recent: "Zuletzt gefragt",
    empty: "Keine geschriebene Frage dazu.",
    foot: "Die Fragen in der Liste sind für genau diesen Fall geschrieben. Passt keine, kommt eine Nachricht.",
    origin: "Herkunft",
    description: "Stell eine Was-wäre-wenn-Frage. Geschriebene Fragen werden erklärt. Alle anderen bleiben ungeprüft.",
    topics: "Themen",
    count: (count) => (count === 1 ? "1 geschriebene Frage" : `${count} geschriebene Fragen`),
  },
  en: {
    kicker: "One question, one explanation",
    lede: "Forty questions have their own text. The page recognizes which one you mean and suggests it.",
    label: "Your question after What if",
    placeholder: "the Moon disappeared overnight",
    submit: "Explain",
    hint: "Write what should happen after “What if”.",
    meant: "Did you mean",
    start: "Start here",
    recent: "Asked recently",
    empty: "No written question for that.",
    foot: "Questions in the list are written for that exact case. If none fits, you get a message.",
    origin: "Source",
    description: "Ask a what-if question. Written questions are explained. Every other question stays unchecked.",
    topics: "Topics",
    count: (count) => (count === 1 ? "1 written question" : `${count} written questions`),
  },
};

const form = document.querySelector("#ask");
const input = document.querySelector("#question");
const examplesRoot = document.querySelector("#examples");
const answer = document.querySelector("#answer");
const hint = document.querySelector("#hint");
const historyRoot = document.querySelector("#history");
const suggestRoot = document.querySelector("#suggest");
const topicsRoot = document.querySelector("#topics");
const catalogRoot = document.querySelector("#catalog");

const HISTORY_KEY = "what-if-history";
const LANG_KEY = "what-if-lang";
let activeTopic = "alle";
let lang = localStorage.getItem(LANG_KEY) === "en" ? "en" : "de";

document.querySelector("#to-de").addEventListener("click", () => setLang("de"));
document.querySelector("#to-en").addEventListener("click", () => setLang("en"));

applyChrome();
renderExamples();
renderTopics();
renderCatalog();
renderHistory(loadHistory());

form.addEventListener("submit", (event) => {
  event.preventDefault();
  ask(input.value);
});

input.addEventListener("input", () => {
  hint.hidden = true;
  renderSuggest();
  renderCatalog();
});

function text() {
  return COPY[lang];
}

function setLang(next) {
  lang = next === "en" ? "en" : "de";
  localStorage.setItem(LANG_KEY, lang);
  if (input.value.trim()) {
    const result = explain(input.value, lang);
    if (result?.checked) {
      input.value = result.title.replace(/^What if\s+/i, "").replace(/^Was wäre, wenn\s+/i, "").replace(/\?$/, "");
    }
    if (result) renderAnswer(result);
  }
  applyChrome();
  renderExamples();
  renderTopics();
  renderSuggest();
  renderCatalog();
  renderHistory(loadHistory());
}

function applyChrome() {
  const copy = text();
  document.documentElement.lang = lang;
  document.querySelector("#kicker").textContent = copy.kicker;
  document.querySelector("#lede").textContent = copy.lede;
  document.querySelector("#question-label").textContent = copy.label;
  document.querySelector("#submit").textContent = copy.submit;
  document.querySelector("#hint").textContent = copy.hint;
  document.querySelector("#start-label").textContent = copy.start;
  document.querySelector("#foot").textContent = copy.foot;
  document.querySelector("#topics").setAttribute("aria-label", copy.topics);
  document.querySelector('meta[name="description"]').setAttribute("content", copy.description);
  input.placeholder = copy.placeholder;
  document.querySelector("#to-de").classList.toggle("is-on", lang === "de");
  document.querySelector("#to-en").classList.toggle("is-on", lang === "en");
  document.querySelector("#to-de").setAttribute("aria-pressed", String(lang === "de"));
  document.querySelector("#to-en").setAttribute("aria-pressed", String(lang === "en"));
}

function renderExamples() {
  examplesRoot.replaceChildren();
  for (const example of featured(lang)) {
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

function renderTopics() {
  topicsRoot.replaceChildren();
  for (const topic of topics) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = topic.id === activeTopic ? "topic is-on" : "topic";
    button.textContent = topic[lang];
    button.setAttribute("aria-pressed", String(topic.id === activeTopic));
    button.addEventListener("click", () => {
      activeTopic = topic.id;
      renderTopics();
      renderCatalog();
    });
    topicsRoot.append(button);
  }
}

function renderSuggest() {
  const typed = input.value.trim().toLowerCase();
  const found = suggestions(input.value, 4, lang).filter((ask) => ask.toLowerCase() !== typed);
  suggestRoot.replaceChildren();
  if (found.length === 0) {
    suggestRoot.hidden = true;
    return;
  }

  suggestRoot.hidden = false;
  const label = document.createElement("p");
  label.className = "group-label";
  label.textContent = text().meant;
  const row = document.createElement("div");
  row.className = "chips";
  for (const askText of found) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chip";
    button.textContent = askText;
    button.addEventListener("click", () => {
      input.value = askText;
      ask(askText);
    });
    row.append(button);
  }
  suggestRoot.append(label, row);
}

function renderCatalog() {
  const query = input.value.trim().toLowerCase();
  const exact = questionsFor("alle", "de").concat(questionsFor("alle", "en")).some((item) => item.ask.toLowerCase() === query);
  const searching = query.length >= 2 && !exact;
  const hinted = searching ? new Set(suggestions(query, 40, lang)) : null;
  const list = questionsFor(searching ? "alle" : activeTopic, lang).filter((item) => {
    if (!hinted) return true;
    return item.ask.toLowerCase().includes(query) || hinted.has(item.ask);
  });

  catalogRoot.replaceChildren();
  if (list.length === 0) {
    const empty = document.createElement("p");
    empty.className = "lede";
    empty.textContent = text().empty;
    catalogRoot.append(empty);
    return;
  }

  const label = document.createElement("p");
  label.className = "group-label";
  label.textContent = text().count(list.length);

  const stack = document.createElement("div");
  stack.className = "catalog";
  const groups = new Map();
  for (const item of list) {
    if (!groups.has(item.topic)) groups.set(item.topic, []);
    groups.get(item.topic).push(item);
  }

  for (const [topicId, items] of groups) {
    const block = document.createElement("section");
    const heading = document.createElement("h2");
    heading.textContent = topics.find((topic) => topic.id === topicId)?.[lang] || topicId;
    const questions = document.createElement("div");
    questions.className = "question-list";
    for (const item of items) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "question";
      button.textContent = item.ask;
      button.addEventListener("click", () => {
        input.value = item.ask;
        ask(item.ask);
      });
      questions.append(button);
    }
    block.append(heading, questions);
    stack.append(block);
  }

  catalogRoot.append(label, stack);
}

function ask(value) {
  const result = explain(value, lang);
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

  const notice = renderNotice(result);

  const title = document.createElement("h2");
  title.textContent = result.title;

  const summary = document.createElement("p");
  summary.className = "summary";
  summary.textContent = result.summary;

  const neighbor = document.createElement("p");
  if (result.neighbor) {
    neighbor.className = "neighbor";
    neighbor.textContent = result.neighbor;
  }

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
  const origin = result.basis ? `${text().origin}: ${result.basis}` : "";
  columns.append(renderList(result.labels.known, result.known, origin), renderList(result.labels.open, result.open));

  answer.append(...(notice ? [notice] : []), mark, title, summary, ...(result.neighbor ? [neighbor] : []), unfoldLabel, steps, columns);
  if (notice) notice.focus();
}

function renderNotice(result) {
  if (!result.message) return null;

  const notice = document.createElement("div");
  notice.className = "notice";
  notice.tabIndex = -1;

  const kicker = document.createElement("p");
  kicker.className = "notice-kicker";
  kicker.textContent = result.lang === "en" ? "Message" : "Nachricht";

  const text = document.createElement("p");
  text.textContent = result.message;
  notice.append(kicker, text);

  if (!result.suggestion) return notice;

  const suggest = document.createElement("p");
  suggest.className = "notice-kicker";
  suggest.textContent = result.lang === "en" ? "Suggestion" : "Vorschlag";

  const button = document.createElement("button");
  button.type = "button";
  button.className = "chip";
  button.textContent = result.suggestion;
  button.addEventListener("click", () => {
    input.value = result.suggestion;
    ask(result.suggestion);
  });
  notice.append(suggest, button);
  return notice;
}

function renderList(label, items, basis = "") {
  const block = document.createElement("section");
  const heading = document.createElement("h3");
  heading.textContent = label;
  const list = document.createElement("ul");
  for (const item of items) {
    const li = document.createElement("li");
    li.textContent = item;
    if (basis) {
      const from = document.createElement("p");
      from.className = "basis";
      from.textContent = basis;
      li.append(from);
    }
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
  label.textContent = text().recent;
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
