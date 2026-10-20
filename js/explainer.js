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

const DOMAINS = [
  {
    id: "space",
    test: /mond|moon|sonne|sun|stern|star|planet|erde\b|earth|galax|orbit|weltall|space|mars|schwarzes loch|black hole|komet|comet|universum|universe/,
    de: {
      later:
        "Bahnen, Gezeiten und Licht hängen an Masse und Entfernung. Was am Himmel anders wird, ändert oft zuerst die Nacht und erst viel später den Kalender.",
      lasting:
        "Über lange Zeit zählt, ob die Erdachse, die Bahn und das Licht noch in dem Bereich bleiben, für den Leben und Jahreszeiten gebaut sind.",
      known: [
        "Licht braucht Zeit. Was weit entfernt passiert, sehen wir später.",
        "Gezeiten, Jahreszeiten und Umlaufbahnen folgen aus Masse und Bewegung.",
      ],
      open: "Wie stark die Bahn der Erde nachgibt, lässt sich ohne Massen und Abstände nicht seriös beziffern.",
    },
    en: {
      later:
        "Orbits, tides, and light depend on mass and distance. A change in the sky often alters the night first, and the calendar only much later.",
      lasting:
        "Over a long time, what matters is whether Earth's tilt, orbit, and light stay inside the range that life and seasons are built for.",
      known: [
        "Light takes time. What happens far away is seen later.",
        "Tides, seasons, and orbits follow from mass and motion.",
      ],
      open: "How much Earth's path would give way cannot be numbered honestly without masses and distances.",
    },
  },
  {
    id: "physics",
    test: /schwerkraft|gravitation|gravity|zeit|time|licht|light|geschwindigkeit|speed of light|energie|energy|atom|quant|vakuum|vacuum|temperatur|hitze|kälte|\bcold\b|\bheat\b|reibung|friction/,
    de: {
      later:
        "Geräte, Gebäude und Uhren sind auf die heutigen Werte geeicht. Stimmt Kraft, Licht oder Dauer nicht mehr, fallen zuerst die Stellen auf, an denen der Alltag eine bestimmte Zahl erwartet.",
      lasting:
        "Auf Dauer prüft man die Lage an Erhaltung und Gleichgewicht. Was leichter, schneller oder heißer wirkt, hat oft eine Rechnung, die an einer anderen Stelle teurer wird.",
      known: [
        "Masse und Gewicht sind nicht dasselbe. Dieser Unterschied fängt viele falsche ersten Folgen ab.",
        "Alltagsgeräte sind auf heutige Werte gebaut: Uhren, Bremsen, Thermometer, tragende Wände.",
      ],
      open: "Ob die Änderung nur hier gilt oder überall, steht oft nicht in der Frage. Daran hängt die Antwort.",
    },
    en: {
      later:
        "Tools, buildings, and clocks are calibrated to today's values. If force, light, or duration no longer match, the first failures appear where daily life expects a specific number.",
      lasting:
        "Over time, the situation is tested against conservation and balance. What feels lighter, faster, or hotter often costs more somewhere else in the account.",
      known: [
        "Mass and weight are not the same. That distinction catches a lot of wrong first consequences.",
        "Ordinary tools are built for today's values: clocks, brakes, thermometers, load-bearing walls.",
      ],
      open: "The question often fails to say whether the change holds only here or everywhere. The answer depends on that.",
    },
  },
  {
    id: "body",
    test: /schlaf|sleep|körper|body|altern|aging|sterben|death|unsichtbar|invisible|flieg|fly\b|atmen|breath|essen|food|hunger|krankheit|krank|auge|eye|gedächtnis|memory|haut|skin/,
    de: {
      later:
        "Der Körper rechnet weiter mit Energie, Temperatur und Erholung. Eine neue Fähigkeit streicht diese Rechnung nicht. Sie verschiebt nur, wo die Kosten auftauchen.",
      lasting:
        "Arbeit, Sport und Medizin sind um die heutigen Grenzen gebaut. Wird eine Grenze verschoben, werden alte Schutzregeln lückenhaft, noch bevor ein neues Gesetz das merkt.",
      known: [
        "Der Körper braucht Energie, einen temperierten Rahmen und Pausen. Das bleibt die enge Grenze.",
        "Menschen sind sehr verschieden. Was theoretisch alle können, wird ungleich genutzt.",
      ],
      open: "Welche Nebenwirkung der Körper mitträgt, sagt eine reine Was-wäre-wenn-Frage nicht.",
    },
    en: {
      later:
        "The body still has to balance energy, temperature, and recovery. A new ability does not erase that account. It moves where the cost shows up.",
      lasting:
        "Work, sport, and medicine are built around today's limits. Move a limit, and old safety rules develop gaps before any new law notices.",
      known: [
        "The body needs energy, a livable temperature, and pauses. That remains the tight constraint.",
        "People differ a lot. An ability that everyone theoretically has is still used unequally.",
      ],
      open: "A pure what-if does not say which side effect the body would carry.",
    },
  },
  {
    id: "tech",
    test: /internet|strom|electric|handy|smartphone|phone|computer|robot|software|daten|data|akku|battery|satellit|satellite|gps|netz\b/,
    de: {
      later:
        "Netze wirken unsichtbar, bis Zahlung, Karte, Nachricht oder Akte sie brauchen. Der Ausweichweg ist dann Bargeld, Papier, Radio oder ein Gespräch im Raum.",
      lasting:
        "Nach einer Störung kehrt Technik selten in genau denselben Zustand zurück. Manche Umwege bleiben, weil sie sich als weniger verletzlich gezeigt haben.",
      known: [
        "Digitale Dienste brauchen Strom, Leitungen und Menschen, die sie betreiben.",
        "Wissen liegt auch außerhalb des Netzes: in Köpfen, auf Papier, in Geräten ohne Verbindung.",
      ],
      open: "Welche Dienste einen Notbetrieb haben, ist von Ort zu Ort verschieden.",
    },
    en: {
      later:
        "Networks feel invisible until payment, maps, messages, or records need them. The backup is then cash, paper, radio, or a conversation in the room.",
      lasting:
        "After a disruption, technology rarely returns to exactly the same state. Some detours remain, because they proved less fragile.",
      known: [
        "Digital services need power, lines, and people to run them.",
        "Knowledge also lives outside the network: in memory, on paper, on devices with no connection.",
      ],
      open: "Which services have a fallback differs from place to place.",
    },
  },
  {
    id: "society",
    test: /geld|money|krieg|war\b|arbeit|work\b|schule|school|gesetz|law\b|regierung|government|sprache|language|grenze|border|steuer|tax|wahl|election|polizei|police/,
    de: {
      later:
        "Verträge, Höflichkeit und Strafe rechnen mit der heutigen Lage. Ändert sich, was Menschen können oder verbergen, wackeln diese Regeln noch am selben Tag.",
      lasting:
        "Macht wandert dorthin, wo die neue Lage einen Vorteil lässt. Das kann Wissen sein, Kraft, Geld oder das Recht, die Frage zu stellen.",
      known: [
        "Regeln entstehen, weil Menschen sich nicht alles sehen und nicht vollständig vertrauen.",
        "Eine Lage, die alle betrifft, trifft nicht alle mit derselben Härte.",
      ],
      open: "Ob die Lage gerechter wird, entscheiden Macht und Gesetze, nicht die Frage allein.",
    },
    en: {
      later:
        "Contracts, politeness, and punishment assume today's situation. If what people can do or hide changes, those rules wobble on the same day.",
      lasting:
        "Power moves toward whatever the new situation advantages. That can be knowledge, force, money, or the right to ask the question.",
      known: [
        "Rules exist because people cannot see everything and do not fully trust one another.",
        "A situation that touches everyone still does not hit everyone with the same force.",
      ],
      open: "Whether the situation becomes fairer is settled by power and law, not by the question alone.",
    },
  },
  {
    id: "nature",
    test: /meer|ozean|ocean|tier|animal|hund|dog|katze|cat\b|wald|forest|wetter|weather|eis\b|ice\b|dinosaur|regen|rain|wasser|water|biene|bee|pflanze|plant|vogel|bird|fisch|fish/,
    de: {
      later:
        "Tiere, Pflanzen und Wasser folgen Nahrung, Temperatur und Wegen. Dort zeigt sich eine neue Lage zuerst, nicht in der Schlagzeile.",
      lasting:
        "Städte, Äcker und Ufer sind für die heutige Landschaft gebaut. Nach einem Jahr steht noch, was nicht allein auf dem alten Gleichgewicht lag.",
      known: [
        "Leben hängt an Wasser, Temperatur und Energie. Das bleibt die enge Grenze.",
        "Ein Gleichgewicht kippt ungleichmäßig. Manche Arten weichen aus, andere haben keinen Weg.",
      ],
      open: "Wie schnell sich ein neues Gleichgewicht bildet, hängt an der konkreten Landschaft.",
    },
    en: {
      later:
        "Animals, plants, and water follow food, temperature, and paths. A new situation shows up there first, not in the headline.",
      lasting:
        "Cities, fields, and shores are built for today's landscape. After a year, what remains is whatever did not depend only on the old balance.",
      known: [
        "Life depends on water, temperature, and energy. That stays the tight limit.",
        "A balance tips unevenly. Some species can move. Others have no path.",
      ],
      open: "How fast a new balance forms depends on the particular landscape.",
    },
  },
];

