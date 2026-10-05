import './App.css'


import Navbar from './components/Nav'
import Hero from './components/Hero'
import Pops from './components/Pops'
import Bok from './components/Bok'
import Wchus from './components/Wchus'
import Footer from './components/Footer'
import Experts from './components/Experts'



function App() {
  return (
    <div className="w-full min-h-full bg-gray-50">
      <Navbar />
      <Hero />
      <Pops />
      <Bok />
      <Wchus />
      <Experts />
      <Footer />
      
      
    </div>
  )
}

export default App

