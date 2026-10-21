# What-if...

Zuerst auf diese GitHub-Seite speichern. Die Seite ist der Branch `master` in diesem Repository. GitHub Pages liest genau diesen Branch, Ordner `/`. Was nur auf einem anderen Branch liegt, ist nicht auf der Seite.

https://devbadya.github.io/What-if.../

Stell eine Frage hinter **What if**.

Vierzig Fragen haben eine Erklärung, die für genau diesen Fall geschrieben ist. Beim Tippen erkennt die Seite, welche davon gemeint ist, und schlägt sie vor. Unter „Was sich sagen lässt“ steht die Herkunft: Physik, Körper, Technik, Natur oder Überlegung. Oben schaltet ein Menü die ganze Seite zwischen Deutsch und Englisch. Für alle anderen kommt eine Nachricht: die Frage ist ungeprüft. Die Erklärung einer Nachbarfrage wird erst verwendet, wenn der Vorschlag angenommen wird. Die Seite erfindet keine Fakten.

Die Erklärung läuft im Browser. Die Frage wird dabei nicht an einen Dienst geschickt.

```bash
python3 -m http.server 4173
```

Dann `http://localhost:4173` öffnen.

## Öffentliche Seite

Dieselbe Adresse wie oben. Einschalten, falls die Adresse noch nichts zeigt: [Settings → Pages](https://github.com/devbadya/What-if.../settings/pages) → Branch `master` → `/ (root)` → Save.
