import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const settings = {
    nextArrow: <svg className="animate-pulse w-10 h-15 text-white bg-gray-900 rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>,
    prevArrow: <svg className="animate-pulse w-10 h-15 text-white bg-gray-900 rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
    </svg>,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    transitionDuration: 500
}

const SlideArrows = () => {
    return (
        <Slide {...settings} >
            <div>
                <div>
                    <span>Slide 1</span>
                </div>
            </div>
            <div>
                <div>
                    <span>Slide 2</span>
                </div>
            </div>
            <div>
                <div>
                    <span>Slide 3</span>
                </div>
            </div>
        </Slide>
    );
};

export default SlideArrows;