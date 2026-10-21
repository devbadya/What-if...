import { SCENES } from "./scenes.js";

const LABELS = {
  de: {
    checked: "Für diese Frage geschrieben",
    unchecked: "Ungeprüft",
    unfold: "So läuft es ab",
    known: "Was sich sagen lässt",
    open: "Was offen bleibt",
    check: "So prüft man die Frage",
    settled: "Was gefunden wurde",
    unset: "Was nicht gefunden wurde",
  },
  en: {
    checked: "Written for this question",
    unchecked: "Unchecked",
    unfold: "How it would unfold",
    known: "What we can say",
    open: "What stays open",
    check: "How to check the question",
    settled: "What was found",
    unset: "What was not found",
  },
};

export const examples = [
  "der Mond über Nacht verschwindet",
  "niemand mehr schlafen müsste",
  "das Internet morgen ausfällt",
  "die Schwerkraft nur halb so stark wäre",
  "niemand mehr lügen könnte",
  "die Zeit stehen bleibt",
];

export const topics = [
  { id: "alle", label: "Alle" },
  { id: "himmel", label: "Himmel" },
  { id: "koerper", label: "Körper" },
  { id: "zusammen", label: "Zusammenleben" },
  { id: "technik", label: "Technik" },
  { id: "natur", label: "Natur" },
  { id: "sinn", label: "Sinne und Regeln" },
];

export function questionsFor(topicId) {
  const scenes = !topicId || topicId === "alle" ? SCENES : SCENES.filter((scene) => scene.topic === topicId);
  return scenes.map((scene) => ({ topic: scene.topic, ask: scene.written.de }));
}

export function suggestions(raw, limit = 4) {
  const text = String(raw || "").toLowerCase().trim();
  if (text.length < 2) return [];
  return SCENES.map((scene) => {
    let score = 0;
    for (const key of scene.keywords || []) {
      if (text.includes(key)) score += key.length;
    }
    const written = scene.written.de.toLowerCase();
    if (text.length > 3 && (written.includes(text) || text.includes(written))) score += 40;
    return { ask: scene.written.de, score };
  })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .filter((item, index, list) => list.findIndex((other) => other.ask === item.ask) === index)
    .slice(0, limit)
    .map((item) => item.ask);
}

export function explain(raw) {
  const parsed = parseQuestion(raw);
  if (!parsed) return null;

  const scene = SCENES.find((item) => item.patterns.some((pattern) => pattern.test(parsed.norm)));
  const labels = LABELS[parsed.lang];
  const body = scene ? scene[parsed.lang] : compose(parsed);

  return {
    lang: parsed.lang,
    title: parsed.title,
    checked: Boolean(scene),
    mark: scene ? labels.checked : labels.unchecked,
    labels: scene
      ? { unfold: labels.unfold, known: labels.known, open: labels.open }
      : { unfold: labels.check, known: labels.settled, open: labels.unset },
    ...body,
  };
}

function parseQuestion(raw) {
  if (typeof raw !== "string") return null;
  let text = raw.trim().replace(/\s+/g, " ");
  if (text.length < 3) return null;

  const lang = detectLang(text);
  text = text.replace(/[.?!…]+$/g, "").trim();

  const prefixes = [
    /^what[\s-]*if\b\s*/i,
    /^was wäre,?\s+wenn\b\s*/i,
    /^was ware,?\s+wenn\b\s*/i,
    /^was wenn\b\s*/i,
    /^was passiert,?\s+wenn\b\s*/i,
    /^stell dir vor,?\s+(dass\s+)?/i,
    /^imagine\b\s*/i,
  ];

  let clause = text;
  for (const prefix of prefixes) {
    if (prefix.test(clause)) {
      clause = clause.replace(prefix, "").trim();
      break;
    }
  }

  if (clause.length < 3) return null;

  const title = lang === "en" ? `What if ${clause}?` : `Was wäre, wenn ${clause}?`;
  return {
    lang,
    clause,
    title,
    norm: `${text} ${clause}`.toLowerCase(),
  };
}

