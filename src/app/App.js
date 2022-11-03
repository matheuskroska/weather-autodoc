import { Dashboard } from '../pages/Dashboard/Dashboard'
import { Home } from '../pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import { Header } from '../features/header/Header'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      <footer></footer>
    </>
  )
}

export default App
