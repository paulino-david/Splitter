import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

import Cookies from 'js-cookie'

export function Account() {
    const cookie = JSON.parse(Cookies.get("User_Datas"))
    const [user, setUsuer] = useState(cookie["user_name"])
    const [psw, setPsw] = useState('')
    const [verifyPSW, setVerifyPSW] = useState('')
    // const [psw, setPsw] = useState('')
    const navigate = useNavigate()



    return (
        <div className="contenedor">

            <form className="formulario" action="">
                {/* <Link to={} className='boton'><Link> */}
                <div className='steps'>
                    <FontAwesomeIcon className='icon done' icon={faCircleCheck} /><FontAwesomeIcon className='icon done' icon={faCircleCheck} /><FontAwesomeIcon className='icon onit' icon={faCircleCheck} />
                </div>

                <div>
                    <h2>New account</h2>
                    <h6>Account data</h6>
                </div>
                <div className="inputs">
                    <input value={user} onChange={(e) => setUsuer(e.target.value)} type="text" placeholder='User name' />
                    <input value={psw} onChange={(e) => setPsw(e.target.value)} type="password" placeholder='Create a password' />
                    <input value={verifyPSW} onChange={(e) => setVerifyPSW(e.target.value)} type="password" placeholder='Repeat the password' />
                    <div className="infoPsw">
                        <h6>The password must contain at leats 8 characters including capital letters or small [A-Z]/[a-z], spacial characters [*@/..] and number/s [0-9]</h6>
                    </div>

                </div>

                <button type='button' onClick={() => {
                    const cookie = JSON.parse(Cookies.get("User_Datas"))
                    console.log(cookie)
                    cookie["user_name"] = user

                    Cookies.set("User_Datas", JSON.stringify(cookie))
                    alert("Done")
                    navigate("/")
                }}>Create account</button>
                <div>
                    <Link to={"/Crear cuenta/Segundos datos"} className='boton icon'><FontAwesomeIcon icon={faCircleChevronLeft} /></Link>
                </div>
            </form>


        </div>
    )
}