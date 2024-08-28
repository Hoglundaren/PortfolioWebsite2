import ImageComponent from '../misc/ImageComponent';

function About() {


  return (
    <>
      <div className='-mt-52'>

        <div>
          <ImageComponent />
        </div>
        <p className='py-2 font-serif font-black  dark:text-transparent bg-clip-text 
        bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...
        linear-gradient(90deg, #945dd6 0%, #6978d1 50%, #13adc7);'>System developer <br /> based in Karlstad, Sweden.</p>
        <p className='hover:shadow-2xl rounded-lg text-xl font-mono relative top-4 text-black 
        dark:text-transparent bg-clip-text 
        bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...
        linear-gradient(90deg, #945dd6 0%, #6978d1 50%, #13adc7);' >
          Welcome to my portfolio, <br />
          navigate with the arrows or <br />
          through the navbar to learn more about me!</p>
      </div >


      <div></div>
    </>
  );
}

export default About;