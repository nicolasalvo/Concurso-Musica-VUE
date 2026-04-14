import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Concurso = () => {
  const [nombre, setNombre] = useState('')
  const navigate = useNavigate()

  const guardarNombre = (e) => {
    e.preventDefault()
    if (nombre.trim()) {
      localStorage.setItem('playerName', nombre.trim())
      navigate('/juego')
    }
  }

  return (
    <main id="main" tabIndex="-1" className="focus:outline-none flex justify-center items-center min-h-[80vh] p-8 bg-[#f0f4f8]">
      <div className="border-2 border-brand-blue rounded-[15px] p-8 max-w-[500px] w-full mx-auto text-center bg-white shadow-lg">
        <h1 className="text-brand-blue mb-4 text-2xl font-bold">Adivina la Canción</h1>
        <p className="text-gray-800 leading-relaxed mb-6 font-medium">
          Pon a prueba tu conocimiento musical. <br />
          Te saldrán 10 fragmentos de 5 segundos cada uno y tendrás que adivinar la canción correcta
          entre 4 opciones.
        </p>
        <div className="text-left my-6 mx-auto p-4 bg-brand-blue-light/10 border-l-4 border-l-brand-blue-light rounded text-[#111]">
          <h2 className="mt-0 text-brand-blue text-xl font-bold mb-2">¿Cómo se juega?</h2>
          <ol className="pl-6 mb-0 font-medium">
            <li>Escucha el fragmento de la canción.</li>
            <li>Elige la respuesta correcta entre 4 opciones.</li>
            <li>Tienes 5 segundos para adivinar.</li>
          </ol>
        </div>
        <form onSubmit={guardarNombre} className="text-left mt-6">
          <label htmlFor="nombre-jugador" className="block mb-2 text-brand-blue font-bold">
            Tu Nombre:
          </label>
          <input
            type="text"
            id="nombre-jugador"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Escribe tu nombre para el ranking"
            required
            className="w-full p-3 border-2 border-gray-500 rounded mb-6 text-base text-[#111] focus:outline-none focus:border-brand-blue"
          />
          <div className="flex gap-4">
            <button type="submit" className="bg-brand-blue-light hover:bg-brand-blue-light-hover disabled:bg-gray-500 disabled:cursor-not-allowed text-white border-none py-3 px-6 rounded cursor-pointer text-base font-bold transition-colors" disabled={!nombre.trim()}>Jugar</button>
            <Link to="/ranking" className="bg-brand-blue hover:bg-brand-blue-hover text-white py-3 px-6 rounded font-bold text-center inline-block transition-colors">Ver Ranking</Link>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Concurso