const CHANGES = {
  de: {
    absence: {
      summary: (title) =>
        `${title} Dann fehlt etwas, das heute still mitläuft. Zuerst wird sichtbar, was ohne es nicht mehr geht.`,
      now: (clause) =>
        `Sobald ${clause}, fällt zuerst auf, was unmittelbar daran hängt. Der größere Zusammenhang wird erst danach klar.`,
      open: "Wie schnell ein Ersatz entsteht, hängt davon ab, ob das Fehlende nur bequem war oder ob etwas Notwendiges daran hing.",
    },
    scale: {
      summary: (title) =>
        `${title} Dann stimmt die Stärke nicht mehr, die Gewohnheit und Geräte erwarten. Die Art der Dinge bleibt erst einmal dieselbe.`,
      now: (clause) =>
        `Sobald ${clause}, fühlen sich vertraute Handlungen falsch an. Kraft, Höhe, Dauer oder Menge passen nicht mehr zu dem, was gebaut wurde.`,
      open: "Halb oder doppelt klingt nach einer einfachen Rechnung. Ob Körper, Klima und Technik linear mitziehen, ist oft der unsichere Teil.",
    },
    sudden: {
      summary: (title) =>
        `${title} Dann fehlt die Zeit, in der man sich sonst vorbereitet. Der erste Tag zeigt Abhängigkeiten, die im Normalfall unsichtbar sind.`,
      now: (clause) =>
        `Wenn es schnell soweit ist und ${clause}, bleibt wenig Spielraum für Ersatz. Menschen nehmen, was schon im Raum ist.`,
      open: "Ob die Lage einen Tag oder ein Jahr dauert, sind zwei verschiedene Welten.",
    },
    ability: {
      summary: (title) =>
        `${title} Dann käme eine Möglichkeit dazu, mit der der heutige Alltag nicht rechnet. Zuerst wird sie ausprobiert. Danach wird sie gewöhnlich.`,
      now: (clause) =>
        `Sobald ${clause}, ändert sich zuerst das Verhalten derer, die es unmittelbar können. Am Anfang ist diese Möglichkeit ungleich verteilt.`,
      open: "Ob die neue Möglichkeit eine Grenze braucht, zeigt sich an Unfällen und an denen, die sie nicht nutzen wollen.",
    },
    universal: {
      summary: (title) =>
        `${title} Dann hält kaum noch jemand die alte Lage für die anderen bereit. Unterschiedlich ist, wie nah jemand an den Folgen sitzt.`,
      now: (clause) =>
        `Wenn das allgemein gilt und ${clause}, gibt es keinen Außenstehenden, der das Alte noch anbietet. Der Unterschied liegt in der Härte, nicht in der Tatsache.`,
      open: "„Alle“ ist selten wörtlich. Kinder, Tiere, Technik oder Menschen an einem anderen Ort können außen vor bleiben.",
    },
    general: {
      summary: (title) =>
        `${title} Daraus folgt eine enge Wirkung sofort, und eine weite Wirkung erst durch das, was Menschen danach tun.`,
      now: (clause) =>
        `Nimmt man ernst, dass ${clause}, ist die erste Folge die, die auch ohne neues Gesetz und ohne neue Erfindung eintritt.`,
      open: "Die Frage sagt oft nicht, für wen die Lage gilt und wie lange sie bleibt.",
    },
  },
  en: {
    absence: {
      summary: (title) =>
        `${title} Then a background effect would be missing. The first thing to become visible is what no longer works without it.`,
      now: (clause) =>
        `As soon as ${clause}, the first thing people notice is what depends on it directly. The larger connection becomes clear only after that.`,
      open: "How fast a replacement appears depends on whether the missing thing was only convenient, or whether something necessary depended on it.",
    },
    scale: {
      summary: (title) =>
        `${title} Then the strength that habit and tools expect would be wrong. The kind of thing would stay the same at first.`,
      now: (clause) =>
        `As soon as ${clause}, familiar actions would feel wrong. Force, height, duration, or amount would no longer match what was built.`,
      open: "Half or double sounds like simple arithmetic. Whether bodies, climate, and machines follow in a straight line is often the uncertain part.",
    },
    sudden: {
      summary: (title) =>
        `${title} Then the time people normally use to prepare would be missing. The first day shows dependencies that are invisible in ordinary life.`,
      now: (clause) =>
        `If it happens quickly and ${clause}, there is little room for a substitute. People use what is already in the room.`,
      open: "Whether it lasts a day or a year makes two different worlds.",
    },
    ability: {
      summary: (title) =>
        `${title} Then there would be a possibility that streets, rules, and bodies were not built for. First people try it. Then it becomes ordinary.`,
      now: (clause) =>
        `As soon as ${clause}, the people with least to lose try it first. At the beginning the possibility is unevenly spread.`,
      open: "Whether the new possibility needs a limit shows up in accidents, and in the people who do not want to use it.",
    },
    universal: {
      summary: (title) =>
        `${title} Then almost nobody would still be keeping the old situation available for others. What differs is how close someone sits to the consequences.`,
      now: (clause) =>
        `If it holds generally and ${clause}, there is no outsider still offering the old way. The difference is in the severity, not in the fact.`,
      open: "“Everyone” is rarely literal. Children, animals, machines, or people somewhere else can sit outside it.",
    },
    general: {
      summary: (title) =>
        `${title} A narrow effect follows at once. A wide effect follows only through what people do next.`,
      now: (clause) =>
        `If we take seriously that ${clause}, the first consequence is the one that happens with no new law and no new invention.`,
      open: "The question often does not say who the situation applies to, or how long it lasts.",
    },
  },
};

