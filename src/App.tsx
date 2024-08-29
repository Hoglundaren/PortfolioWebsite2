import Navbar from './components/Navbar'
import About from './components/About'
import SlideArrows from './components/ProjectSlides'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {

  return (

    <div className="text-center">
      < Navbar />
      <section id="about" className="h-screen pt-16 flex items-center justify-center bg-gray-300 dark:bg-bakgrund">
        <h1 className="text-4xl"><About /></h1>
      </section>
      <section id="projects" className="h-screen pt-16 flex items-center justify-center bg-gray-400 dark:bg-bakgrund">
        <div className="w-full overflow-hidden">
          <h1 className="text-4xl p-1 mb-4"><SlideArrows /></h1>
        </div>
      </section>
      <section id="skills" className="h-screen pt-16 flex items-center justify-center bg-gray-300 dark:bg-bakgrund">
        <h1 className="text-4xl"><Skills /></h1>
      </section>
      <section id="contact" className="h-screen pt-16 flex items-center justify-center bg-gray-400 dark:bg-bakgrund">
        <h1 className="text-4xl"><Contact /></h1>
      </section>
    </div >

  )
}

export default App
