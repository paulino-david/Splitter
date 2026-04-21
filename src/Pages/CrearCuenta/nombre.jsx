import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

import Cookies from "js-cookie"

export function Datos_1() {

    const cookie=JSON.parse(Cookies.get("User_Datas"))
    console.log(cookie)

    const [nombre, setNombre] = useState(cookie["name"])
    const [apellido, setApellido] = useState(cookie["surname"])
    const [birth, setBirth] = useState(cookie["birth"])

    const navigate= useNavigate()

    return (
        <div className="contenedor">

            <form className="formulario" action="">
                {/* <Link to={} className='boton'><Link> */}
                <div className='steps'>
                    <FontAwesomeIcon className='icon onit' icon={faCircleCheck} /><FontAwesomeIcon className='icon' icon={faCircleCheck} /><FontAwesomeIcon className='icon' icon={faCircleCheck} />
                </div>

                <div>
                    <h2>New account</h2>
                    <h6>Personal identification</h6>
                </div>
                <div className="inputs">
                    <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" placeholder='Name' />
                    <input value={apellido} onChange={(e) => setApellido(e.target.value)} type="text" placeholder='Surname' />
                    <div>
                        <label htmlFor="">Date of birth</label>
                    </div>
                    <input value={birth} onChange={(e) => setBirth(e.target.value)} type="date" placeholder='Date of birth' />

                </div>

                <button type='button' onClick={() => {
                    const cookie=JSON.parse(Cookies.get("User_Datas"))
                    cookie["name"]=nombre
                    cookie["surname"]=apellido
                    cookie['birth']=birth

                    Cookies.set("User_Datas",JSON.stringify(cookie))
                    
                    navigate("/Crear cuenta/Segundos datos")
                }}>Next</button>
            <div>
                <Link to={"/"} className='boton icon'><FontAwesomeIcon icon={faCircleChevronLeft} /></Link>
            </div>
            </form>


        </div>
    )
}