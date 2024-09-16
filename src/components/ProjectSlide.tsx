
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

type Props = { children: any }
const settings = {
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    transitionDuration: 100,
    vertical: true,
    slidesToShow: 3,
    cssEase: "linear"

}

const SkillSlide = ({ children }: Props) => {
    return (
        <Slide {...settings} >
            {children}
        </Slide >
    );
};


export default SkillSlide;