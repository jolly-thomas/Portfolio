import Name from './components/Name'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Recruiters from './components/Recruiters'
import Socials from './components/Socials'

function App() {
  
  return (
    <div className='h-full w-full bg-black block px-5 py-5 '>
      <Nav/>
      <Name/>
      <Projects/>
      <Experience/>
      <Recruiters/>
      <Contact/>
      <Socials/>
    </div>
    
  )
}

export default App
