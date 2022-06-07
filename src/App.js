import './App.css'
import Main from './components/Main'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Team from './components/Team'
import Details from './components/Details'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<About />} />
        <Route path="/addTask" element={<Main />} />
        <Route path="/team/*" element={<Team />} />
        <Route path="/details/:pokemon" element={<Details />} />
      </Routes>
    </div>
  )
}

export default App
