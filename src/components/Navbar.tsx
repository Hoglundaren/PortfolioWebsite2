import DarkModeToggle from '../misc/DarkModeToggle';
import { useState } from 'react';
import ViewSwitcher from './ViewSwitcher';


const Navbar = () => {

  const [view, setView] = useState("about");
  const views = ["about", "projects", "skills", "contact"]
  const [isDarkMode, setIsDarkMode] = useState(true)

  function handleDarModeToggle(isDarkModeProp: boolean) {
    setIsDarkMode(isDarkModeProp);
  }

  return (
    <>
      {/* Navbar text och info */}
      <nav className="fixed top-0 left-0 w-full z-10 text-center p-2 text-black font-bold shadow-lg dark:shadow-cyan-400 dark:bg-bakgrund">
        <div className=" relative">
          <div className="hover:animate-pulse absolute left-10 top-1 text-3xl font-bold text-black 
          dark:text-transparent bg-clip-text bg-main-gradient">
            {isDarkMode ? "Andreas Höglund" : "Höglund Andreas"}
          </div>
          <div className='absolute right-10 top-7'>
            <DarkModeToggle isDarkModeProp={handleDarModeToggle} />
          </div>
        </div>

        {/**Knapparna för att byta view */}
        <h1 className="dark:text-transparent bg-clip-text bg-main-gradient text-5xl font-bold ">
          My Portfolio</h1>
        <ul className="flex space-x-6 justify-center text-2xl">
          <li className="hover:text-white hover:animate-pulse dark:text-transparent bg-clip-text bg-main-gradient">
            <button
              onClick={() => setView("about")}
              className={view === 'about' ? ' dark:text-transparent bg-clip-text bg-main-gradient animate-bounce' : ''}>
              About
            </button>
          </li>
          <li className="hover:text-white hover:animate-pulse dark:text-transparent bg-clip-text bg-main-gradient">
            <button
              onClick={() => setView("projects")}
              className={view === 'projects' ? ' dark:text-transparent bg-clip-text bg-main-gradient animate-bounce' : ''}>
              Projects
            </button>
          </li>
          <li className="hover:text-white hover:animate-pulse dark:text-transparent bg-clip-text bg-main-gradient">
            <button
              onClick={() => setView("skills")}
              className={view === 'skills' ? ' dark:text-transparent bg-clip-text bg-main-gradient animate-bounce' : ''}>
              Skills
            </button>
          </li>
          <li className="hover:text-white hover:animate-pulse dark:text-transparent bg-clip-text bg-main-gradient">
            <button
              onClick={() => setView("contact")}
              className={view === 'contact' ? ' dark:text-transparent bg-clip-text bg-main-gradient animate-bounce' : ''}>
              Contact
            </button>
          </li>
        </ul>
      </nav >
      {/**Kod för att byta view. */}
      < ViewSwitcher view={view} />
      {/**<ViewToggle isToggled={isToggled}*/}
    </>
  );
};

export default Navbar;