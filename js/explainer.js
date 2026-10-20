const SCENES = [
  {
    patterns: [
      /mond.{0,40}(verschwind|weg\b|fort|fehlt|ohne)/,
      /(verschwind|weg\b|ohne|kein).{0,40}mond/,
      /moon.{0,40}(disappear|vanish|gone|without|missing)/,
      /(no|without) moon/,
    ],
    de: {
      summary:
        "Der Mond ist nicht nur Licht in der Nacht. Er zieht an den Meeren und stabilisiert die Neigung der Erdachse. Verschwindet er über Nacht, ist der Himmel sofort anders. Das Klima erst über lange Zeit.",
      steps: [
        {
          when: "Sofort",
          text: "In der ersten Nacht wird es deutlich dunkler. Die Gezeiten werden schwächer und unruhiger, weil vor allem die Sonne noch am Wasser zieht.",
        },
        {
          when: "Danach",
          text: "Ohne den Mond dreht sich die Erde ganz langsam schneller. Der Tag würde über sehr lange Zeit kürzer, nicht schon am nächsten Morgen.",
        },
        {
          when: "Auf Dauer",
          text: "Die Erdachse könnte über Jahrtausende stärker kippen. Jahreszeiten würden extremer, weil der Mond die Achse heute ruhig hält.",
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
        "The Moon is not only a light in the night. It pulls on the oceans and steadies the tilt of Earth's axis. If it vanished overnight, the sky would change at once. The climate would change over a very long time.",
      steps: [
        {
          when: "At once",
          text: "The first night would be much darker. Tides would grow weaker and less regular, because the Sun would be the main pull left on the water.",
        },
        {
          when: "After that",
          text: "Without the Moon, Earth would spin a little faster. Days would shorten over a vast stretch of time, not by tomorrow morning.",
        },
        {
          when: "Over time",
          text: "Earth's axis could wobble more across thousands of years. Seasons could become more extreme, because the Moon is what keeps that tilt steady.",
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
      /(nicht|kein|niemand|ohne|nie).{0,30}schlaf/,
      /schlaf.{0,30}(nicht|kein|überflüssig|unnötig|müsste nicht)/,
      /(no|without|never).{0,20}sleep/,
      /sleep.{0,30}(unnecessary|no longer|not need)/,
    ],
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
    unset: "Was der Satz nicht festlegt",
    needs: "Was eine richtige Erklärung beantworten müsste",
  },
  en: {
    checked: "Written for this question",
    unchecked: "Unchecked",
    unfold: "How it would unfold",
    known: "What we can say",
    open: "What stays open",
    check: "How to check the question",
    unset: "What the sentence does not settle",
    needs: "What a correct explanation would have to answer",
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
      : { unfold: labels.check, known: labels.unset, open: labels.needs },
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

function compose(parsed) {
  if (parsed.lang === "en") {
    return {
      summary: `There is no checked explanation for this question here. The notes below do not say what would happen. They show where an answer easily becomes false.`,
      steps: [
        {
          when: "Wording",
          text: `The sentence is: ${parsed.clause}. An explanation is only about this question if it means exactly that, not a similar one.`,
        },
        {
          when: "Missing bounds",
          text: "What is often missing is who it applies to, from when, and for how long. Without those three, one sentence describes several different situations.",
        },
        {
          when: "Do not claim",
          text: "What people do next, which rules appear, or how one case turns out does not follow from the sentence alone.",
        },
      ],
      known: [
        "Who exactly is meant.",
        "Whether it starts at once or gradually.",
        "Whether it holds everywhere or only in one place.",
      ],
      open: [
        "Which direct effect already follows from the wording, with no new invention.",
        "Which effect appears only because people, machines, or nature respond.",
        "Which established fact the sentence contradicts, if it cannot happen as stated.",
      ],
    };
  }

  return {
    summary:
      "Dazu gibt es hier keine geprüfte Erklärung. Die Punkte unten sagen nicht, was passieren würde. Sie zeigen, wo eine Antwort leicht falsch wird.",
    steps: [
      {
        when: "Wortlaut",
        text: `Der Satz lautet: ${parsed.clause}. Eine Erklärung trifft nur diese Frage, wenn sie genau das meint und nicht eine ähnliche.`,
      },
      {
        when: "Fehlende Grenze",
        text: "Oft fehlt, für wen es gilt, ab wann, und wie lange. Ohne diese drei Angaben beschreibt ein Satz mehrere verschiedene Lagen.",
      },
      {
        when: "Nicht behaupten",
        text: "Was Menschen danach tun, welche Regeln entstehen oder wie ein Einzelfall ausgeht, folgt nicht aus dem Satz allein.",
      },
    ],
    known: [
      "Wer genau gemeint ist.",
      "Ob es sofort gilt oder nach und nach.",
      "Ob es überall gilt oder nur an einem Ort.",
    ],
    open: [
      "Welche direkte Folge schon aus dem Wortlaut kommt, ohne eine neue Erfindung.",
      "Welche Folge erst entsteht, weil Menschen, Technik oder Natur darauf antworten.",
      "Welcher bekannten Tatsache der Satz widerspricht, falls er so nicht möglich ist.",
    ],
  };
}
