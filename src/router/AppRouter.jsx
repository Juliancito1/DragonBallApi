import Navbar from '../common/Menu'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../common/Footer'
import MainPage from '../pages/MainPage'
import DetailPage from '../pages/DetailPage'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/detalle/:id' element={<DetailPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter
