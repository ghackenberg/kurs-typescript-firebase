
import { createRoot } from 'react-dom/client'
import App from './components/app'

// Container für die React-Anwendung erzeugen
const container = document.createElement('div')

// Container in den Body der Seite einhängen
document.body.appendChild(container)

// Wurzelelement der Applikation erzeugen
const root = createRoot(container)

// Anwendung in Wurzelelement zeichnen
root.render(<App/>)