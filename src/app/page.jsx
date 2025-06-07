"use client"

import Image from "next/image";
import Link from "next/link";

//react component
import Navbar from "./components/Navbar";
import SliderFetures from "./components/SliderFetures";


//react icon
import { GoArrowUpRight } from "react-icons/go";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";
import HomeNavbar from "./components/HomeNavbar";

//react slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";



var settings = {
  dots: true,
  infinite: true,
  margin: 20,
  autoplay: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 3,
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
        dots: true,
        margin: 0,
      }
    },
    {
      breakpoint: 668,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        infinite: true,
        dots: true,
        margin: 0,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        infinite: true,
        dots: true,
        margin: 0,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        margin: 0,
      }
    }
  ]
};

var settingsTwo = {
  dots: true,
  infinite: true,
  margin: 20,
  autoplay: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 1,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1200,
      settingsTwo: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        margin: 20,
      }
    },
    {
      breakpoint: 1024,
      settingsTwo: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        margin: 0,
      }
    },
    {
      breakpoint: 668,
      settingsTwo: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        infinite: true,
        dots: true,
        margin: 0,
      }
    },
    {
      breakpoint: 600,
      settingsTwo: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        infinite: true,
        dots: true,
        margin: 0,
      }
    },
    {
      breakpoint: 480,
      settingsTwo: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        margin: 0,
      }
    }
  ]
};

export default function Home() {

  return (
    <>
      <HomeNavbar />
      <main className="float-start w-100 maind-body">
        <section className="hero-section float-start w-100 position-relative">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 hero-left">
                <h1>Empowering <span> Nigerian Voices In</span> The Digital World</h1>
                <p className="col-lg-9">A powerfull scalable CMS built for Nigeria”s storyteilere and content creetors</p>
                <Link href="/" className="btn hero-btn">Get Started</Link>
                <Link href="/" className="btn ms-3 see-featm">See Features</Link>
              </div>
              <div className="col-lg-7 hero-right">
                <figure className="text-end d-block">
                  <Image src="/laptop_img.png" width={672} height={402} alt="logo" />
                </figure>

              </div>
            </div>
          </div>
          <figure className="m-0 bg-imh01">
              <Image src="/background-png01.png" width={827} height={648} alt="bm"/>
          </figure>
        </section>
                     
      </main >
      <Footer/>

    </>
  );
}
