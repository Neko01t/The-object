import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import ReactLenis from 'lenis/react'

const rootElement = document.getElementById('root');

createRoot(rootElement!).render(
  <StrictMode>
    <ReactLenis root>
      <div className="selection:bg-primary selection:text-secondary">
        <App />
      </div>
    </ReactLenis>
  </StrictMode>,
)
