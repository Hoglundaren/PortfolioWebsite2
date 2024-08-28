
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

type Props = { children: any }
const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    transitionDuration: 500,
    vertical: true

}

const SkillSlide = ({ children }: Props) => {
    return (
        <Slide {...settings} >
            {children}
        </Slide >
    );
};


export default SkillSlide;