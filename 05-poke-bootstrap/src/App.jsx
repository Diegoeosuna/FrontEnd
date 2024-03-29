import './App.css'
import Navbar from './components/NavBar'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/RoutesIndex'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App