const LABELS = {
  de: {
    unfold: "So läuft es ab",
    known: "Was sich sagen lässt",
    open: "Was offen bleibt",
  },
  en: {
    unfold: "How it would unfold",
    known: "What we can say",
    open: "What stays open",
  },
};

const GENERAL = {
  de: {
    later:
      "Danach handeln Menschen, Märkte und Behörden auf diese erste Folge. An dieser Antwort hängt, ob die Lage ein kurzes Staunen bleibt oder ein neuer Rahmen wird.",
    lasting:
      "Auf Dauer setzt sich durch, was auch ohne Aufregung noch funktioniert. Das ist selten die spektakulärste Version vom ersten Tag.",
    known: [
      "Die direkte Folge tritt auch ohne neues Gesetz und ohne neue Erfindung ein.",
      "Spätere Folgen hängen daran, wie Menschen auf diese direkte Folge antworten.",
    ],
    open: "Mehrere ruhige Antworten können gleichzeitig ernst gemeint sein.",
  },
  en: {
    later:
      "After that, people, markets, and institutions answer the first effect. That response decides whether the situation stays a brief shock or becomes a new frame.",
    lasting:
      "Over time, what remains is whatever still works when the excitement is gone. That is rarely the most spectacular version from day one.",
    known: [
      "The direct effect happens with no new law and no new invention.",
      "Later effects depend on how people answer that direct effect.",
    ],
    open: "Several calm answers can be serious at the same time.",
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
  const body = scene ? scene[parsed.lang] : compose(parsed);

  return {
    lang: parsed.lang,
    title: parsed.title,
    labels: LABELS[parsed.lang],
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

function detectChange(norm) {
  if (/(verschwind|weg\b|ohne|ausf[aä]ll|ausfall|nicht mehr|gibt es kein|austrock|trocken|versieg|no longer|disappear|vanish|gone|without|fails|went away|dr(y|ies|ied))/.test(norm)) {
    return "absence";
  }
  if (/(halb|hälfte|doppelt|größer|kleiner|half|double|twice|bigger|smaller)/.test(norm)) {
    return "scale";
  }
  if (/(plötzlich|über nacht|morgen|suddenly|overnight|tomorrow)/.test(norm)) {
    return "sudden";
  }
  if (/(könnte|könnten|können|fähig|could|able to)/.test(norm)) {
    return "ability";
  }
  if (/(alle |allem |niemand|jeder|everyone|nobody|no one|all people)/.test(norm)) {
    return "universal";
  }
  return "general";
}

const NATURE_ABILITY = {
  de: {
    later:
      "Zuerst ändert sich der Umgang. Eine neue Fähigkeit bei Tieren wirft die Frage auf, wer sie versteht, fürchtet oder für sich nutzt.",
    lasting:
      "Auf Dauer müssten Haltung, Städte und Gesetze neu bestimmen, was ein Tier tun darf, wenn es plötzlich handeln oder sprechen kann.",
    known: [
      "Tiere folgen Nahrung, Angst und Bindung. Eine neue Fähigkeit legt sich darüber, sie ersetzt diesen Antrieb nicht.",
      "Menschen deuten Tierverhalten schon heute oft falsch. Mit einer neuen Fähigkeit wird diese Deutung folgenreicher.",
    ],
    open: "Ob die Fähigkeit bei jedem Tier gleich stark wäre, sagt die Frage nicht.",
  },
  en: {
    later:
      "The first change is how the two sides deal with each other. A new animal ability raises the question of who understands it, fears it, or uses it.",
    lasting:
      "Over time, keeping animals, cities, and laws would have to say what an animal may do once it can act or speak.",
    known: [
      "Animals still follow food, fear, and attachment. A new ability sits on top of those drives. It does not replace them.",
      "People already misread animal behavior. With a new ability, that reading would matter more.",
    ],
    open: "The question does not say whether every animal would have the ability to the same degree.",
  },
};

function compose(parsed) {
  const change = detectChange(parsed.norm);
  const domain = DOMAINS.find((item) => item.test.test(parsed.norm));
  const pack = CHANGES[parsed.lang][change];
  const topic =
    domain?.id === "nature" && change === "ability"
      ? NATURE_ABILITY[parsed.lang]
      : domain
        ? domain[parsed.lang]
        : GENERAL[parsed.lang];

  return {
    summary: pack.summary(parsed.title),
    steps: [
      { when: parsed.lang === "en" ? "At once" : "Sofort", text: pack.now(parsed.clause) },
      { when: parsed.lang === "en" ? "After that" : "Danach", text: topic.later },
      { when: parsed.lang === "en" ? "Over time" : "Auf Dauer", text: topic.lasting },
    ],
    known: topic.known,
    open: [topic.open, pack.open],
  };
}
