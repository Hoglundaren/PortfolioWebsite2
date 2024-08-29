import RollingElements from './RollingElements';

const Skills = () => {
  return (
    <div className="container mx-7 p-2 h-auto overflow-auto">
      <h2 className="text-5xl font-bold mb-5 
      dark:text-transparent bg-clip-text 
        bg-main-gradient">Skillset</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        <div className="border border-black shadow-sm dark:shadow-cyan-400 p-4">
          <h3 className="text-xl font-semibold mb-2 
          dark:text-transparent bg-clip-text bg-main-gradient">Backend</h3>
          <RollingElements>
            <ul className="list-none 
            dark:text-transparent bg-clip-text bg-main-gradient">
              <li></li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>HTML2</li>
            </ul>
          </RollingElements>
        </div>
        <div className="border border-black shadow-sm dark:shadow-cyan-400 p-4 h-94">
          <h3 className="text-xl font-semibold mb-2 
          dark:text-transparent bg-clip-text bg-main-gradient">Frontend</h3>
          <RollingElements>
            <ul className="list-none 
            dark:text-transparent bg-clip-text bg-main-gradient">
              <li>Java</li>
              <li>Kotlin</li>
              <li>MongoDB</li>
              <li>SQL</li>
              <li>SQL</li>
            </ul>
          </RollingElements>
        </div>
        <div className="border border-black shadow-sm dark:shadow-cyan-400 p-4">
          <h3 className="text-xl font-semibold mb-2 
          dark:text-transparent bg-clip-text bg-main-gradient">Other skills</h3>
          <RollingElements>
            <ul className="list-none
            dark:text-transparent bg-clip-text bg-main-gradient">
              <li>Git</li>
              <li>Docker</li>
              <li>CI/CD</li>
            </ul>
          </RollingElements>
        </div>
        <div className="border border-black shadow-sm dark:shadow-cyan-400 p-4 h-94">
          <h3 className="text-xl font-semibold mb-2 
          dark:text-transparent bg-clip-text bg-main-gradient">Tools</h3>
          <RollingElements>
            <ul className="list-none 
            dark:text-transparent bg-clip-text bg-main-gradient">
              <li>Java</li>
              <li>Kotlin</li>
              <li>MongoDB</li>
              <li>SQL</li>
              <li>SQL</li>
            </ul>
          </RollingElements>
        </div>

      </div>
    </div>
  );
};

export default Skills;
