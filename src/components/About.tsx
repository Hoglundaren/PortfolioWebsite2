import ImageComponent from '../misc/ImageComponent';

function About() {


  return (
    <div className='-mt-52'>

      <div>
        <ImageComponent />
      </div>
      <p className='relative top-3 font-serif font-black dark:text-transparent bg-clip-text 
        bg-main-gradient'>System developer <br /> based in Karlstad, Sweden.</p>
      <p className='hover:shadow-2xl rounded-lg text-xl font-mono relative top-6 text-black 
        dark:text-transparent bg-clip-text bg-main-gradient' >
        Welcome to my portfolio, <br />
        navigate with the arrows or <br />
        through the navbar to learn more about me!</p>
    </div >

  );
}

export default About;