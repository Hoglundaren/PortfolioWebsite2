import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import ProjectSlides from './ProjectSlides';
import { useState } from 'react';

const ViewSwitcher = ({ view }: any) => {
    const [isToggled, setIsToggled] = useState(false);

    const knapp = document.getElementById("about")
    switch (view) {
        case 'about':
            return (
                <section className="text-4xl h-screen pt-16 flex items-center justify-center bg-gray-300 dark:bg-bakgrund">
                    <h1 className="text-4xl"><About /></h1>
                </section>
            );
        case 'projects':
            return (
                <section id="projects" className="h-screen pt-16 flex items-center justify-center bg-gray-400 dark:bg-bakgrund">
                    <div className="w-full overflow-hidden">
                        <h1 className="text-4xl p-1 mb-4"><ProjectSlides /></h1>
                    </div>
                </section>
            );
        case 'skills':
            return (
                <section id="skills" className="h-screen pt-16 flex items-center justify-center bg-gray-300 dark:bg-bakgrund">
                    <h1 className="text-4xl"><Skills /></h1>
                </section>
            );
        case 'contact':
            return (
                <section id="contact" className="h-screen pt-16 flex items-center justify-center bg-gray-400 dark:bg-bakgrund">
                    <h1 className="text-4xl"><Contact /></h1>
                </section>
            );
        default:
            return (
                <section id="about" className="text-4xl h-screen pt-16 flex items-center justify-center bg-gray-300 dark:bg-bakgrund">
                    <h1 className="text-4xl"><About /></h1>
                </section>
            );
    }
};

export default ViewSwitcher;
