const SCENES = [
  {
    patterns: [
      /mond.{0,40}(verschwind|weg\b|fort|fehlt|ohne)/,
      /(verschwind|weg\b|ohne|kein).{0,40}mond/,
      /moon.{0,40}(disappear|vanish|gone|without|missing)/,
      /(no|without) moon/,
      /mond.{0,40}nicht mehr da/,
      /nicht mehr da.{0,30}mond/,
      /moon.{0,40}(no longer there|is not there|isn.t there)/,
    ],
    near: [/\bmond\b/, /\bmoon\b/],
    written: {
      de: "der Mond über Nacht verschwindet",
      en: "the Moon disappeared overnight",
    },
    de: {
      summary:
        "Der Mond ist nicht nur Licht in der Nacht. Er zieht an den Meeren und stabilisiert die Neigung der Erdachse. Verschwindet er über Nacht, ist der Himmel sofort anders. Das Klima erst über Millionen Jahre.",
      steps: [
        {
          when: "Sofort",
          text: "In der ersten Nacht wird es deutlich dunkler. Die Gezeiten werden schwächer, weil vor allem die Sonne noch am Wasser zieht.",
        },
        {
          when: "Danach",
          text: "Die Gezeiten des Mondes bremsen die Erddrehung heute ab, der Tag wird dadurch langsam länger. Ohne Mond fällt diese Bremse weg. Der Tag wird dadurch nicht kürzer. Er behält ungefähr die heutige Länge.",
        },
        {
          when: "Auf Dauer",
          text: "Über Millionen Jahre könnte die Erdachse stärker schwanken. Jahreszeiten würden extremer oder zeitweise fast verschwinden, weil der Mond die Neigung heute in einem engen Bereich hält.",
        },
      ],
      known: [
        "Den größeren Teil der Gezeiten erzeugt der Mond, den kleineren die Sonne.",
        "Mondlicht ist reflektiertes Sonnenlicht. Es ist weg, sobald der Mond weg ist.",
      ],
      open: [
        "Wie stark Bahn und Atmosphäre der Erde auf die fehlende Masse reagieren, braucht ein Modell mit Zahlen.",
        "Ob die dunklere Nacht vor allem ein Kulturbruch oder ein praktisches Problem wird, ist keine Physikfrage.",
      ],
    },
    en: {
      summary:
        "The Moon is not only a light in the night. It pulls on the oceans and steadies the tilt of Earth's axis. If it vanished overnight, the sky would change at once. The climate would change over millions of years.",
      steps: [
        {
          when: "At once",
          text: "The first night would be much darker. Tides would grow weaker, because the Sun would be the main pull left on the water.",
        },
        {
          when: "After that",
          text: "The Moon's tides slowly brake Earth's spin, so the day is gradually getting longer. Without the Moon that brake is gone. The day would not grow shorter. It would stay about as long as it is now.",
        },
        {
          when: "Over time",
          text: "Across millions of years Earth's axis could wobble more. Seasons could become more extreme, or almost disappear for a while, because the Moon is what keeps that tilt inside a narrow range.",
        },
      ],
      known: [
        "The Moon raises most of the tides. The Sun raises a smaller share.",
        "Moonlight is reflected sunlight. It is gone the moment the Moon is gone.",
      ],
      open: [
        "How much Earth's orbit and air would respond to the missing mass needs a numbered model.",
        "Whether the darker night becomes a cultural shock or a practical problem is not a question for physics.",
      ],
    },
  },
  {
    patterns: [
      /(nicht|kein|niemand|ohne|nie).{0,30}schl[aä]f/,
      /schl[aä]f.{0,30}(nicht|kein|überflüssig|unnötig|müsste nicht)/,
      /(no|without|never).{0,20}sleep/,
      /sleep.{0,30}(unnecessary|no longer|not need)/,
    ],
    near: [/schl[aä]f/, /\bsleep\b/],
    written: {
      de: "niemand mehr schlafen müsste",
      en: "nobody had to sleep",
    },
    de: {
      summary:
        "Schlaf ist keine Pause vom Leben, sondern Wartung. Müsste niemand mehr schlafen, fehlte nicht nur Müdigkeit. Es fehlte ein Zustand, in dem Erinnerung sortiert und der Körper repariert wird.",
      steps: [
        {
          when: "Sofort",
          text: "Der erste Gewinn wäre Zeit. Das Drittel des Tages, das heute im Bett liegt, stünde für Wege, Arbeit, Pflege oder einfach fürs Wachsein.",
        },
        {
          when: "Danach",
          text: "Aufmerksamkeit bräuchte einen anderen Rhythmus. Wer nie abschaltet, braucht trotzdem Pausen, sonst werden Fehler und Unfälle zum Ersatz für Müdigkeit.",
        },
        {
          when: "Auf Dauer",
          text: "Städte und Schichten sind um die Nacht gebaut. Licht, Lärm und Öffnungszeiten würden sich verschieben, weil die Nacht kein geschützter Rest mehr wäre.",
        },
      ],
      known: [
        "Schlaf stützt Gedächtnis, Immunsystem und Stimmung.",
        "Menschen schlafen sehr unterschiedlich lang. Die neue Zeit träfe Nachtarbeit und Eltern anders als Menschen mit viel freiem Tag.",
      ],
      open: [
        "Ob das Gehirn die Arbeit des Schlafs in den wachen Tag verlagern könnte, sagt die Frage nicht.",
        "Ob die gewonnene Zeit frei würde oder nur mit mehr Arbeit gefüllt wird, hängt an Lohn und Normen.",
      ],
    },
    en: {
      summary:
        "Sleep is not a pause from life. It is maintenance. If nobody had to sleep, the loss would be more than tiredness. It would be the state in which memory is sorted and the body is repaired.",
      steps: [
        {
          when: "At once",
          text: "The first gain would be time. The third of the day now spent in bed would be open for travel, work, care, or simply being awake.",
        },
        {
          when: "After that",
          text: "Attention would need another rhythm. Someone who never switches off still needs pauses, or mistakes and accidents become the stand-in for tiredness.",
        },
        {
          when: "Over time",
          text: "Cities and shifts are built around the night. Light, noise, and opening hours would move, because night would no longer be a protected remainder.",
        },
      ],
      known: [
        "Sleep supports memory, the immune system, and mood.",
        "People sleep very different amounts. The new time would hit night workers and parents differently from people with an open day.",
      ],
      open: [
        "The question does not say whether the brain could move sleep's work into the waking day.",
        "Whether the gained time stays free or fills with more work depends on pay and norms.",
      ],
    },
  },
  {
    patterns: [
      /internet.{0,30}(aus|weg|fällt|fallt|fort|wegbricht|steht)/,
      /(kein|ohne|fällt das|fallt das).{0,15}internet/,
      /internet.{0,30}(down|gone|fails|outage|stops|disappear)/,
      /(no|without) internet/,
    ],
    near: [/\binternet\b/],
    written: {
      de: "das Internet morgen ausfällt",
      en: "the internet failed tomorrow",
    },
    de: {
      summary:
        "Das Internet ist kein einzelner Schalter. Es ist die Schicht unter Bezahlung, Fahrplänen, Karten und vielen Akten. Fällt es aus, bleiben Strom, Sprache und Straßen. Es fehlt der kurze Weg zu dem, was nicht im Raum ist.",
      steps: [
        {
          when: "Sofort",
          text: "Kartenzahlung, Tickets, Logins und Navigation scheitern zuerst. Weiter kommt, wer Bargeld, eine verabredete Zeit oder einen Weg aus dem Kopf hat.",
        },
        {
          when: "Danach",
          text: "Nachrichten werden lokal. Radio, Gespräche und Aushänge ersetzen den Feed. Gerüchte sind schneller als eine bestätigte Lage.",
        },
        {
          when: "Auf Dauer",
          text: "Nach einigen Tagen zeigen sich die langsamen Abhängigkeiten: Lieferketten, Rezepte, Lohn, Dokumente in der Cloud. Manches liegt noch auf Papier, vieles nicht.",
        },
      ],
      known: [
        "Ein Netzausfall löscht nicht das Wissen in den Köpfen und nicht jede lokale Kopie.",
        "Strom und Internet sind verwandt, aber nicht dasselbe. Viele Geräte laufen weiter und erreichen trotzdem niemanden.",
      ],
      open: [
        "Ein Tag ist eine Störung, ein Monat ein anderer Alltag. Die Dauer ändert die Antwort.",
        "Welche Dienste einen eigenen Notweg haben, hängt von Ort und Branche ab.",
      ],
    },
    en: {
      summary:
        "The internet is not one switch. It is the layer under payment, timetables, maps, and a lot of records. If it fails, power, speech, and streets remain. What disappears is the short path to anything that is not in the room.",
      steps: [
        {
          when: "At once",
          text: "Card payments, tickets, logins, and navigation fail first. People get further if they have cash, a meeting time, or a route they remember.",
        },
        {
          when: "After that",
          text: "News becomes local. Radio, conversation, and paper notices replace the feed. Rumors move faster than a confirmed picture.",
        },
        {
          when: "Over time",
          text: "After a few days the slow dependencies show: supply chains, prescriptions, pay, documents in the cloud. Some of that still exists on paper. Much of it does not.",
        },
      ],
      known: [
        "A network outage does not erase what people know, or every local copy.",
        "Power and the internet are related, but they are not the same thing. Many devices keep running and still cannot reach anyone.",
      ],
      open: [
        "One day is a disruption. One month is a different daily life. Duration changes the answer.",
        "Which services have a fallback depends on the place and the trade.",
      ],
    },
  },
  {
    patterns: [
      /(schwerkraft|gravitation).{0,30}(halb|hälfte|schwächer|weniger|kleiner)/,
      /(halb|hälfte).{0,30}(schwerkraft|gravitation)/,
      /gravity.{0,30}(half|weaker|less|lower)/,
      /half.{0,20}gravity/,
    ],
    near: [/schwerkraft/, /gravitation/, /\bgravity\b/],
    written: {
      de: "die Schwerkraft nur halb so stark wäre",
      en: "gravity were only half as strong",
    },
    de: {
      summary:
        "Halbe Schwerkraft heißt nicht halbes Leben. Das Gewicht wird leichter, Masse und Trägheit bleiben. Wer springt, kommt höher. Wer bremst, muss denselben Schwung noch loswerden.",
      steps: [
        {
          when: "Sofort",
          text: "Der Körper fühlt sich leichter an. Treppen und Tragen werden einfacher. Kreislauf, Gelenke und Atmung sind aber auf das heutige Gewicht geeicht.",
        },
        {
          when: "Danach",
          text: "Bälle, Regen und Fahrzeuge tragen weiter. Sport, Verkehr und Geländer wären für die neue Höhe zu niedrig gedacht.",
        },
        {
          when: "Auf Dauer",
          text: "Muskeln und Knochen verlieren den Reiz, der sie heute stark hält. Die Luft könnte sich weiter nach oben verteilen, weil sie weniger stark festgehalten wird.",
        },
      ],
      known: [
        "Gewicht ist Masse mal Schwere. Halbe Schwere halbiert das Gewicht, nicht die Masse.",
        "Auf dem Mond sieht man schon, wie sich Menschen in geringerer Schwere bewegen: höher, unkontrollierter.",
      ],
      open: [
        "Ob die Atmosphäre in Bodennähe auf Dauer dünner würde, hängt an mehr als an dem Faktor zwei.",
        "Wie schnell sich Körper anpassen, ist für kurze Aufenthalte im All bekannt, nicht für ein ganzes Leben.",
      ],
    },
    en: {
      summary:
        "Half gravity does not mean half a life. Weight gets lighter. Mass and inertia stay. A jump goes higher. Stopping still has to shed the same momentum.",
      steps: [
        {
          when: "At once",
          text: "The body would feel lighter. Stairs and carrying would be easier. Circulation, joints, and breathing are tuned to the weight we have now.",
        },
        {
          when: "After that",
          text: "Balls, rain, and vehicles would carry farther. Sport, traffic, and railings would be too low for the new height.",
        },
        {
          when: "Over time",
          text: "Muscle and bone would lose the load that keeps them strong. The air could spread higher, because less weight would be holding it down.",
        },
      ],
      known: [
        "Weight is mass times gravity. Half gravity halves weight, not mass.",
        "The Moon already shows how people move in weaker gravity: higher, and with less control.",
      ],
      open: [
        "Whether air near the ground would thin over time depends on more than a factor of two.",
        "We know how bodies adapt on short trips in space, not across a whole life.",
      ],
    },
  },
  {
    patterns: [
      /(nicht|kein|niemand|nie).{0,25}(lüg|lueg)/,
      /(lüg|lueg).{0,25}(unmöglich|nicht mehr)/,
      /(nobody|no one|cannot|can't|could not).{0,20}lie/,
      /without (a )?lie/,
    ],
    near: [/lüg/, /lueg/, /\blie\b/, /\blies\b/, /lying/, /\bwahrheit/, /\btruth\b/],
    written: {
      de: "niemand mehr lügen könnte",
      en: "nobody could lie",
    },
    de: {
      summary:
        "Wenn niemand mehr lügen könnte, verschwände nicht die Unklarheit. Es verschwände die bewusst falsche Aussage. Schweigen, Ausweichen und das Weglassen der Hälfte blieben möglich.",
      steps: [
        {
          when: "Sofort",
          text: "Verhöre, Werbung und manche Verhandlungen würden brüchig. Ein klares Ja oder Nein hätte mehr Gewicht, weil es als Trick nicht mehr taugt.",
        },
        {
          when: "Danach",
          text: "Höflichkeit müsste neu gebaut werden. Viele freundliche Sätze sind nicht ganz wahr. Menschen würden genauer, kürzer oder stiller.",
        },
        {
          when: "Auf Dauer",
          text: "Macht wandert zu denen, die Fragen stellen dürfen. Wer antworten muss, ist im Nachteil, wenn ein anderer die Frage formt.",
        },
      ],
      known: [
        "Lügen ist nicht der einzige Weg, etwas falsch darzustellen. Irrtum und Halbwahrheit bleiben.",
        "Vertrauen entsteht nicht allein dadurch, dass Täuschung schwerer wird.",
      ],
      open: [
        "Ob Übertreibung, Schauspiel und Geheimnisse auch als Lüge zählen, steht nicht in der Frage.",
        "Eine Welt ohne Lüge kann härter sein als eine mit kleinen Schonungen. Das ist eine moralische Folge.",
      ],
    },
    en: {
      summary:
        "If nobody could lie, uncertainty would not disappear. The deliberate false statement would. Silence, dodging, and leaving out half of the story would remain possible.",
      steps: [
        {
          when: "At once",
          text: "Interrogations, advertising, and some negotiations would crack. A clear yes or no would weigh more, because it would no longer work as a trick.",
        },
        {
          when: "After that",
          text: "Politeness would have to be rebuilt. Many kind sentences are not entirely true. People would become more precise, shorter, or quieter.",
        },
        {
          when: "Over time",
          text: "Power would move toward the people allowed to ask questions. Whoever must answer is at a disadvantage when someone else shapes the question.",
        },
      ],
      known: [
        "Lying is not the only way to mislead. Error and half-truth remain.",
        "Trust does not appear just because deception gets harder.",
      ],
      open: [
        "The question does not say whether exaggeration, acting, and secrets count as lies.",
        "A world without lies can be harsher than one with small mercies. That is a moral consequence.",
      ],
    },
  },
  {
    patterns: [
      /zeit.{0,30}(still|stopp|steh|bleib|anhält|anhalt|einfrier)/,
      /(stillstand|stopp).{0,20}zeit/,
      /time.{0,30}(stop|freeze|stands still|stood still|stand still)/,
    ],
    near: [/\bdie zeit\b/, /\btime\b/],
    written: {
      de: "die Zeit stehen bleibt",
      en: "time stood still",
    },
    de: {
      summary:
        "Wenn die Zeit für alles stehen bleibt, gibt es auch keinen nächsten Moment, in dem das jemand merkt. Eine anschauliche Antwort entsteht erst, wenn etwas weiterläuft: eine Person, das Licht oder eine Uhr.",
      steps: [
        {
          when: "Sofort",
          text: "Licht, Schall und Gedanken sind selbst Abläufe in der Zeit. Steht wirklich alles, kann niemand den Stillstand erleben.",
        },
        {
          when: "Danach",
          text: "Meint die Frage nur die Welt um dich herum, gehst du durch ein festes Bild. Die Luft müsstest du mitbewegen, sonst lässt sich nicht atmen.",
        },
        {
          when: "Auf Dauer",
          text: "Eine eingefrorene Welt altert nicht und heilt nicht. Läuft die Zeit wieder, ist offen, ob für sie nur ein Augenblick vergangen ist.",
        },
      ],
      known: [
        "Zeit ist kein Schalter. Bewegung, Licht und Uhren hängen zusammen.",
        "„Alles steht still“ und „alles außer mir steht still“ sind zwei verschiedene Fragen.",
      ],
      open: [
        "Welche Uhren noch ticken, sagt so eine Frage meist nicht.",
        "Ob ein vollständiger Stillstand widerspruchsfrei sein kann, ist offen. Sichtbar ist nur, wo der Widerspruch sitzt.",
      ],
    },
    en: {
      summary:
        "If time stopped for everything, there would be no next moment in which anyone could notice. A picture you can reason about appears only if something keeps going: a person, light, or a clock.",
      steps: [
        {
          when: "At once",
          text: "Light, sound, and thought are themselves processes in time. If truly everything stops, nobody can experience the stop.",
        },
        {
          when: "After that",
          text: "If the question means only the world around you, you would walk through a fixed picture. You would have to push the air aside in order to breathe.",
        },
        {
          when: "Over time",
          text: "A frozen world does not age or heal. If time starts again, it is open whether only an instant passed for everyone else.",
        },
      ],
      known: [
        "Time is not a switch. Motion, light, and clocks belong together.",
        "“Everything stops” and “everything but me stops” are two different questions.",
      ],
      open: [
        "Questions like this rarely say which clocks are still ticking.",
        "Whether a total stop can even be consistent is open. What is clear is where the contradiction sits.",
      ],
    },
  },
];

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
    neighbor: nearby ? neighborLine(nearby, parsed.lang) : undefined,
    steps,
    known: found.length
      ? found.map((hit) => hit[parsed.lang])
      : [
          english
            ? "None of the four bounds: who, from when, how long, where."
            : "Keine der vier Grenzen: für wen, ab wann, wie lange, wo.",
        ],
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
