import { useState } from 'react'

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  })
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  const handleValidation = () => {
    let formErrors = {}
    if (!formData.nombre.trim()) {
      formErrors.nombre = 'El nombre es obligatorio.'
    }
    if (!formData.email.trim()) {
      formErrors.email = 'El correo electrónico es obligatorio.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      formErrors.email = 'El formato del correo electrónico no es válido.'
    }
    if (!formData.mensaje.trim()) {
      formErrors.mensaje = 'El mensaje no puede estar vacío.'
    }
    return formErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validErrors = handleValidation()

    if (Object.keys(validErrors).length === 0) {
      setErrores({})
      setEnviado(true)
      setFormData({ nombre: '', email: '', mensaje: '' })
      setTimeout(() => setEnviado(false), 5000)
    } else {
      setErrores(validErrors)
      setEnviado(false)
    }
  }

  return (
    <main id="main" tabIndex="-1" className="focus:outline-none flex justify-center items-center min-h-[80vh] p-8 bg-[#f0f4f8]">
      <div className="border-2 border-brand-blue rounded-[15px] p-8 max-w-[600px] w-full mx-auto text-center bg-white shadow-lg">
        <h1 className="text-brand-blue mb-4 text-3xl font-bold">Contacto</h1>
        <p className="text-gray-800 leading-relaxed mb-6 font-medium">
          Completa el formulario para enviarnos un mensaje.
        </p>

        <div aria-live="polite" className="min-h-[40px] mb-4 text-left">
          {Object.keys(errores).length > 0 && (
            <p className="text-red-800 font-bold bg-red-100 p-2.5 rounded border border-red-200">
              Existen errores en el formulario. Por favor, corrígelos antes de enviar.
            </p>
          )}
          {enviado && (
            <p className="text-green-800 font-bold bg-green-100 p-2.5 rounded border border-green-200">
              ¡Formulario enviado con éxito!
            </p>
          )}
        </div>

        <form className="text-left" onSubmit={handleSubmit} noValidate>
          <div className="mb-6">
            <label htmlFor="nombre" className="block font-bold mb-2 text-[#111]">
              Nombre completo
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              aria-invalid={errores.nombre ? 'true' : 'false'}
              aria-describedby={errores.nombre ? 'error-nombre' : undefined}
              className={`w-full p-3 border-2 rounded text-base font-sans text-[#111] focus:outline-none ${errores.nombre ? 'border-red-600 bg-red-50' : 'border-gray-600 focus:border-brand-blue'}`}
            />
            {errores.nombre && (
              <span id="error-nombre" className="block text-red-600 text-sm mt-2 font-bold">
                {errores.nombre}
              </span>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block font-bold mb-2 text-[#111]">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              aria-invalid={errores.email ? 'true' : 'false'}
              aria-describedby={errores.email ? 'error-email' : undefined}
              className={`w-full p-3 border-2 rounded text-base font-sans text-[#111] focus:outline-none ${errores.email ? 'border-red-600 bg-red-50' : 'border-gray-600 focus:border-brand-blue'}`}
            />
            {errores.email && (
              <span id="error-email" className="block text-red-600 text-sm mt-2 font-bold">
                {errores.email}
              </span>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="mensaje" className="block font-bold mb-2 text-[#111]">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="5"
              value={formData.mensaje}
              onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              aria-invalid={errores.mensaje ? 'true' : 'false'}
              aria-describedby={errores.mensaje ? 'error-mensaje' : undefined}
              className={`w-full p-3 border-2 rounded text-base font-sans text-[#111] focus:outline-none ${errores.mensaje ? 'border-red-600 bg-red-50' : 'border-gray-600 focus:border-brand-blue'}`}
            ></textarea>
            {errores.mensaje && (
              <span id="error-mensaje" className="block text-red-600 text-sm mt-2 font-bold">
                {errores.mensaje}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-brand-blue-light hover:bg-brand-blue-light-hover text-white border-none py-3 px-6 rounded cursor-pointer text-base font-bold transition-colors"
          >
            Enviar formulario
          </button>
        </form>
      </div>
    </main>
  )
}

export default Contacto
