"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

var settings = {
    dots:  true,
    infinite: true,
    margin:20,
    autoplay: true,
    speed: 500,
    slidesToShow:4,
    slidesToScroll:4,
    initialSlide: 4,
    autoplaySpeed: 2000,
    pauseOnHover: true, 
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow:4,
          slidesToScroll: 4,
          infinite: true,
          dots:  true,
          margin:20,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:1,
          slidesToScroll: 1,
          infinite: true,
          dots:  true
        }
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots:  true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow:1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots:  true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots:  true
        }
      }
    ]
  };
function SliderFetures() {

    return(
        <>
           <Slider {...settings}>
            <article className="d-inline-block comonins-category01">1</article>
            <article className="d-inline-block comonins-category01">2</article>
            <article className="d-inline-block comonins-category01">3</article>
            <article className="d-inline-block comonins-category01">4</article>
            <article className="d-inline-block comonins-category01">5</article>
            <article className="d-inline-block comonins-category01">6</article>
            <article className="d-inline-block comonins-category01">1</article>
            <article className="d-inline-block comonins-category01">1</article>
           </Slider>
        </>
    )
}
export default SliderFetures;