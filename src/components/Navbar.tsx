import DarkModeToggle from '../misc/DarkModeToggle';

const Navbar = () => {
  return (

    <>

      <nav className="fixed top-0 left-0 w-full z-10 text-center p-2 text-black font-bold shadow-lg dark:shadow-cyan-400 
      dark:text-transparent bg-clip-text bg-main-gradient">
        <div className=" relative">
          <span className="hover:animate-pulse absolute left-10 top-1 text-3xl font-bold text-black 
          dark:text-transparent bg-clip-text bg-main-gradient">
            Andreas<br />
            Höglund</span>
        </div>

        <div className='absolute right-10 top-7'>
          <DarkModeToggle />
        </div>


        <h1 className="text-5xl font-bold ">
          My Portfolio</h1>
        <ul className="flex space-x-6 justify-center text-2xl">
          <li className="hover:text-white hover:animate-pulse"><a href="#about">About</a></li>
          <li className="hover:text-white hover:animate-pulse"><a href="#projects">Projects</a></li>
          <li className="hover:text-white hover:animate-pulse"><a href="#skills">Skills</a></li>
          <li className="hover:text-white hover:animate-pulse"><a href="#contact">Contact</a></li>
        </ul>
      </nav >

    </>
  );
};

export default Navbar;