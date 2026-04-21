import { Routes, Route } from 'react-router-dom'

import { Inicio } from './Pages/inicioSesion'
import { Datos_1 } from './Pages/CrearCuenta/nombre'
import { Datos_2 } from './Pages/CrearCuenta/contact'
import { Account } from './Pages/CrearCuenta/cuenta'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path='/Crear cuenta/Primeros datos' element={<Datos_1 />} />
      <Route path='/Crear cuenta/Segundos datos' element={<Datos_2 />} />
      <Route path='/Crear cuenta/Datos de la cuenta' element={<Account/>}/>

    </Routes>

  )
}

export default App
