import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { examples, explain } from "../js/explainer.js";

const essayMarks = [
  ["der Mond wird doppelt so groß", /Gezeiten|Erdachse|Jahrtausende/],
  ["der Schlaf dauert doppelt so lang", /Wartung|Gedächtnis/],
  ["das Internet wird schneller", /Schalter|Kartenzahlung/],
  ["keine Schwerkraft", /Trägheit|halbes Leben/],
  ["alle sagen die Wahrheit", /Schweigen|Höflichkeit/],
  ["die Zeit läuft doppelt so schnell", /nächsten Moment|eingefroren/],
];

describe("written questions", () => {
  for (const example of examples) {
    it(`explains “${example}” from the written text`, () => {
      const result = explain(example);
      assert.equal(result.checked, true);
      assert.equal(result.neighbor, undefined);
      assert.equal(result.mark, "Für diese Frage geschrieben");
    });
  }

  it("treats a clear paraphrase of the missing moon as the written question", () => {
    const result = explain("der Mond ist nicht mehr da");
    assert.equal(result.checked, true);
    assert.match(result.summary, /Millionen Jahre/);
  });

  it("treats “niemand schläft mehr” as the written sleep question", () => {
    assert.equal(explain("niemand schläft mehr").checked, true);
  });
});

describe("the moon explanation", () => {
  it("does not shorten the day or the timescale", () => {
    const result = explain("der Mond über Nacht verschwindet");
    const after = result.steps.find((step) => step.when === "Danach");
    const later = result.steps.find((step) => step.when === "Auf Dauer");
    assert.match(after.text, /nicht kürzer/);
    assert.doesNotMatch(after.text, /schneller/);
    assert.match(later.text, /Millionen/);
    assert.doesNotMatch(later.text, /Jahrtausende/);
    assert.doesNotMatch(result.steps[0].text, /unruhiger/);
  });

  it("says the same in English", () => {
    const result = explain("what if the Moon disappeared overnight");
    assert.equal(result.lang, "en");
    assert.equal(result.checked, true);
    const after = result.steps.find((step) => step.when === "After that");
    const later = result.steps.find((step) => step.when === "Over time");
    assert.match(after.text, /not grow shorter/);
    assert.doesNotMatch(after.text, /faster/);
    assert.match(later.text, /millions of years/);
    assert.doesNotMatch(later.text, /thousands/);
  });
});

describe("unchecked questions", () => {
  it("keeps a bound that the sentence already states", () => {
    const result = explain("die Bienen verschwinden über Nacht");
    assert.equal(result.checked, false);
    assert.equal(result.neighbor, undefined);
    assert.ok(result.known.some((item) => item.includes("über Nacht")));
    assert.ok(result.open.every((item) => !/ab wann/i.test(item)));
    assert.ok(result.open.some((item) => item === "Wie lange es gilt."));
    assert.match(result.steps.at(-1).text, /über Nacht/);
    assert.match(result.steps.at(-1).text, /Nicht gefunden/);
  });

  it("differs when two sentences settle different bounds", () => {
    const bare = explain("die Bienen verschwinden");
    const timed = explain("die Bienen verschwinden über Nacht");
    assert.deepEqual(bare.known, ["Keine der vier Grenzen."]);
    assert.equal(bare.open.length, 4);
    assert.notDeepEqual(bare.known, timed.known);
    assert.notDeepEqual(bare.open, timed.open);
  });

  it("stops listing bounds once all four are found", () => {
    const result = explain("alle überall für immer sofort fliegen könnten");
    assert.equal(result.known.length, 4);
    assert.equal(result.open.length, 1);
    assert.match(result.open[0], /vier Grenzen sind gefunden/);
  });

  it("reads the same bounds in English", () => {
    const result = explain("what if the bees vanished overnight");
    assert.equal(result.lang, "en");
    assert.equal(result.checked, false);
    assert.ok(result.known.some((item) => item.includes("overnight")));
    assert.ok(result.open.every((item) => !/from when/i.test(item)));
  });

  it("names a nearby written question without using its explanation", () => {
    for (const [question, leaked] of essayMarks) {
      const result = explain(question);
      assert.equal(result.checked, false, question);
      assert.ok(result.neighbor, question);
      const text = [result.summary, result.neighbor, ...result.steps.map((step) => step.text), ...result.known, ...result.open].join("\n");
      assert.doesNotMatch(text, leaked, question);
    }
  });

  it("points a larger moon at the written moon question", () => {
    const result = explain("der Mond wird doppelt so groß");
    assert.match(result.neighbor, /der Mond über Nacht verschwindet/);
    assert.match(result.steps.map((step) => step.text).join(" "), /Geschrieben ist: der Mond über Nacht verschwindet/);
  });

  it("points an English moon question at the English text", () => {
    const result = explain("what if the Moon grew twice as large");
    assert.equal(result.lang, "en");
    assert.match(result.neighbor, /the Moon disappeared overnight/);
    assert.doesNotMatch(result.summary, /tide/i);
  });

  it("rejects a question that is too short", () => {
    assert.equal(explain("ab"), null);
    assert.equal(explain("was wäre, wenn"), null);
    assert.equal(explain(""), null);
  });
});
