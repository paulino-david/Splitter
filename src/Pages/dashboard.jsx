import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'


import { faCalculator } from '@fortawesome/free-solid-svg-icons'

export function Dashboard() {
    return (
        <div className="contenedor">
            <div className="top">
                <div className='buTop'>
                    <button className="calculator">
                        <FontAwesomeIcon className='icono ' icon={faCalculator} />
                    </button>
                    <div className='sunMoon'>
                        <div className='OFF'>

                        <FontAwesomeIcon className='icono moon' icon={faMoon} />
                        </div>
                        <div className='ON'>

                        <FontAwesomeIcon className='icono sun' icon={faSun} />
                        </div>
                    </div>
                </div>

                <div>
                    <input type="search" name="" id="" placeholder='Busque su transaccion' />
                </div>

                <div className='buTop'>
                    <button className="noticion"><FontAwesomeIcon className='icono ' icon={faBell} /></button>
                    {/* <button className="noticion"></button> */}
                    <button className="perfil">
                        <img src='../../img/perfil.jpg' alt="No hay foto" />
                    </button>
                </div>
            </div>
            <div className="dashboard">
                <section className="partes left">

                </section>
                <aside className="partes right">

                </aside>

            </div>
        </div>
    )
}