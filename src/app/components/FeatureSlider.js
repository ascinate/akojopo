"use client"
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaData from "./FeatureSliderApi";
import Link from "next/link";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

var settings = {
  dots: true,
  infinite: true,
  margin: 20,
  autoplay: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 4,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
        margin: 20,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 668,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
};


function FeatureSlider() {
      const[allFeaData, setAllFeaData ] = useState(FeaData);
      console.log(FeaData);
    return(
        <>
            <Slider {...settings}>
              <div className="card">
                <figure className="card-figure">
                  <Image src="/card-1.webp" width={255} height={197} alt="logo" />
                </figure>

                <div className="card-body card-styleing">
                  <h5 className="card-title">Multtinqual Publishing</h5>
                  <p className="card-text">A prine&#39; review/c satillaction</p>
                  <Link href="#" className="btn card-btn">
                    <GoArrowUpRight /></Link>
                </div>
              </div>
              <div className="card">
                <figure className="card-figure">
                  <Image src='/card-2.webp' width={255} height={197} alt="logo" className="cardimg" />
                </figure>

                <div className="card-body card-styleing">
                  <h5 className="card-title">Custom Content Editor</h5>
                  <p className="card-text">A prine&#39; review/c satillaction</p>
                  <Link href="#" className="btn card-btn">
                    <GoArrowUpRight /></Link>
                </div>
              </div>
              <div className="card">
                <figure className="card-figure">
                  <Image src='/card-3.webp' width={255} height={197} alt="logo" />
                </figure>

                <div className="card-body card-styleing">
                  <h5 className="card-title">Monetization Tool</h5>
                  <p className="card-text">A prine&#39; review/c satillaction</p>
                  <Link href="#" className="btn card-btn">
                    <GoArrowUpRight /></Link>
                </div>
              </div>
              <div className="card">
                <figure className="card-figure">
                  <Image src='/card-4.webp' width={255} height={197} alt="logo" />
                </figure>

                <div className="card-body card-styleing">
                  <h5 className="card-title">SEO & Analytics</h5>
                  <p className="card-text">A prine&#39; review/c satillaction</p>
                  <Link href="#" className="btn card-btn">
                    <GoArrowUpRight /></Link>
                </div>
              </div>
            </Slider>


        </>
    )
    
}
export default FeatureSlider;