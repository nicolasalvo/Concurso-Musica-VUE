import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Ranking = () => {
  const [puntuaciones, setPuntuaciones] = useState([])

  useEffect(() => {
    const puntuacionesGuardadas = localStorage.getItem('puntuaciones')
    if (puntuacionesGuardadas) {
      setPuntuaciones(JSON.parse(puntuacionesGuardadas))
    }
  }, [])

  return (
    <main id="main" tabIndex="-1" className="focus:outline-none flex flex-col items-center justify-center border-2 border-brand-blue rounded-[15px] p-5 my-5 mx-auto max-w-[900px] bg-white text-brand-blue shadow-md">
      <div>
        <h1 className="text-2xl font-bold text-center">Ranking de Clasificación</h1>
        <p className="text-center font-medium mt-2">Las mejores puntuaciones hasta ahora</p>
      </div>
      <div className="w-full">
        <h2 className="bg-brand-blue text-white p-2.5 rounded-lg my-4 w-full max-w-[700px] text-center mx-auto text-xl font-bold">Mejores 10 Jugadores</h2>
      </div>
      <div className="w-full max-w-[800px] my-5">
        {puntuaciones.length === 0 ? (
          <p className="text-center p-10 text-gray-500 font-medium">Aún no hay puntuaciones. ¡Sé el primero en jugar!</p>
        ) : (
          <div className="w-full">
            <div className="grid grid-cols-[80px_1fr_100px] gap-[15px] p-[15px] bg-brand-blue text-white font-bold rounded-t-lg">
              <div className="text-center font-bold text-lg">Posición</div>
              <div className="font-medium">Nombre</div>
              <div className="text-center font-bold text-lg">Puntos</div>
            </div>
            {puntuaciones.map((jugador, index) => {
              let claseFila = "grid grid-cols-[80px_1fr_100px] gap-[15px] p-[15px] border-b border-gray-300 items-center even:bg-gray-100 last:border-b-0 last:rounded-b-lg"
              if (index === 0) claseFila += " bg-orange-100 border-l-4 border-l-yellow-600 text-yellow-900 font-bold"
              else if (index === 1) claseFila += " bg-gray-100 border-l-4 border-l-gray-600 font-bold"
              else if (index === 2) claseFila += " bg-orange-50 border-l-4 border-l-yellow-800 font-bold"
              
              return (
                <div key={index} className={claseFila}>
                  <div className="text-center font-bold text-lg">{index + 1}</div>
                  <div className="font-medium">{jugador.nombre}</div>
                  <div className="text-center font-bold text-brand-blue">{jugador.puntos}</div>
                </div>
              )
            })}
          </div>
        )}
      </div>
      <div className="flex gap-5 mt-5">
        <Link to="/" className="bg-white text-brand-blue border-2 border-brand-blue py-2.5 px-5 rounded-lg font-bold hover:bg-brand-blue hover:text-white transition-colors">Volver al Inicio</Link>
        <Link to="/jugar" className="bg-white text-brand-blue border-2 border-brand-blue py-2.5 px-5 rounded-lg font-bold hover:bg-brand-blue hover:text-white transition-colors">Jugar Ahora</Link>
      </div>
    </main>
  )
}

export default Ranking
