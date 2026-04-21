import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

import Cookies from "js-cookie"

export function Datos_2() {

    const cookie = JSON.parse(Cookies.get("User_Datas"))

    const [email, setEmail] = useState(cookie["email"])
    const [telephone, setTelephone] = useState(cookie['phone'])
    // const [psw, setPsw] = useState('')
    const navigate = useNavigate()


    return (
        <div className="contenedor">

            <form className="formulario" action="">
                {/* <Link to={} className='boton'><Link> */}
                <div className='steps'>
                    <FontAwesomeIcon className='icon done' icon={faCircleCheck} /><FontAwesomeIcon className='icon onit' icon={faCircleCheck} /><FontAwesomeIcon className='icon' icon={faCircleCheck} />
                </div>

                <div>
                    <h2>New account</h2>
                    <h6>Personal contact</h6>
                </div>
                <div className="inputs">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
                    <input value={telephone} onChange={(e) => setTelephone(e.target.value)} type="number" placeholder='Telephone' />

                </div>

                <button type='button' onClick={() => {
                    const cookie = JSON.parse(Cookies.get("User_Datas"))
                    console.log(cookie)
                    cookie["phone"] = telephone
                    cookie["email"] = email

                    Cookies.set("User_Datas", JSON.stringify(cookie))
                    navigate("/Crear cuenta/Datos de la cuenta")
                }
                }>Next</button>
                <div>
                    <Link to={"/Crear cuenta/Primeros datos"} className='boton icon'><FontAwesomeIcon icon={faCircleChevronLeft} /></Link>
                </div>
            </form>


        </div>
    )
}