function detectLang(text) {
  const de = text.match(
    /\b(der|die|das|und|wenn|wäre|nicht|ein|eine|auf|mit|von|ist|sind|würde|könnte|über|nach|für|oder|auch|nur|noch|mehr|kein|niemand)\b/gi,
  );
  const en = text.match(
    /\b(the|and|if|would|not|of|to|is|are|could|what|when|for|with|everyone|nobody|without|disappear|people)\b/gi,
  );
  return (en?.length || 0) > (de?.length || 0) ? "en" : "de";
}

function word(body) {
  return new RegExp(`(?<![\\p{L}\\p{N}_])(?:${body})(?![\\p{L}\\p{N}_])`, "u");
}

const BOUNDS = [
  {
    deShort: "für wen",
    enShort: "who",
    missing: { de: "Für wen es gilt.", en: "Who it applies to." },
    hits: [
      {
        re: word("niemand|kein mensch|nobody|no one"),
        de: "Für wen: niemand.",
        en: "Who: nobody.",
        deShort: "für wen (niemand)",
        enShort: "who (nobody)",
      },
      {
        re: word("alle|jeder|jede|everyone|everybody"),
        de: "Für wen: alle.",
        en: "Who: everyone.",
        deShort: "für wen (alle)",
        enShort: "who (everyone)",
      },
      {
        re: word("wir|we"),
        de: "Für wen: wir.",
        en: "Who: we.",
        deShort: "für wen (wir)",
        enShort: "who (we)",
      },
      {
        re: word("ich|i"),
        de: "Für wen: ich.",
        en: "Who: I.",
        deShort: "für wen (ich)",
        enShort: "who (I)",
      },
    ],
  },
  {
    deShort: "ab wann",
    enShort: "from when",
    missing: { de: "Ab wann es gilt.", en: "From when it applies." },
    hits: [
      {
        re: /über nacht|ueber nacht|overnight/,
        de: "Ab wann: über Nacht.",
        en: "From when: overnight.",
        deShort: "ab wann (über Nacht)",
        enShort: "from when (overnight)",
      },
      {
        re: word("morgen|tomorrow"),
        de: "Ab wann: morgen.",
        en: "From when: tomorrow.",
        deShort: "ab wann (morgen)",
        enShort: "from when (tomorrow)",
      },
      {
        re: word("sofort|plötzlich|ploetzlich|suddenly|at once"),
        de: "Ab wann: sofort.",
        en: "From when: at once.",
        deShort: "ab wann (sofort)",
        enShort: "from when (at once)",
      },
    ],
  },
  {
    deShort: "wie lange",
    enShort: "how long",
    missing: { de: "Wie lange es gilt.", en: "How long it applies." },
    hits: [
      {
        re: /für immer|fuer immer|forever|for good/,
        de: "Wie lange: für immer.",
        en: "How long: forever.",
        deShort: "wie lange (für immer)",
        enShort: "how long (forever)",
      },
      {
        re: /einen monat|für einen monat|for a month|for one month/,
        de: "Wie lange: einen Monat.",
        en: "How long: one month.",
        deShort: "wie lange (einen Monat)",
        enShort: "how long (one month)",
      },
      {
        re: /einen tag|für einen tag|for a day|for one day/,
        de: "Wie lange: einen Tag.",
        en: "How long: one day.",
        deShort: "wie lange (einen Tag)",
        enShort: "how long (one day)",
      },
      {
        re: /eine nacht|for a night|for one night/,
        de: "Wie lange: eine Nacht.",
        en: "How long: one night.",
        deShort: "wie lange (eine Nacht)",
        enShort: "how long (one night)",
      },
    ],
  },
  {
    deShort: "wo",
    enShort: "where",
    missing: { de: "Wo es gilt.", en: "Where it applies." },
    hits: [
      {
        re: word("überall|ueberall|everywhere|weltweit|worldwide"),
        de: "Wo: überall.",
        en: "Where: everywhere.",
        deShort: "wo (überall)",
        enShort: "where (everywhere)",
      },
      {
        re: /auf der erde|on earth/,
        de: "Wo: auf der Erde.",
        en: "Where: on Earth.",
        deShort: "wo (auf der Erde)",
        enShort: "where (on Earth)",
      },
      {
        re: /nur hier|only here|an einem ort|in one place/,
        de: "Wo: nur an einem Ort.",
        en: "Where: only in one place.",
        deShort: "wo (nur an einem Ort)",
        enShort: "where (only in one place)",
      },
    ],
  },
];

