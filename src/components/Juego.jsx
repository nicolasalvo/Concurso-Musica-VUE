import { useState, useEffect, useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { obtenerCancionesAleatorias } from '../bilbiografia.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import imagenLogo from '../images/imagenLogo.png'

const Juego = () => {
  const [playerName, setPlayerName] = useState('')
  const [cancionesJuego, setCancionesJuego] = useState([])
  const [index, setIndex] = useState(0)
  const [puntos, setPuntos] = useState(0)
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null)
  const [juegoTerminado, setJuegoTerminado] = useState(false)
  const [tiempoRestante, setTiempoRestante] = useState(100)
  const [reproduciendo, setReproduciendo] = useState(false)
  const [fragmentoReproducido, setFragmentoReproducido] = useState(false)

  const audioPlayer = useRef(null)
  const temporizador = useRef(null)
  const intervaloBarra = useRef(null)

  useEffect(() => {
    const storedPlayerName = localStorage.getItem('playerName')
    if (storedPlayerName) {
      setPlayerName(storedPlayerName)
    }
    setCancionesJuego(obtenerCancionesAleatorias(10))
  }, [])

  useEffect(() => {
    return () => {
      if (audioPlayer.current) audioPlayer.current.pause()
      if (temporizador.current) clearTimeout(temporizador.current)
      if (intervaloBarra.current) clearInterval(intervaloBarra.current)
    }
  }, [])

  const cancion = cancionesJuego[index]
  const opciones = cancion ? cancion.opciones : []

  const detenerBarraProgreso = () => {
    if (intervaloBarra.current) {
      clearInterval(intervaloBarra.current)
      intervaloBarra.current = null
    }
    setReproduciendo(false)
    setTiempoRestante(100)
  }

  const iniciarBarraProgreso = () => {
    const duracion = 5000
    const intervalo = 50
    const decremento = (100 / duracion) * intervalo

    intervaloBarra.current = setInterval(() => {
      setTiempoRestante((prev) => {
        if (prev - decremento <= 0) {
          detenerBarraProgreso()
          return 0
        }
        return prev - decremento
      })
    }, intervalo)
  }

  const reproducirFragmentoAleatorio = () => {
    if (fragmentoReproducido) return

    if (temporizador.current) clearTimeout(temporizador.current)
    if (intervaloBarra.current) clearInterval(intervaloBarra.current)

    setReproduciendo(true)
    setFragmentoReproducido(true)
    setTiempoRestante(100)

    audioPlayer.current = new Audio(cancion.url)

    audioPlayer.current.addEventListener('loadedmetadata', () => {
      const duracionTotal = audioPlayer.current.duration

      if (duracionTotal > 5) {
        const maxStartTime = duracionTotal - 5
        const startTime = Math.random() * maxStartTime
        audioPlayer.current.currentTime = startTime

        const iniciarFragmento = audioPlayer.current.play()

        if (iniciarFragmento !== undefined) {
          iniciarFragmento
            .then(() => {
              iniciarBarraProgreso()

              temporizador.current = setTimeout(() => {
                audioPlayer.current.pause()
                detenerBarraProgreso()
              }, 5000)
            })
            .catch((error) => {
              console.error('Error al reproducir:', error)
            })
        }
      }
    })

    audioPlayer.current.load()
  }

  const seleccionarOpcion = (opcion) => {
    if (respuestaSeleccionada) return

    setRespuestaSeleccionada(opcion)

    if (opcion === cancion.titulo) {
      setPuntos((prev) => prev + 10)
    }
  }

  const finalizarJuego = () => {
    setJuegoTerminado(true)
    if (audioPlayer.current) audioPlayer.current.pause()
    if (temporizador.current) clearTimeout(temporizador.current)
    detenerBarraProgreso()

    const puntuacionFinal = {
      nombre: playerName,
      puntos: puntos + (respuestaSeleccionada === cancion?.titulo ? 10 : 0), // include current if last was just answered correctly and moving on... wait, state `puntos` is updated immediately. No need to add.
    }

    const puntuaciones = JSON.parse(localStorage.getItem('puntuaciones') || '[]')
    puntuaciones.push({ nombre: playerName, puntos: puntos })
    puntuaciones.sort((a, b) => b.puntos - a.puntos)
    localStorage.setItem('puntuaciones', JSON.stringify(puntuaciones.slice(0, 10)))
  }

  const siguientePregunta = () => {
    if (index < 9) {
      setIndex((prev) => prev + 1)
      setRespuestaSeleccionada(null)
      setFragmentoReproducido(false)

      if (audioPlayer.current) audioPlayer.current.pause()
      if (temporizador.current) clearTimeout(temporizador.current)
      detenerBarraProgreso()
    } else {
      setJuegoTerminado(true)
      if (audioPlayer.current) audioPlayer.current.pause()
      if (temporizador.current) clearTimeout(temporizador.current)
      detenerBarraProgreso()

      const puntuaciones = JSON.parse(localStorage.getItem('puntuaciones') || '[]')
      puntuaciones.push({ nombre: playerName, puntos: puntos })
      puntuaciones.sort((a, b) => b.puntos - a.puntos)
      localStorage.setItem('puntuaciones', JSON.stringify(puntuaciones.slice(0, 10)))
    }
  }

  if (juegoTerminado) {
    return (
      <main
        id="main"
        tabIndex="-1"
        className="focus:outline-none flex justify-center items-center min-h-[80vh] p-8 bg-[#f0f4f8]"
      >
        <div className="border-2 border-brand-blue rounded-[15px] p-12 max-w-[500px] w-full text-center bg-white shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">¡Juego Terminado!</h1>
          <div className="my-8">
            <FontAwesomeIcon
              icon={faTrophy}
              className="text-5xl text-yellow-400 mb-4"
              aria-hidden="true"
            />
            <h2 className="text-2xl font-bold">{playerName}</h2>
            <p className="text-3xl font-bold text-brand-blue my-4">{puntos} puntos</p>
            <p className="text-xl font-bold text-gray-800 mb-8">
              {puntos >= 70 ? '¡Excelente!' : puntos >= 50 ? '¡Bien hecho!' : '¡Sigue practicando!'}
            </p>
          </div>
          <Link
            to="/ranking"
            className="bg-brand-blue text-white py-3 px-6 rounded-lg decoration-none inline-block mt-4 font-bold hover:bg-brand-blue-hover transition-colors"
          >
            Ver Ranking
          </Link>
        </div>
      </main>
    )
  }

  if (!cancion)
    return (
      <main id="main" tabIndex="-1" className="focus:outline-none">
        <div className="text-center font-bold text-xl mt-12">Cargando...</div>
      </main>
    )

  return (
    <main
      id="main"
      className="flex flex-col items-center justify-center min-h-[60vh] p-8 bg-[#f0f4f8]"
    >
      <div className="w-full max-w-[700px]">
        <div className="flex justify-between items-center w-full">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Adivina la Canción</h1>
            <p className="text-lg font-medium text-gray-600 m-0">{playerName}</p>
          </div>
          <div className="flex items-center justify-center bg-white text-black px-4 py-2 rounded-xl border-2 border-gray-300 font-bold">
            <p className="m-0">
              <FontAwesomeIcon icon={faTrophy} aria-hidden="true" /> {puntos} Puntos
            </p>
          </div>
        </div>
        <div className="border-2 border-brand-blue rounded-[15px] p-8 max-w-[650px] w-full text-center bg-white shadow-lg mt-4">
          <div className="my-5 text-center">
            <div className="w-full h-5 bg-gray-300 rounded-full overflow-hidden mb-2.5 shadow-inner">
              <div
                className={`h-full rounded-full transition-all duration-75 ${reproduciendo ? 'bg-gradient-to-r from-orange-600 to-orange-400' : 'bg-gradient-to-r from-green-700 to-green-500'}`}
                style={{
                  width: `${Math.min(100, Math.max(0, reproduciendo ? tiempoRestante : (0 / 1) * 100))}%`,
                }}
              ></div>
            </div>
          </div>
          <div className="mb-4">
            <span className="text-sm text-brand-blue font-bold">
              {reproduciendo
                ? `${Math.ceil((tiempoRestante / 100) * 5)}s restantes`
                : 'Presiona para escuchar el fragmento'}
            </span>
          </div>
          <img src={imagenLogo} className="w-[60%] mx-auto mb-4" alt="" aria-hidden="true" />
          <br />
          <button
            onClick={reproducirFragmentoAleatorio}
            className="bg-brand-blue hover:bg-brand-blue-hover disabled:bg-gray-500 disabled:cursor-not-allowed text-white border-none py-2.5 px-5 rounded-lg text-base font-bold cursor-pointer mb-4 transition-colors"
            disabled={reproduciendo || fragmentoReproducido}
          >
            {fragmentoReproducido ? 'Reproducido...' : 'Reproducir Fragmento'}
          </button>

          {(reproduciendo || fragmentoReproducido) && cancion.transcripcion && (
            <details className="text-left bg-brand-blue-light/10 p-4 border border-brand-blue rounded mt-2 mb-4">
              <summary
                tabIndex={0}
                className="font-bold cursor-pointer text-brand-blue outline-none focus-visible:ring-4 focus-visible:ring-brand-blue rounded"
              >
                Mostrar transcripción accesible del fragmento (Sordera)
              </summary>
              <p className="mt-2 text-gray-800 font-medium mb-0">{cancion.transcripcion}</p>
            </details>
          )}

          <h2 className="text-2xl font-bold text-gray-900 my-4">¿Qué canción es esta?</h2>
          <div aria-live="polite">
            {respuestaSeleccionada && (
              <div className="my-4 p-3 rounded-lg font-bold bg-white">
                {respuestaSeleccionada === cancion.titulo ? (
                  <p className="text-green-800 bg-green-100 p-2.5 rounded border border-green-200">
                    ¡Correcto! La canción es "{cancion.titulo}" de {cancion.artista}
                  </p>
                ) : (
                  <p className="text-red-800 bg-red-100 p-2.5 rounded border border-red-200">
                    Incorrecto. La canción es "{cancion.titulo}" de {cancion.artista}
                  </p>
                )}
              </div>
            )}
          </div>
          <div className="opciones">
            {opciones.map((opcion, opcionIndex) => {
              let btnClass =
                'block w-full bg-gray-200 text-[#111] border-2 border-brand-blue p-2.5 rounded-lg text-base font-bold my-2.5 transition-colors'

              if (respuestaSeleccionada) {
                if (opcion === cancion.titulo) {
                  btnClass += ' !bg-green-700 !text-white !border-green-700'
                } else if (opcion === respuestaSeleccionada) {
                  btnClass += ' !bg-red-700 !text-white !border-red-700'
                }
                btnClass += ' cursor-not-allowed opacity-70'
              } else {
                btnClass += ' cursor-pointer hover:bg-brand-blue hover:text-white'
              }

              return (
                <button
                  key={opcionIndex}
                  className={btnClass}
                  onClick={() => seleccionarOpcion(opcion)}
                  disabled={respuestaSeleccionada !== null}
                >
                  {opcion}
                </button>
              )
            })}
          </div>

          {respuestaSeleccionada && (
            <div className="mt-4">
              <button
                onClick={siguientePregunta}
                className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white border-none py-2.5 px-5 rounded-lg text-base font-bold cursor-pointer mt-4 transition-colors"
              >
                {index < 9 ? 'Siguiente pregunta' : 'Finalizar juego'}
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default Juego
