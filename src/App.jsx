import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'

import Inicio from './components/Inicio'
import Ranking from './components/Ranking'
import Concurso from './components/Concurso'
import Juego from './components/Juego'
import Contacto from './components/Contacto'
import Auditoria from './components/Auditoria'

function App() {
  return (
    <Router>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[1000] focus:p-2 focus:bg-[#0a063a] focus:text-white font-bold">Saltar al contenido principal</a>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/jugar" element={<Concurso />} />
        <Route path="/juego" element={<Juego />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/auditoria" element={<Auditoria />} />
      </Routes>
      <FooterComponent />
    </Router>
  )
}

export default App