function compose(parsed) {
  const nearby = SCENES.find((item) => item.near.some((pattern) => pattern.test(parsed.norm)));
  const { found, missing } = readBounds(parsed.clause);
  const english = parsed.lang === "en";
  const steps = [
    {
      when: english ? "Wording" : "Wortlaut",
      text: english
        ? `The sentence is: ${parsed.clause}. An explanation is about this question only if it means exactly that.`
        : `Der Satz lautet: ${parsed.clause}. Eine Erklärung trifft nur diese Frage, wenn sie genau das meint.`,
    },
  ];

  if (nearby) {
    steps.push({
      when: english ? "Nearby question" : "Nachbarfrage",
      text: english
        ? `The written one is: ${nearby.written.en}. This one is: ${parsed.clause}.`
        : `Geschrieben ist: ${nearby.written.de}. Gefragt ist hier: ${parsed.clause}.`,
    });
  }

  steps.push({
    when: english ? "Bounds" : "Grenze",
    text: boundsStep(found, missing, parsed.lang),
  });

  return {
    summary: english
      ? "There is no checked explanation for this question here. The notes below do not say what would happen. They show which bound is found in this sentence, and which is not."
      : "Dazu gibt es hier keine geprüfte Erklärung. Die Punkte unten sagen nicht, was passieren würde. Sie zeigen, welche Grenze in diesem Satz zu finden ist und welche nicht.",
    message: english
      ? "This question is unchecked. Nothing here is written for it."
      : "Diese Frage ist ungeprüft. Dazu ist hier nichts geschrieben.",
    suggestion: nearby ? nearby.written[parsed.lang] : undefined,
    neighbor: nearby ? neighborLine(nearby, parsed.lang) : undefined,
    steps,
    known: found.length
      ? found.map((hit) => hit[parsed.lang])
      : [english ? "None of the four bounds." : "Keine der vier Grenzen."],
    open: missing.length
      ? missing.map((bound) => bound.missing[parsed.lang])
      : [
          english
            ? "The four bounds are found. Still open is which direct effect follows from this wording, and which established fact the sentence contradicts if it cannot happen as stated."
            : "Die vier Grenzen sind gefunden. Offen bleibt, welche direkte Folge aus diesem Wortlaut folgt, und welcher bekannten Tatsache der Satz widerspricht, falls er so nicht möglich ist.",
        ],
  };
}

function readBounds(clause) {
  const haystack = clause.toLowerCase();
  const found = [];
  const missing = [];
  for (const bound of BOUNDS) {
    const hit = bound.hits.find((item) => item.re.test(haystack));
    if (hit) found.push(hit);
    else missing.push(bound);
  }
  return { found, missing };
}

function boundsStep(found, missing, lang) {
  const english = lang === "en";
  const foundText = found.length
    ? english
      ? `Found: ${found.map((hit) => hit.enShort).join(", ")}.`
      : `Gefunden: ${found.map((hit) => hit.deShort).join(", ")}.`
    : english
      ? "Found: none of the four bounds."
      : "Gefunden: keine der vier Grenzen.";
  if (missing.length === 0) return foundText;
  const missingText = english
    ? `Not found: ${missing.map((bound) => bound.enShort).join(", ")}.`
    : `Nicht gefunden: ${missing.map((bound) => bound.deShort).join(", ")}.`;
  return `${foundText} ${missingText}`;
}

function neighborLine(scene, lang) {
  if (lang === "en") {
    return `Nearby is the written question “What if ${scene.written.en}?”.`;
  }
  return `In der Nähe liegt die geschriebene Frage „Was wäre, wenn ${scene.written.de}?“.`;
}
