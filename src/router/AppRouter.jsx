import Navbar from '../common/Menu'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../common/Footer'
import MainPage from '../pages/MainPage'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/detalle/:id'/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter
