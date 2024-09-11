import { useState, useEffect } from 'react';

const DarkModeToggle = ({ isDarkModeProp }: any) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Check local storage on component mount
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            isDarkModeProp = true;
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            isDarkModeProp = false;
        }
    };

    return (
        <div>
            <input
                className="mr-2 mt-[0.3rem] h-5 w-12 appearance-none rounded-[0.5rem]
                bg-neutral-600 before:pointer-events-none before:absolute before:h-6 before:w-6
                before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] 
                after:-mt-[0.25rem] after:h-7 after:w-7 after:rounded-full after:border-none after:bg-neutral-400 
                after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] 
                after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary 
                checked:after:absolute checked:after:z-[2] checked:after:-mt-[0.25rem] checked:after:ml-[1.5rem] 
                checked:after:h-7 checked:after:w-7 checked:after:rounded-full checked:after:border-none 
                checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] 
                checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer 
                focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] 
                focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] 
                focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-7 focus:after:w-7 focus:after:rounded-full
                focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.5rem] 
                checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] 
                checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400
                dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] 
                dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={toggleTheme} // Changed from onClick to onChange
                checked={isDarkMode} // Added checked attribute
            />
        </div>
    );
}

export default DarkModeToggle;
