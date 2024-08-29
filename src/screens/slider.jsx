import im1 from "../wood1.png";
import im2 from "../wood4.png";
import im3 from "../wood2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ImageSlider = ()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 2000,
    };

    const images = [im1,im2,im3];
    
    return (
        <Slider {...settings}>
            {images.map((image, index)=>(
                
                    <img src={image} alt={`Slide ${index + 1}`} style={{width:"400px",height:"400px"}}/>
                
            ))}
        </Slider>
    );
}

export default ImageSlider;