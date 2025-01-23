# 📖 Kurs TypeScript/Firebase

*Kommt bald*

1. Dateistruktur
1. Abhängigkeiten
1. Entwicklerskripte
1. Sonstiges

...

## 📑 1. Dateistruktur

Die Dateistruktur umfasst mehrere Kategorien von Dateien:

1. **Konfigurationsdateien** - Konfiguration der Entwicklerwerkzeuge
1. **Öffentliche Dateien** - Statische Dateien der Web-Anwendung
1. **Quelldateien (TypeScript)** - Originale Skripte der Web-Anwendung
1. **Bündeldateien (JavaScript)** - Gebündelte Skripte der Web-Anwendung

Im Folgenden werden die einzelnen Kategorien genauer beschrieben.

### 1.1. Konfigurationsdateien

Die Projektkonfiguration umfasst die folgenden drei Dateien:

* 📄 [package.json](./package.json) - Konfiguration der Entwicklerskripte und Abhängigkeiten
* 📄 [tsconfig.json](./tsconfig.json) - Konfiguration der Kompilierung mit TypeScript
* 📄 [webpack.config.js](./webpack.config.js) - Konfiguration der Bündelung mit Webpack

### 1.2. Öffentliche Dateien

Öffentliche Dateien werden **direkt (ohne Bündelung mit Webpack)** vom Web-Server bereitgestellt:

* 📂 [public](./public/) - Weitere öffentliche Dateien der Webanwendung
    * 📄 [index.html](./public/index.html) - HTML-Dokument
    * 📄 [style.css](./public/style.css) - CSS-Dokument

### 1.3. Quelldateien (TypeScript)

Quelldateien werden **indirekt (nach Bündelung mit Webpack)** vom Web-Server bereitgestellt:

* 📂 [src](./src/) - TypeScript Quellen der Webanwendung
    * 📂 [schemas](./src/schemas/) - Dokumenteninhalte in Firestore
        * 📄 [todo.ts](./src/schemas/todo.ts) - Todo-Dokumenteninhalt
    * 📂 [documents](./src/documents/) - Dokumente in Firestore
        * 📄 [todo.ts](./src/documents/todo.ts) - Todo-Dokument
    * 📂 [collections](./src/collections/) - Sammlungen in Firestore
        * 📄 [todo.ts](./src/collections/todo.ts) - Todo-Sammlung
    * 📂 [components](./src/components/) - Eigene React-Komponenten
        * 📄 [app.tsx](./src/components/app.tsx) - Anwendungskomponente
        * 📄 [todo.tsx](./src/components/todo.tsx) - Todo-Komponente
    * 📄 [firebase.ts](./src/firebase.ts) - Firebase-Konfiguration
    * 📄 [main.tsx](./src/main.tsx) - Einstieg in die Webanwendung

### 1.4. Bündeldateien (JavaScript) [*nicht im Repository enthalten*]

Bündeldateien sind die Ergebnisse der Bündelung und werden **direkt** vom Web-Server bereitgestellt:

*  *📂 dist* - Ergebnisse der Bündelung mit Webpack
    * *📄 main.js* - Kompiliertes und gebündeltes JavaScript

## 📑 2. Abhängigkeiten

Die Abhängigkeiten können in zwei Kategorien eingeteilt werden:

1. **Ausführung** - Zur Ausführung der Anwendung benötigte Pakete
1. **Entwicklung** - Zur Entwicklung der Anwendung benötigte Pakete

Im folgenden werden die beiden Kategorien genauer beschrieben.

### 2.1. Ausführung

Die Abhängigkeiten für die Ausführung umfassen die folgenden Pakete:

* `react` - Komponenten-basiertes Framework für GUIs
* `react-dom` - Adaption des Frameworks für Web-Browser
* `firebase` - Bibliothek für den Zugriff auf Firebase-Dienste

### 2.2. Entwicklung

Die Abhängigkeiten für die Entwicklung umfassen die folgenden Pakete:

* `typescript` - Der TypeScript-Compiler von Microsoft
* `@types/react` - Typisierungsinformationen für `react`
* `@types/react-dom` - Typisierungsinformationen für `react-dom`
* `webpack` - Werkzeug für die Bündelung von Quelldateien
* `webpack-cli` - Ausführung der Bündelung über die Kommandozeile
* `webpack-dev-server` - Web-Server mit automatischer Aktualisierung
* `ts-loader` - Bündelung von TypeScript (statt reinem JavaScript)

## 📑 3. Entwicklerskripte

Installation der Abhängigkeiten für die Entwicklung und für die Laufzeit:

```
npm install
```

Starten eines lokalen Web-Servers für die Entwicklung um automatischer Aktualisierung:

```
npm start
```

Bündelung der Web-Anwendung für die Produktionsumgebung:

```
npm run build
```

## 📑 4. Sonstiges

* [Änderungsprotokoll](./CHANGELOG.md)
* [Beitragen](./CONTRIBUTING.md)
* [Lizenz](./LICENSE.md)