import './components/todo/todo.css'
import HeaderComponent from './components/header/header'
import FooterComponent from './components/footer/footer'
import './components/footer/footer.css'
import { Outlet } from 'react-router-dom'
const App = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />

    </>
  )
}

export default App
