import { Dashboard } from '../pages/Dashboard'
import { Home } from '../pages/Home'
import { Link, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/dashboard'>Mostrar min/max</Link>
        </li>
      </ul>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
