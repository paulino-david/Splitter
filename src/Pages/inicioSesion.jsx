
import { Link } from 'react-router-dom'
import { Datos_1 } from './CrearCuenta/nombre'
import { useState } from 'react'
import Cookies from 'js-cookie'
export function Inicio() {

    const [user, setUsuer] = useState("")
    const [psw, setPsw] = useState('')

    Cookies.set("User_Datas",JSON.stringify({
        name:'',
        suname:'',
        birth:'',
        phone:'',
        email:'',
        user_name:''
    }))

    return (
        <div className="contenedor">

            <form className="formulario" action="">
                <div>
                    <h2>Login</h2>
                </div>
                <div className="inputs">
                    <input value={user} onChange={(e) => setUsuer(e.target.value)} type="text" placeholder='User' />
                    <input value={psw} onChange={(e) => setPsw(e.target.value)} type="password" placeholder='Password' />
                    <div className="infoPsw">
                        <h6>The password must contain at leats 8 characters including capital letters or small [A-Z]/[a-z], spacial characters [*@/..] and number/s [0-9]</h6>
                    </div>
                    <div className="msg"></div>
                    <div className="crearCuenta">
                        <Link to={'/Crear cuenta/Primeros datos'} >Crear cuenta</Link>
                    </div>
                </div>

                <button type='button' onClick={() => Cookies.set("User",user)}>Done</button>
            </form>


        </div>
    )
}