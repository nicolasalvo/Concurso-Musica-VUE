import { Link } from 'react-router-dom'
import logoImg from '../images/imagenLogo.png'

const HeaderComponent = () => {
  return (
    <header className="flex justify-between items-center bg-white py-2.5 px-5 border-b-2 border-brand-blue">
      <div className="flex items-center">
        <img src={logoImg} alt="Imagen del logo" className="relative w-[70px] mr-[15px]" />
        <h2 className="text-brand-blue m-0 text-2xl font-bold">Adivina la Canción</h2>
      </div>
      <nav>
        <ul className="list-none flex m-0 p-0">
          <li><Link to="/" className="text-[18px] border border-brand-blue py-2 px-3 rounded-lg no-underline ml-5 text-brand-blue hover:bg-brand-blue hover:text-white transition-colors font-semibold">Inicio</Link></li>
          <li><Link to="/jugar" className="text-[18px] border border-brand-blue py-2 px-3 rounded-lg no-underline ml-5 text-brand-blue hover:bg-brand-blue hover:text-white transition-colors font-semibold">Jugar</Link></li>
          <li><Link to="/ranking" className="text-[18px] border border-brand-blue py-2 px-3 rounded-lg no-underline ml-5 text-brand-blue hover:bg-brand-blue hover:text-white transition-colors font-semibold">Ranking</Link></li>
          <li><Link to="/contacto" className="text-[18px] border border-brand-blue py-2 px-3 rounded-lg no-underline ml-5 text-brand-blue hover:bg-brand-blue hover:text-white transition-colors font-semibold">Contacto</Link></li>
          <li><Link to="/auditoria" className="text-[18px] border border-brand-blue py-2 px-3 rounded-lg no-underline ml-5 text-brand-blue hover:bg-brand-blue hover:text-white transition-colors font-semibold">Auditoría</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderComponent
