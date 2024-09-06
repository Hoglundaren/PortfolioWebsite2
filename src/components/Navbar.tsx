import DarkModeToggle from '../misc/DarkModeToggle';
import { useState } from 'react';
import ViewSwitcher from './ViewSwitcher';
import ViewToggle from './ViewToggle';

const Navbar = () => {

  const [view, setView] = useState("about");



  return (
    <>
      {/* Navbar text och info */}
      <nav className="fixed top-0 left-0 w-full z-10 text-center p-2 text-black font-bold shadow-lg dark:shadow-cyan-400 dark:bg-bakgrund">
        <div className=" relative">
          <span className="hover:animate-pulse absolute left-10 top-1 text-3xl font-bold text-black 
          dark:text-transparent bg-clip-text bg-main-gradient">
            Andreas<br />
            Höglund</span>
        </div>
        <div className='absolute right-10 top-7'>
          <DarkModeToggle />
        </div>
        {/**Knapparna för att byta view */}
        <h1 className="dark:text-transparent bg-clip-text bg-main-gradient text-5xl font-bold ">
          My Portfolio</h1>
        <ul className="flex space-x-6 justify-center text-2xl">
          <li id='about' className="hover:text-white hover:animate-pulse dark:text-transparent bg-clip-text bg-main-gradient"><button onClick={() => setView("about")}>About</button></li>
          <li id='' className="hover:text-white hover:animate-pulse dark:text-transparent bg-clip-text bg-main-gradient"><button onClick={() => setView("projects")}>Projects</button></li>
          <li className="hover:text-white hover:animate-pulse dark:text-transparent bg-clip-text bg-main-gradient"><button onClick={() => setView("skills")}>Skills</button></li>
          <li className="hover:text-white hover:animate-pulse dark:text-transparent bg-clip-text bg-main-gradient"><button onClick={() => setView("contact")}>Contact</button></li>
        </ul>
      </nav >
      {/**Kod för att byta view. */}
      < ViewSwitcher view={view} />
      {/**<ViewToggle isToggled={isToggled}*/}
    </>
  );
};

export default Navbar;