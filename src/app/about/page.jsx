"use client"
//component
import Navbar from "../components/Navbar";


import Image from "next/image";
import Link from "next/link";


// about page image
import aboutBackground from '../assets/about-page-banner.webp';
import aboutusImg from '../assets/about_img.webp';
import missionCardTwo from '../assets/aboutCardImgOneHover.webp'
import missionCardThree from '../assets/aboutCardImgOneHover.webp'
import foundingImg from '../assets/foundingImg.webp';
import akojopoImg from '../assets/akojopoImg.webp'



//react slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer";




var settings = {
  dots: true,
  infinite: true,
  margin: 20,
  autoplay: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
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

export default function About() {
  return (
    <>
      <Navbar />
      <section className="about-section float-start w-100">
        <div className="about-banner-section  position-relative float-start w-100">
         
            <h2>About Us</h2>
            <figure>
              <Image src={aboutBackground} width={1440} height={300} alt="logo" />
            </figure>
        </div>

      
      </section>


        <section className="about-start0150 float-start bg-white w-100">
          
            <div className="container">
              <div className="row row-cols-1 row-cols-lg-2 gx-lg-5 align-items-center">
                <div className="col">
                  <div className='aboutus-right'>
                    <Image src="/about_img.webp" width={555} height={447} alt="logo" />
                  </div>
                </div>
                <div className="col">
                  <div className='aboutus-right '>
                    <h2 className="crm-heading">About<span className="imspan"> Us</span></h2>
                    <p cl>We are a technology-driven platform built to empower Nigeriaus&#39;s growing community of content creators, journalists, and digital storytellers. Since our founding in 2020, we&#39;ve been committed to developing a locally relevant Content Management System (CMS) that addresses the real needs of the Nigerian media space—reliable publishing tools, multilingual support, easy monetization, and secure digital infrastructure.
                      Our CMS is not just a tool—it&#39;s a bridge between technology and storytelling, designed to amplify authentic Nigerian voices.</p>
                  </div>
                </div>
              </div>
            </div>
        </section>
      


      <section className="missions-sections misouns0150 float-start w-100">
        <article className="mission-start-article aboutus-article">
          
            <h2 className='text-center crm-heading'>Our Mission</h2>
            <p className='text-center col-lg-7 mx-auto mt-3'>Our mission is to empower Nigerian content creators, journalists, and organizations with a powerful, locally-adapted CMS that simplifies and drives digital growth.</p>
        
          <div className="container mt-5">
            <div className="row gy-4">
              <div className="col-lg-4">
                <div className="text-center">

                  <div className="card mission-card-style">
                    <div className="mx-auto">
                      <div className="about-card-icon d-flex align-items-center justify-content-center rounded-circle">
                        <Image src="/aboutCardImgSec.webp" width={30} height={30} alt="mission card one image" className="about-card-icon-margin" />
                      </div>
                    </div>


                    <div className=" card-body">
                      <div className="mx-auto">
                        <h3 className="mission-card-title">Vision</h3>
                        <p className="mission-card-para">Our vision is to become Nigeria&#39;s leading digital content platform	&#45;one that fuels innovation, amplifies local voices, and shapes the future of storytelling across the continent.</p>
                      </div>
                    </div>
                  </div>


                </div>
              </div>

              <div className="col-lg-4">
                <div className="text-center">

                  {/* card */}
                  <div className="card mission-card-style">
                    <div className="mx-auto">
                      <div className="about-card-icon d-flex align-items-center justify-content-center rounded-circle">
                        <Image src="/aboutCardImgThrHover.webp" width={30} height={30} alt="mission card one image" className="about-card-icon-margin" />
                      </div>
                    </div>


                    <div className=" card-body">
                      <div className="mx-auto">
                        <h3 className="mission-card-title">Missions</h3>
                        <p className="mission-card-para">Our vision is to become Nigeria&#39;s leading digital content platform	&#45;one that fuels innovation, amplifies local voices, and shapes the future of storytelling across the continent.</p>
                      </div>
                    </div>
                  </div>


                </div>
              </div>


              {/* card column */}
              <div className="col-lg-4">
                <div className="text-center">

                  {/* card */}
                  <div className="card mission-card-style">
                    <div className="mx-auto">
                      <div className="about-card-icon d-flex align-items-center justify-content-center rounded-circle">
                        <Image src="/leadership-1.png" width={30} height={30} alt="mission card one image" className="about-card-icon-margin" />
                      </div>
                    </div>


                    <div className=" card-body">
                      <div className="mx-auto">
                        <h3 className="mission-card-title">Goals</h3>
                        <p className="mission-card-para">Our vision is to become Nigeria&#39;s leading digital content platform	&#45;one that fuels innovation, amplifies local voices, and shapes the future of storytelling across the continent.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="container-margin">
        <article className="our-founding-article aboutus-article">
          <div className="container">
            <div className="row">
              <Slider {...settings}>
                <div className="d-lg-flex align-items-start">
                  <div className="col">
                    <Image src={foundingImg} width={555} height={586} alt="logo" />
                  </div>
                  <div className="col ps-lg-5">
                    <div className="como-lft01 d-inline-block w-100">
                      <h2 className="crm-heading mb-5">Our Founding <br /> <span class="story01">Story</span></h2>
                      
                      <div className="ourfounding-year-para">
                        <h4 className="ourfounding-year">2019</h4>
                        <p>Our journey began in 2019 with a simple idea: to create a content platform that truly understands the needs of Nigerian creators. Frustrated by the limitations of foreign CMS tools, our founders—digital storytellers and tech enthusiasts—set out to build a solution tailored for Nigeria&#44;s diverse media landscape. From humble beginnings, we&#44;ve grown into a trusted platform that supports local languages, regional storytelling, and digital innovation across the country.</p>
                      </div>
                      
                        <h4 className="ourfounding-year">2020</h4>
                        <p className="">Founded in 2020, our journey began with a simple but powerful goal: to create a content platform that truly understands the needs of Nigerian storytellers. Frustrated by the limitations of foreign CMS tools, our team set out to build a solution tailored to the local market.</p>
                      
                    </div>
                  </div>
                </div>

                <div className="d-lg-flex align-items-start">
                  <div className="col">
                    <Image src={foundingImg} width={555} height={586} alt="logo" />
                  </div>
                  <div className="col ps-lg-5">
                    <div className="como-lft01 d-inline-block w-100">
                      <h2 className="ourfounding-title">Our Founding <br /> <span>Story</span></h2>
                    
                      <div className="ourfounding-year-para">
                        <h4 className="ourfounding-year">2019</h4>
                        <p>Our journey began in 2019 with a simple idea: to create a content platform that truly understands the needs of Nigerian creators. Frustrated by the limitations of foreign CMS tools, our founders—digital storytellers and tech enthusiasts—set out to build a solution tailored for Nigeria&#44;s diverse media landscape. From humble beginnings, we&#44;ve grown into a trusted platform that supports local languages, regional storytelling, and digital innovation across the country.</p>
                      </div>
                   
                      <h4 className="ourfounding-year">2020</h4>
                      <p className="">Founded in 2020, our journey began with a simple but powerful goal: to create a content platform that truly understands the needs of Nigerian storytellers. Frustrated by the limitations of foreign CMS tools, our team set out to build a solution tailored to the local market.</p>
                    </div>

                  </div>
                </div>

                <div className="d-lg-flex align-items-start">
                  <div className="col">
                    <Image src={foundingImg} width={555} height={586} alt="logo" l oading="lazy" />
                  </div>
                  <div className="col ps-lg-5">
                    <div>
                      <h2 className="ourfounding-title">Our Founding <br /> <span>Story</span></h2>
                    </div>
                    <div className="ourfounding-year-para">
                      <h4 className="ourfounding-year">2019</h4>
                      <p>Our journey began in 2019 with a simple idea: to create a content platform that truly understands the needs of Nigerian creators. Frustrated by the limitations of foreign CMS tools, our founders—digital storytellers and tech enthusiasts—set out to build a solution tailored for Nigeria	&#44;s diverse media landscape. From humble beginnings, we	&#44;ve grown into a trusted platform that supports local languages, regional storytelling, and digital innovation across the country.</p>
                    </div>
                    <div>
                      <h4 className="ourfounding-year">2020</h4>
                      <p className="">Founded in 2020, our journey began with a simple but powerful goal: to create a content platform that truly understands the needs of Nigerian storytellers. Frustrated by the limitations of foreign CMS tools, our team set out to build a solution tailored to the local market.</p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </article>
      </section>



      <section className="container-margin">


        <article className="why-akojopo-article aboutus-article pt-0">
          <div className="container">
            <h2 className="crm-heading">Why Choose <br />Akojopo ?</h2>
            <div className="row align-items-start mt-5 gx-lg-5">
              <div className="col-lg-6">
                <div className="row ">
                  <div className="col-lg-6 d-flex align-items-start">
                    <div className="akojopo-number">
                      <span className="akojopo-number-text">01</span>
                    </div>
                    <div>
                      <span className="akojopo-number-title">Powerful & Easy to Use</span>
                      <p className="akojopo-number-para">Whether you&#44;re a beginner or a seasoned editor, our intuitive interface makes content creation, editing, and publishing fast and effortless.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-start">
                    <div className="akojopo-number">
                      <span className="akojopo-number-text">02</span>
                    </div>
                    <div>
                      <span className="akojopo-number-title">Powerful & Easy to Use</span>
                      <p className="akojopo-number-para">Whether you&#44;re a beginner or a seasoned editor, our intuitive interface makes content creation, editing, and publishing fast and effortless.</p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 d-flex align-items-start">
                    <div className="akojopo-number">
                      <span className="akojopo-number-text">03</span>
                    </div>
                    <div>
                      <span className="akojopo-number-title">Powerful & Easy to Use</span>
                      <p className="akojopo-number-para">Whether you&#44;re a beginner or a seasoned editor, our intuitive interface makes content creation, editing, and publishing fast and effortless.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-start">
                    <div className="akojopo-number">
                      <span className="akojopo-number-text">04</span>
                    </div>
                    <div>
                      <span className="akojopo-number-title">Powerful & Easy to Use</span>
                      <p className="akojopo-number-para">Whether you&#44;re a beginner or a seasoned editor, our intuitive interface makes content creation, editing, and publishing fast and effortless.</p>
                    </div>
                  </div>
                </div>


              </div>
              <div className="col-lg-6">

                <div>
                  <Image src={akojopoImg} width={555} height={418} alt="logo" />
                </div>
              </div>

            </div>
          </div>
        </article>
      </section>
      {/*--- Why Choose Akojopo ? end ---*/}



      <Footer></Footer>
    </>
  );
}
