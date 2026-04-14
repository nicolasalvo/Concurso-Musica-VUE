import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import imagenPrimeraSeccion from '../images/imagenPrimeraSeccion.png'
import auriculares from '../images/auriculares.png'
import imagenSegundaSeccion from '../images/imagenSegundaSeccion.png'
import imagenTerceraSeccion from '../images/imagenTerceraSeccion.png'
import imagenDesafio from '../images/imagenDesafio.png'

const Inicio = () => {
  return (
    <main id="main" tabIndex="-1" className="focus:outline-none">
      <div className="flex flex-col justify-center items-center bg-gradient-to-r from-[#7497f8] to-[#999bfc] h-[50vh] text-center px-8">
        <img src={imagenPrimeraSeccion} alt="Ilustración abstracta de música" className="w-[250px] mb-4" />
        <h1 className="text-3xl font-bold">¿Cuánto sabes de música?</h1>
        <p className="my-4 max-w-[700px] text-[#111] font-medium text-lg">
          Pon a prueba tu conocimiento musical. Te saldran 10 fragmentos de 5 segundos cada una y
          tendrás que adivinar la canción correcta entre 4 opciones. Compite por las mejores
          puntuaciones!
        </p>
        <div className="flex gap-4">
          <Link to="/jugar" className="bg-brand-blue-light hover:bg-brand-blue-light-hover text-white py-3 px-6 rounded text-lg font-bold transition-colors">¡Jugar Ahora!</Link>
          <Link to="/ranking" className="bg-white text-brand-blue border-2 border-brand-blue hover:bg-gray-200 py-3 px-6 rounded text-lg font-bold transition-colors">Ver Ranking</Link>
        </div>
      </div>
      <div className="mt-8">
        <div className="text-center mt-8">
          <h2 className="text-3xl font-bold text-brand-blue">¿Cómo funciona?</h2>
          <p className="font-semibold text-lg mt-2 text-gray-700">Esto consta de 3 sencillos pasos:</p>
        </div>
        <div className="flex justify-center items-center gap-4 flex-wrap mt-4">
          <div className="flex flex-col items-center text-center p-4 m-4 border border-gray-300 rounded-xl w-[400px] h-[300px] shadow-xl hover:scale-105 transition-transform duration-300">
            <img src={auriculares} alt="" className="w-[120px] mb-4 bg-[#051a7437] rounded-full" aria-hidden="true" />
            <h3 className="text-xl font-bold">Escucha</h3>
            <p className="mt-2 text-gray-700 font-medium">Escucharás un fragmento de 5 segundos de una canción popular.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 m-4 border border-gray-300 rounded-xl w-[400px] h-[300px] shadow-xl hover:scale-105 transition-transform duration-300">
            <img src={imagenSegundaSeccion} alt="" className="w-[120px] mb-4 bg-[#e4454537] rounded-full" aria-hidden="true" />
            <h3 className="text-xl font-bold">Adivina</h3>
            <p className="mt-2 text-gray-700 font-medium">Elige la respuesta correcta entre 4 opciones posibles.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 m-4 border border-gray-300 rounded-xl w-[400px] h-[300px] shadow-xl hover:scale-105 transition-transform duration-300">
            <img src={imagenTerceraSeccion} alt="" className="w-[120px] mb-4 bg-[#f7f33c37] rounded-full" aria-hidden="true" />
            <h3 className="text-xl font-bold">Compite</h3>
            <p className="mt-2 text-gray-700 font-medium">Adivina el máximo de canciones posibles para aparecer en el <b>ranking</b>.</p>
          </div>
        </div>
        <div className="my-[50px] flex flex-col justify-center items-center h-[35vh]">
          <h2 className="text-3xl font-bold text-brand-blue">¿Listo para el desafio?</h2>
          <div className="flex flex-col items-center text-center p-6 m-4 border border-brand-blue rounded-xl sm:w-auto md:w-[900px] shadow-2xl bg-[#0400e40d]">
            <img src={imagenDesafio} alt="" className="w-[70px] m-2.5" aria-hidden="true" />
            <h3 className="text-xl font-bold">¡Acepta el reto y demuestra tus conocimientos musicales!</h3>
            <p className="font-medium text-lg text-gray-800 my-4">Demuestra todo lo que sabes sobre las canciones del momento!</p>
            <Link to="/jugar" className="bg-brand-blue-light hover:bg-brand-blue-light-hover text-white py-3 px-6 rounded text-lg font-bold transition-colors">Jugar <FontAwesomeIcon icon={faPlay} aria-hidden="true" /></Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Inicio
