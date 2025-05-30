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
import FeatureSlider from "./components/FeatureSlider";

//react slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";

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
        dots: true
      }
    },
    {
      breakpoint: 668,
      settingsTwo: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settingsTwo: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settingsTwo: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
};

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

export default function Home() {

  return (
    <>
      <Navbar />
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
        <section className="Features-section feu-slider float-start w-100">
          <h2 className="text-center crm-heading">Features</h2>
          <div className="container  mt-5">
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
                  <Image src='/man-holding-cash_204719-55917.png' width={255} height={197} alt="logo" />
                </figure>

                <div className="card-body card-styleing">
                  <h5 className="card-title">Monetization Tool</h5>
                  <p className="card-text">A prine&#39; review/c satillaction</p>
                  <Link href="#" className="btn card-btn">
                    <GoArrowUpRight /></Link>
                </div>
              </div>
              {/* card */}
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
          </div>

        </section>

        <section className="Features-section news-slider01 float-start w-100">

          <div className="container  mt-5">
            <Slider {...settingsTwo}>
              <div className="card">
                <article className="single-card-container">
                  <div className="single-card-btn-container">
                    <div className="">
                      <button className="single-card-btn-left single-card-btn-container-style"><BsArrowLeftCircle /></button>
                    </div>
                    <div className="">
                      <button className="single-card-btn-right single-card-btn-container-style"><BsArrowRightCircleFill /></button>
                    </div>
                  </div>
                  <div className="single-card">


                    <div className="quotation-top">
                      <Image src="/quotation.webp" width={59} height={59} alt="quotation" />
                    </div>
                    <div className="quotation-bottom">
                      <Image src="/quotation.webp" width={59} height={59} alt="logo" />
                    </div>

                    <div className="single-card-left">
                      <div className="">
                        <Image src='/testmonials1.png' width={210} height={210} alt="logo" />
                      </div>

                    </div>
                    <div className="single-card-right">
                      <p className="single-card-right-para">A content creator is someone who produces and shares original material across digital platforms like blogs, social media, YouTube, or podcasts. They use their creativity and skills to inform, entertain, or inspire audiences through various forms such as videos, articles, graphics, or audio. Content creators play a vital role in shaping online trends, building communities, and influencing opinions in today's digital world.</p>

                      <p className="single-card-right-para-head">PulseCraft NG</p>
                      <p className="single-card-right-para-content"> Content Creator</p>
                    </div>
                  </div>

                </article>
              </div>
              <div className="card">
                <article className="single-card-container">
                  <div className="single-card-btn-container">
                    <div className="">
                      <button className="single-card-btn-left single-card-btn-container-style"><BsArrowLeftCircle /></button>
                    </div>
                    <div className="">
                      <button className="single-card-btn-right single-card-btn-container-style"><BsArrowRightCircleFill /></button>
                    </div>
                  </div>
                  <div className="single-card">


                    <div className="quotation-top">
                       <Image src="/quotation.webp" width={59} height={59} alt="quotation" />
                    </div>
                    <div className="quotation-bottom">
                    <Image src="/quotation.webp" width={59} height={59} alt="logo" />
                    </div>

                    <div className="single-card-left">
                      <div className="">
                        <Image src='/testmonials1.png' width={210} height={210} alt="logo" />
                      </div>
                    </div>
                    <div className="single-card-right">
                      <p className="single-card-right-para">A content creator is someone who produces and shares original material across digital platforms like blogs, social media, YouTube, or podcasts. They use their creativity and skills to inform, entertain, or inspire audiences through various forms such as videos, articles, graphics, or audio. Content creators play a vital role in shaping online trends, building communities, and influencing opinions in today's digital world.</p>

                      <p className="single-card-right-para-head">PulseCraft NG</p>
                      <p className="single-card-right-para-content"> Content Creator</p>
                    </div>
                  </div>

                </article>
              </div>
            </Slider>
          </div>

        </section>

        <section className="snippet-section float-start w-100">
          <h2 className="text-center crm-heading">Pricing Snippet</h2>
          <div className="container">
            <div className="row row-cols-1 pricing01 row-cols-lg-3 gx-lg-0  mb-5">
              <div className="col">
                <div className="card w-100 snippet-bost" >
                  <div className="card-body w-100 p-0">
                    <div className="snippet-card">
                      <p className="plan-name">Freemium</p>
                      <p className="price">$0 <span>/mo</span></p>
                      <article className="features">
                        <div className="feature-item d-flex">
                          <Image src='/check-mark.webp' width={20} height={20} alt="logo" />
                          <p>Local Language Support</p>
                        </div>
                        <div className="feature-item d-flex">
                       <Image src='/check-mark.webp' width={20} height={20} alt="logo" />
                          <p>Built-In SEO for Nigerian Search Trends</p>
                        </div>
                        <div className="feature-item d-flex">
                 <Image src='/check-mark.webp' width={20} height={20} alt="logo" />
                          <p>Editorial Tools for Journalists</p>
                        </div>
                        <div className="feature-item d-flex">
                  <Image src='/check-mark.webp' width={20} height={20} alt="logo" />
                          <p>Social Media Integration</p>
                        </div>
                      </article>
                      <Link href='/' className="plan">Choose Plan</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card w-100 snippet-bost" >
                  <div className="card-body w-100 p-0">
                    <div className="snippet-card">
                      <p className="plan-name">Premium</p>
                      <p className="price">$55<span>/mo</span></p>
                      <article className="features">
                        <div className="feature-item d-flex">
            <Image src='/check-mark.webp' width={20} height={20} alt="logo" />
                          <p>Local Language Support</p>
                        </div>
                        <div className="feature-item d-flex">
                  <Image src='/check-mark.webp' width={20} height={20} alt="logo" />
                          <p>Built-In SEO for Nigerian Search Trends</p>
                        </div>
                        <div className="feature-item d-flex">
                   <Image src='/check-mark.webp' width={20} height={20} alt="logo" />
                          <p>Unlimited Content Publishing</p>
                        </div>
                        <div className="feature-item d-flex">
                 <Image src='/check-mark.webp' width={20} height={20} alt="logo" />
                          <p>Advanced Media Management</p>
                        </div>
                        <div className="feature-item d-flex">
                          <Image src='/check-mark.webp' width={20} height={20} alt="logo" />
                          <p>Monetization Tools</p>
                        </div>
                        <div className="feature-item d-flex">
                   <Image src='/check-mark.webp' width={20} height={20} alt="logo" />
                          <p>Data & Analytics Suite</p>
                        </div>
                        <div className="feature-item d-flex">
                 <Image src='/check-mark.webp' width={20} height={20} alt="logo" />
                          <p>24/7 Support</p>
                        </div>
                      </article>
                      <Link href='/' className="plan">Choose Plan</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card w-100 snippet-bost" >
                  <div className="card-body w-100 p-0">
                    <div className="snippet-card">
                      <p className="plan-name">Enterprise</p>
                      <p className="price">$105 <span>/mo</span></p>
                      <article className="features ">
                        <div className="feature-item d-flex">
    <Image src='/check-mark.webp' width={20} height={20} alt="logo" />
                          <p>Advanced Editorial Tools</p>
                        </div>
                        <div className="feature-item d-flex">
                           <Image src='/check-mark.webp' width={20} height={20} alt="logo" />
                          <p>Integrated Monetization & Analytics</p>
                        </div>
                        <div className="feature-item d-flex">
                         <Image src='/check-mark.webp' width={20} height={20} alt="logo" />
                          <p>Bulletproof Security</p>
                        </div>
                        <div className="feature-item d-flex">
                  <Image src='/check-mark.webp' width={20} height={20} alt="logo" />
                          <p>API & Third-Party Integration</p>
                        </div>
                        <div className="feature-item d-flex">
                             <Image src='/check-mark.webp' width={20} height={20} alt="logo" />

                          <p>Training & Onboarding</p>
                        </div>
                        <div className="feature-item d-flex">
                          <Image src='/check-mark.webp' width={20} height={20} alt="logo" />
                          <p>Government & NGO Compliance</p>
                        </div>
                      </article>
                      <Link href='/' className="plan">Choose Plan</Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <Footer></Footer>
        </section>
      </main >

    </>
  );
}
