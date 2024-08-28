import RollingElements from './RollingElements';

const Skills = () => {
  return (
    <div className="container mx-7 p-2 h-auto overflow-auto">
      <h2 className="text-5xl font-bold mb-5">Skillset</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        <div className="border border-black p-4">
          <h3 className="text-xl font-semibold mb-2">Frontend</h3>
          <RollingElements>
            <ul className="list-none">
              <li></li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>HTML2</li>
            </ul>
          </RollingElements>
        </div>
        <div className="border border-black p-4 h-94">
          <h3 className="text-xl font-semibold mb-2">Backend</h3>
          <RollingElements>
            <ul className="list-none">
              <li>Java</li>
              <li>Kotlin</li>
              <li>MongoDB</li>
              <li>SQL</li>
              <li>SQL</li>
            </ul>
          </RollingElements>
        </div>
        <div className="border border-black p-4">
          <h3 className="text-xl font-semibold mb-2">Other skills</h3>
          <RollingElements>
            <ul className="list-none">
              <li>Git</li>
              <li>Docker</li>
              <li>CI/CD</li>
            </ul>
          </RollingElements>
        </div>
        <div className="border border-black p-4 h-94">
          <h3 className="text-xl font-semibold mb-2">Tools</h3>
          <RollingElements>
            <ul className="list-none">
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
