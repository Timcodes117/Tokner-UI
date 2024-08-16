"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsArrowRight } from "react-icons/bs";
import { GiHamburger, GiHamburgerMenu } from "react-icons/gi";
import SectionTag from "./components/SectionTag";
import TiltCard from "./components/details_card";
import { FaSlash } from "react-icons/fa";

const HomePage = () => {
  const heroTxtRef = useRef(null);
  const heroImgRef = useRef(null);
  const gbtn = useRef(null);

  const headerRef = useRef(null);
  const introCardRef = useRef(null);
  const introCardRef2 = useRef(null);
  
  const title = useRef(null);
  const titleTxt = useRef(null);
  const content = useRef(null);
  const contentTxt = useRef(null);

  const textsHeadRef = useRef(null);
  const textsRef = useRef(null);
  const textsRef2 = useRef(null);
  const textsRef3 = useRef(null);
  const textsRef4 = useRef(null);
  const textsRef5 = useRef(null);
  const textsRef6 = useRef(null);
  const txtImgRef = useRef(null);

  const secRef = useRef(null);
  const secRef2 = useRef(null);
  const secRef3 = useRef(null);
  const secRef4 = useRef(null);

  const presaleCard = useRef(null);
  const presaleCard1 = useRef(null);
  const presaleCard2 = useRef(null);
  const presaleCard3 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0, delay: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
      }
    );

    gsap.fromTo(
      heroTxtRef.current,
      { y: -100, opacity: 0, delay: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
      }
    );

    gsap.fromTo(
      heroImgRef.current,
      { y: 100, opacity: 0, delay: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
      }
    );
  }, []);

  useEffect(() => {
    if (typeof "window" !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo(
        introCardRef.current,
        {
          scale: 0.5,
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          scrollTrigger: {
            trigger: introCardRef.current,
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        introCardRef2.current,
        {
          scale: 0.5,
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          scrollTrigger: {
            trigger: introCardRef2.current,
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        txtImgRef.current,
        {
          scale: 0.5,
          opacity: 0,
          y: 200,
          rotateY: 90,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotateY: 0,
          scrollTrigger: {
            trigger: txtImgRef.current,
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        textsRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: textsRef.current,
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        textsRef2.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: textsRef2.current,
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        textsRef3.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: textsRef3.current,
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        textsRef6.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: textsRef6.current,
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        textsRef4.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: textsRef4.current,
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        textsRef5.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: textsRef5.current,
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        gbtn.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: gbtn.current,
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        textsHeadRef.current,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: textsHeadRef.current,
            start: "top center",
            end: "center center",
            scrub: true,
          },
        }
      );
    }
  }, []);

  useEffect(() => {
    if (typeof "window" !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo(
        secRef.current,
        { x: -1000, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: secRef.current,
            start: "top center",
            end: "center center",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        secRef2.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: secRef2.current,
            start: "top center",
            end: "center center",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        secRef3.current,
        { z: -1000, opacity: 0 },
        {
          z: 0,

          opacity: 1,
          scrollTrigger: {
            trigger: secRef3.current,
            start: "top center",
            end: "center center",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        secRef4.current,
        { x: 1000, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: secRef4.current,
            start: "top center",
            end: "center center",
            scrub: true,
          },
        }
      );
    }
  }, []);

  useEffect(() => {
    if (typeof "window" !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo(
        presaleCard.current,
        { y: 200, opacity: 0 },
        {
          y: 0,
          rotateY: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: presaleCard.current,
            start: "top center",
            end: "center center",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        presaleCard1.current,
        { x: -1000, opacity: 0, rotateY: -90 },
        {
          x: 0,
          rotateY: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: presaleCard1.current,
            start: "top center",
            end: "center center",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        presaleCard2.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: presaleCard2.current,
            start: "top center",
            end: "center center",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        presaleCard3.current,
        { x: 1000, opacity: 0, rotateY: 90 },
        {
          x: 0,
          rotateY: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: presaleCard3.current,
            start: "top center",
            end: "center center",
            scrub: true,
          },
        }
      );
    }


    
    gsap.fromTo(
      title.current,
      { y: -100, opacity: 0, },
      {
        y: 0,
        
        opacity: 1,
        scrollTrigger: {
          trigger: title.current,
          start: "top center",
          end: "center center",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
    content.current,
      { y: 100, opacity: 0, },
      {
        y: 0,
        
        opacity: 1,
        scrollTrigger: {
          trigger: content.current,
          start: "top center",
          end: "center center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      titleTxt.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: titleTxt.current,
          start: "top bottom",
          end: "center center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      contentTxt.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: contentTxt.current,
          start: "top bottom",
          end: "center center",
          scrub: true,
        },
      }
    );
  }, []);

  const [showModal, setmodal] = useState(false);
  return (
    <>
      <main className="flex flex-col ">
        {/* {
      showModal && */}
        <>
          <div
            style={
              showModal
                ? { width: "80vw", transition: "all 1s" }
                : { width: "0vw", transition: "all 1s", opacity: 0 }
            }
            className="w-[0vw] h-[100vh] bg-black fixed top-0left-0 p-8 overflow-scroll z-[9000000] flex md:hidden no-sb flex-col "
          >
            <nav className=" flex-col gap-[30px] items-start lg:hidden  flex mt-[10vh] w-full">
              <a href="#" className="text-[bold] text-[14px] text-white">
                Our team
              </a>
              <a href="#" className="text-[bold] text-[14px] text-white">
                Tokens
              </a>
              <a href="#" className="text-[bold] text-[14px] text-white">
                Connect wallet
              </a>
              <a href="#" className="text-[bold] text-[14px] text-white">
                Lightpaper
              </a>
            </nav>
            <br />
            <br />
            <hr />
            <br />

            <div className="flex flex-row gap-[5px] items-center">
              <img src="/assets/fav.svg" width={20} height={20} alt="" />
              <p className="text-[16px] text-white">Tokner</p>
            </div>
            <br />
            <p className="text-[14px] text-[grey]">
              this is a ui clone a from figma community. cloned by timCodes with
              next.js
            </p>
            <p className="text-[14px] text-[white]">©2024</p>
          </div>
          <div
            className="flex flex-1 h-[100vh] w-full z-[5000]"
            onClick={() => setmodal(false)}
          ></div>
        </>
        {/* } */}
        <div className="w-full h-[100vh] bg-[url(/assets/bg_blur.svg)] bg-cover bg-bottom bg-no-repeat absolute top-0 right-0 z-[-1000]"></div>
        <header
          className="flex flex-row items-center justify-between lg:mt-[40px] mt-[20px] lg:px-[40px] px-[20px] opacity-0"
          ref={headerRef}
        >
          <div className="flex flex-row items-end gap-[80px]">
            <img
              src="/assets/logo_colored_sign_black_text.svg"
              alt=""
              width={187.06}
              height={30}
            />
            <nav className=" flex-row gap-[30px] items-center hidden lg:flex">
              <a href="#" className="text-[bold] text-[14px] text-white">
                Our team
              </a>
              <a href="#" className="text-[bold] text-[14px] text-white">
                Tokens
              </a>
              <a href="#" className="text-[bold] text-[14px] text-white">
                Connect wallet
              </a>
              <a href="#" className="text-[bold] text-[14px] text-white">
                Lightpaper
              </a>
            </nav>
          </div>

          <div className="hidden lg:flex flex-row items-center gap-[30px]">
            <a href="#" className="text-[bold] text-[14px] text-white">
              Sign in
            </a>
            <button className="border-[2px] border-[#22A75D] w-[128px] h-[48px] rounded-[52px] bg-none text-[bold] text-[14px] text-white">
              Sign up
            </button>
          </div>

          <GiHamburgerMenu
            size={20}
            color="white"
            onClick={() => setmodal(!showModal)}
            className="active:opacity-[0.5] cursor-pointer lg:hidden"
          />
        </header>
        {/* hero section */}
        <div className="flex flex-row items-center justify-between min-h-[100vh] px-[5vw]">
          <div
            className="flex lg:w-[45vw] w-full flex flex-col items-start lg:justify-center min-h-[100vh] opacity-0"
            ref={heroTxtRef}
          >
            <p className="text-[16px] blueGd lg:mt-0 mt-[90px]">
              At Tokners we are
            </p>
            <div className="flex flex-col mb-[10px]">
              <b className="lg:text-[48px] text-[30px] text-white w-full leading-tight font-[centGothB]">
                Reimagining social
              </b>
              <b className="lg:text-[48px] text-[30px] text-white w-full leading-tight font-[centGothB]">
                {" "}
                media through the
              </b>
              <b className="lg:text-[48px] text-[30px] text-white w-full leading-tight font-[centGothB]">
                power of the blockchain.
              </b>
            </div>
            <p className="lg:text-[16px] text-[#DDE2FF] text-[14px]">
              We are creating social media 3.0 with influencers, celebrities and
              creators being able to launch their own digital currency by simply
              creating a profile with media content posted as Non fungible
              Tokens that can be owned and traded on the Tknrs network
            </p>
            <br />
            <br />
          </div>

          <div
            ref={heroImgRef}
            className="lg:min-w-[65vw] w-full  min-h-[110vh] opacity-0 bg-[url(/assets/hero_img.svg)] bg-no-repeat md:bg-contain bg-cover top-[40vh] lg:top-0 bg-right absolute right-0 z-[-100]"
          ></div>
        </div>

        {/* card section */}
        <div className="flex lg:flex-row items-center justify-center min-h-[100vh] lg:px-[5vw] flex-col gap-[20px] px-4 mb-[100px]">
          <div
            ref={introCardRef}
            className="bg-[#171B29] min-h-[436px] flex flex-col lg:flex-[45px] w-full max-w-[777px] lg:min-w-[600px] rounded-[25px] p-[60px]"
          >
            <div className="w-[70px] min-h-[70px] bg-[#22A75D] rounded-[100px] flex items-center justify-center greendropshadow">
              <img
                src="/assets/icons/crown_icon.svg"
                width={24}
                height={24}
                alt=""
              />
            </div>
            <br />
            <b className="text-[36px] text-white">
              For <span className="underline text-[#22A75D]">Creators</span>
            </b>
            <br />
            <p className="text-[16px] text-[white] ">
              Creators can gain independence through a decentralised digital
              currency system that is dependent on growing and engaging with the
              community and also their star power. They own 10-15% of the total
              value of the tokens minted.
            </p>
            <br />
            <div
              className="flex flex-row items-center gap-2 hover:gap-6 cursor-pointer"
              style={{ transition: "ease-in-out 0.5s" }}
            >
              <p className="text-[#22A75D] underine text-[14px]">Learn More</p>{" "}
              <BsArrowRight color="#22A75D" size={16} />
            </div>
          </div>

          <div
            ref={introCardRef2}
            className="bg-[#171B29] min-h-[400px] flex flex-col lg:flex-[45px] w-full max-w-[777px] lg:min-w-[600px] rounded-[25px] p-[60px] lg:mt-[200px]"
          >
            <div className="w-[70px] min-h-[70px] bg-[#2278D4] rounded-[100px] flex items-center justify-center bluedropshadow">
              <img
                src="/assets/icons/star_icon.svg"
                width={24}
                height={24}
                alt=""
              />
            </div>
            <br />
            <b className="text-[36px] text-white">
              For <span className="underline text-[#2278D4]">Holders</span>
            </b>
            <br />
            <p className="text-[16px] text-[white] ">
              Holding social tokens allows the individual to gain access to
              benefits including unreleased content, private communities, direct
              access to celebrity, early- access to tickets and more as well as
              the ability to trade with other communities in order to gain
              access to more creator content with early token buyers being the
              biggest winners as the value of the token increases with more
              buyers.
            </p>
            <br />
            <div
              className="flex flex-row items-center gap-2 hover:gap-6 cursor-pointer"
              style={{ transition: "ease-in-out 0.5s" }}
            >
              <p className="text-[#2278D4] underine text-[14px]">Learn More</p>{" "}
              <BsArrowRight color="#2278D4" size={16} />
            </div>
          </div>
        </div>
        <div className="w-full min-h-[100vh] flex lg:flex-row mt-[100px] flex-col">
          <div ref={content} className="flex flex-[50] lg:min-h-[700px] min-h-[300px] bg-[red] rounded-tr-[300px] bg-[url(/assets/theme_art.png)] bg-cover bg-no-repeat w-full "></div>
          <div ref={title} className="flex flex-[50] min-h-[700px] bg-[white] lg:rounded-tl-[300px] items-center p-[40px] flex-col justify-center w-full ">
            <div className="max-w-[500px]">
              <br />
              <br />
              <b className="text-[48px] opacity-0 " ref={titleTxt}>What makes us different?</b>
              <div ref={contentTxt} className="flex flex-col">

              <p>
                We would only launch tokens with the express permission of the
                creators.{" "}
              </p>
              <br />
              <p className="text-[#0F1320] text-[16px] max-w-[500px]">
                There are several thousand celebrities and creators on twitter,
                tiktok, Instagram and YouTube with followings in the millions
                who we would be actively engaging before we go viral.
              </p>
              <br />
              <p className="text-[#0F1320] text-[16px] max-w-[500px]">
                We would get them on our platform and they would see the
                opportunity to create a fan driven digital economy where their
                digital content can be traded as NFTs and their most loyal fans
                can have the monetary value of their creator's currency increase
                significantly as they promote their digital currency across
                their channels while our native token holders benefit from the
                Weentar popularity.
              </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white h-[150px]">
          <div className="w-full h-[150px] bg-[#0F1320] rounded-tr-[400px]"></div>
        </div>
        <div className="w-full min-h-[60vh] px-[10vw] flex flex-row lg:gap-[2.5vw] gap-[50px] mt-[20vh] mb-[5vh] flex-wrap lg:flex-nowrap overflow-hidden">
          <div className="flex flex-col max-w-[360px] opacity-0" ref={secRef}>
            <SectionTag
              label="Q1"
              color="#22A75D"
              outterLabel="2021"
              shadowClass="greendropshadow"
            />
            <br />
            <br />
            <div className="flex flex-row gap-[10px] items-center ">
              <p className="text-[12px] text-[#22A75D] font-[AzoSansR]">01</p>{" "}
              <p className="text-[14px] text-white">Team set-up</p>
            </div>
            <div className="flex flex-row gap-[10px] items-center ">
              <p className="text-[12px] text-[#22A75D] font-[AzoSansB]">02</p>{" "}
              <p className="text-[14px] text-white">
                Launch of informational website
              </p>
            </div>
          </div>

          {/* sec 2 */}
          <div className="flex flex-col max-w-[360px] opacity-0" ref={secRef2}>
            <SectionTag
              label="Q2"
              color="#2278D4"
              outterLabel="2021"
              shadowClass="bluedropshadow"
            />
            <br />
            <br />
            <div className="flex flex-row gap-[10px] items-center ">
              <p className="text-[12px] text-[#2278D4] font-[AzoSansR]">01</p>{" "}
              <p className="text-[14px] text-white">
                Presale and exchange listings
              </p>
            </div>
            <div className="flex flex-row gap-[10px] items-center ">
              <p className="text-[12px] text-[#2278D4] font-[AzoSansB]">02</p>{" "}
              <p className="text-[14px] text-white">
                Blockchain development and launch
              </p>
            </div>
            <div className="flex flex-row gap-[10px] items-center ">
              <p className="text-[12px] text-[#2278D4] font-[AzoSansB]">03</p>{" "}
              <p className="text-[14px] text-white">Launch of our MVP</p>
            </div>
            <div className="flex flex-row gap-[10px] items-center ">
              <p className="text-[12px] text-[#2278D4] font-[AzoSansB]">04</p>{" "}
              <p className="text-[14px] text-white">
                Influencer agency partnerships
              </p>
            </div>
            <div className="flex flex-row gap-[10px] items-center ">
              <p className="text-[12px] text-[#2278D4] font-[AzoSansB]">05</p>{" "}
              <p className="text-[14px] text-white">Marketing and promotion </p>
            </div>
          </div>

          {/* sec 3 */}
          <div className="flex flex-col max-w-[360px] opacity-0" ref={secRef3}>
            <SectionTag
              label="Q3"
              color="#FFD100"
              outterLabel="2021"
              shadowClass="amberdropshadow"
            />
            <br />
            <br />
            <div className="flex flex-row gap-[10px] items-start ">
              <p className="text-[12px] text-[#FFD100] font-[AzoSansR]">01</p>{" "}
              <p className="text-[14px] text-white flex">
                Celebrity, Creator and Influencer partnerships
              </p>
            </div>
            <div className="flex flex-row gap-[10px] items-center ">
              <p className="text-[12px] text-[#FFD100] font-[AzoSansB]">02</p>{" "}
              <p className="text-[14px] text-white">
                Expansion of creator communities on our platform
              </p>
            </div>
            <div className="flex flex-row gap-[10px] items-center ">
              <p className="text-[12px] text-[#FFD100] font-[AzoSansB]">03</p>{" "}
              <p className="text-[14px] text-white">
                More Marketing and promotion
              </p>
            </div>
          </div>

          {/* sec 4 */}
          <div className="flex flex-col max-w-[360px] opacity-0" ref={secRef4}>
            <SectionTag
              label="Q4"
              color="#E20613"
              outterLabel="2021"
              shadowClass="reddropshadow"
            />
            <br />
            <br />
            <div className="flex flex-row gap-[10px] items-center ">
              <p className="text-[12px] text-[#E20613] font-[AzoSansR]">01</p>{" "}
              <p className="text-[14px] text-white">Mainstream partnerships</p>
            </div>
            <div className="flex flex-row gap-[10px] items-center ">
              <p className="text-[12px] text-[#E20613] font-[AzoSansB]">02</p>{" "}
              <p className="text-[14px] text-white">
                500 active creator communities
              </p>
            </div>
            <div className="flex flex-row gap-[10px] items-center ">
              <p className="text-[12px] text-[#E20613] font-[AzoSansB]">03</p>{" "}
              <p className="text-[14px] text-white">
                2Million active community members
              </p>
            </div>
            <div className="flex flex-row gap-[10px] items-center ">
              <p className="text-[12px] text-[#E20613] font-[AzoSansB]">04</p>{" "}
              <p className="text-[14px] text-white">
                More Marketing and promotion
              </p>
            </div>
          </div>
        </div>

        {/* tokner is coming */}
        <div className="w-full min-h-[100vh] flex flex-row flex-wrap-reverse mt-[50px] px-[5vw]">
          <div className="flex flex-col lg:flex-[50]">
            <div
              className="flex flex-row items-center gap-[10px]"
              ref={textsHeadRef}
            >
              <strong className="text-[48px] text-white flex flex-row flex-wrap gap-[10px]">
                <span className="flex flex-row gap-[10px]">
                  {" "}
                  <img src="/assets/fav.svg" alt="" />
                  Tokner{" "}
                </span>{" "}
                is coming!
              </strong>
            </div>
            <br />
            <p
              className="text-[whitesmoke] text-[16px] max-w-[600px] opacity-0 "
              ref={textsRef}
            >
              Cryptocurrency adoption is at less than 1% of the global world
              population with some countries and entities actively fighting
              against its mass adoption and the smartest developers and nerds
              holding the fort.
            </p>
            <br />
            <p
              className="text-[whitesmoke] text-[16px] max-w-[600px] opacity-0"
              ref={textsRef2}
            >
              Bitcoin was the first, and it has since grown to thousands of
              tokens launched all aiming to fix one problem or the other with
              some quite simply FOMOing the moment. Our goal is to bring mass
              adoption to the cryptocurrency space by dumbing it down. How far
              down? So down that even a celebrity can explain it in simple words
              to their followers and have them download an app, buy into the
              social currency of their favourite person and watch their
              investment as is with other crypto currency project.
            </p>
            <br />
            <p
              className="text-[whitesmoke] text-[16px] max-w-[600px] opacity-0"
              ref={textsRef3}
            >
              We are trying to do to this space what investment apps did for the
              "nonexistent retail investors". We are gamefying digital currency,
              bringing in popular faces instead of hard to understand projects
              to make it the norm and inadvertently being the "gateway drug" for
              a lot of people to finally give this space a real look.
            </p>
            <br />
            <p
              className="text-[whitesmoke] text-[16px] max-w-[600px] opacity-0"
              ref={textsRef4}
            >
              A new digital economy is coming. People would be just as powerful
              as countries and creators would be paid beyond the peanuts that
              conventional social media platforms can offer. There would be new
              markets and advertisers with little to offer would not find home
              there. Like Kanye said,
            </p>
            <br />
            <p
              className="text-[whitesmoke] text-[16px] max-w-[600px] gap-[10px] flex opacity-0"
              ref={textsRef5}
            >
              <span className="text-[#FFD100] text-[24px]">"</span>
              Personalities would become the new currency, and services would be
              built on top of them.
            </p>
            <br />
            <p
              className="text-[whitesmoke] text-[16px] max-w-[600px] opacity-0"
              ref={textsRef6}
            >
              Well, Kanye didn't exactly say that, but it sounds like something
              we hope he would say. Currency is digital, it has been that way
              for a while now, but this time there would be no dead presidents
              on the money, there would people like you on the money, and you
              would own it because it would make the most sense in the world.
            </p>
            <br />
            <button
              ref={gbtn}
              className="border-[2px] border-[#22A75D] opacity-0 w-[128px] h-[48px] rounded-[52px] bg-none text-[bold] text-[14px] text-white"
            >
              Read More
            </button>
          </div>
          <div
            ref={txtImgRef}
            className="flex flex-col min-h-[400px] w-full
           lg:flex-[50] bg-[url(/assets/handphone.svg)] bg-contain bg-no-repeat bg-center"
          ></div>
        </div>

        <div
          className="w-full min-h-[150vh] relative flex flex-row  bg-[url(/assets/theme_curve2.png)] flex flex-1 
        bg-no-repeat lg:bg-contain bg-cover bg-center justify-center px-4"
        >
          {/* <div
            className="w-full min-h-[200vh] absolute top-0"
          /> */}
          <b
            className="absolute top-[45vh] text-[48px] text-white"
            ref={presaleCard}
          >
            Presale Details
          </b>
          <div
            className="w-full min-h-[150vh] relative flex flex-row  flex flex-1 
        items-start lg:justify-center pt-[60vh]  overflow-scroll no-sb  gap-[30px]"
          >
            <div
              className="flex flex-col items-center justify-center h-[500px] min-w-[350px] rounded-[20px] bg-white"
              ref={presaleCard1}
            >
              <SectionTag label="01" color="#22A75D" />
              <br />
              <b className="text-[32px]">Phase One</b>
              <p className="text-[16px]">0/04/2021 - 16/04/2021</p>
              <br />
              <p className="text-[16px]">1 BNB = 100000 WNTR</p>
              <p className="text-[16px]">Soft cap: 5000 BNB</p>
              <p className="text-[16px]">Hard cap: 10000 BNB</p>
            </div>
            <div className="flex flex-col ">
              <br />
              <div
                className="flex flex-col items-center justify-center h-[500px] min-w-[350px] rounded-[20px] bg-white mb-14"
                ref={presaleCard2}
              >
                <SectionTag label="02" color="#2278D4" />
                <br />
                <b className="text-[32px]">Phase Two</b>
                <p className="text-[16px]">0/04/2021 - 16/04/2021</p>
                <br />
                <p className="text-[16px]">1 BNB = 100000 WNTR</p>
                <p className="text-[16px]">Soft cap: 5000 BNB</p>
                <p className="text-[16px]">Hard cap: 10000 BNB</p>
              </div>
            </div>
            <div
              className="flex flex-col items-center justify-center h-[500px] min-w-[350px] rounded-[20px] bg-white "
              ref={presaleCard3}
            >
              <SectionTag label="03" color="#FFD100" />
              <br />
              <b className="text-[32px]">Phase Three</b>
              <p className="text-[16px]">0/04/2021 - 16/04/2021</p>
              <br />
              <p className="text-[16px]">1 BNB = 100000 WNTR</p>
              <p className="text-[16px]">Soft cap: 5000 BNB</p>
              <p className="text-[16px]">Hard cap: 10000 BNB</p>
            </div>
          </div>
        </div>
        <div className="w-full min-h-[50vh] flex flex-col items-center justify-center mt-[20vh]  px-[20px]">
          <b className="text-white text-[36px]">How to buy</b>
          <br />
          <div className="w-full min-h-[50vh] flex lg:flex-row flex-col items-center justify-center lg:px-[10vw] gap-[20px]">
            <TiltCard>
              <p className="absolute left-[20px] top-[20px] text-[grey] text-[12px]">
                01
              </p>
              <p className="max-w-[262px] text-[16px] text-center text-white">
                First Connect your Metamask or TrustWallet to the "Connect
                Wallet" on the Homepage.
              </p>
            </TiltCard>
            <TiltCard classNames="lg:mt-[50px]">
              <p className="absolute left-[20px] top-[20px] text-[grey] text-[12px]">
                02
              </p>
              <p className="max-w-[262px] text-[16px] text-center text-white">
                Then send minimum of 0.1 BNB or maximum of 10 BNB to the Presale
                wallet
              </p>
            </TiltCard>
            <TiltCard>
              <p className="absolute left-[20px] top-[20px] text-[grey] text-[12px]">
                03
              </p>
              <p className="max-w-[262px] text-[16px] text-center text-white">
                Then after you will received your $WNTR to your address within
                24hours.
              </p>{" "}
            </TiltCard>
          </div>
        </div>
        <footer className="w-full h-[50vh] relative mt-[30vh] flex flex-col justify-end">
          <div className="w-full h-[200vh] bg-[url(/assets/footerblur.svg)] bg-contain bg-bottom bg-no-repeat absolute bottom-0 right-0 z-[-1000]"></div>
          <div className="flex flex-row gap-[30px] items-center justify-center mt-[10vh] flex-wrap px-[20px]">
            <p className="underline text-white text-[16px] uppercase ">
              Our team
            </p>
            <FaSlash color="white" size={10} />
            <p className="underline text-white text-[16px] uppercase ">
              Tokens
            </p>
            <FaSlash color="white" size={10} />
            <p className="underline text-white text-[16px] uppercase  ">
              Connect wallet
            </p>
            <FaSlash color="white" size={10} />
            <p className="underline text-white text-[16px] uppercase ">
              Lightpaper
            </p>
          </div>
          <br />
          <div className="flex flex-row items-center justify-between px-[10vw] flex-wrap min-h-[200px]">
            <div className="flex flex-1 min-w-[200px]">

            <img
              src="/assets/logo_colored_sign_black_text.svg"
              alt=""
              width={187.06}
              height={30}
              />
              </div>

            <div className="flex flex-row gap-[10px]  justify-center items-center flex-1">
              <div className="hover:scale-[1.2] scale-[1] transition-[2s] cursor-[pointer] hover:mt-[-10px] w-[50px] h-[50px] bg-[url(/assets/icons/twitter.svg)] bg-center bg-contain" />
              <div className="hover:scale-[1.2] scale-[1] transition-[2s] cursor-[pointer] hover:mt-[-10px] w-[50px] h-[50px] bg-[url(/assets/icons/telegram.svg)] bg-center bg-contain" />
              <div className="hover:scale-[1.2] scale-[1] transition-[2s] cursor-[pointer] hover:mt-[-10px] w-[50px] h-[50px] bg-[url(/assets/icons/ig.svg)] bg-center bg-contain" />
              <div className="hover:scale-[1.2] scale-[1] transition-[2s] cursor-[pointer] hover:mt-[-10px] w-[50px] h-[50px] bg-[url(/assets/icons/medium.svg)] bg-center bg-contain" />
              <div className="hover:scale-[1.2] scale-[1] transition-[2s] cursor-[pointer] hover:mt-[-10px] w-[50px] h-[50px] bg-[url(/assets/icons/reddit.svg)] bg-center bg-contain" />
            </div>

            <div className="flex flex-col items-end flex-1 ">
              <b className="text-[14px] text-white">
                © 2024 Tokners. All rights reserved.
              </b>
              <div className="w-[148px] h-[22px] bg-[url(/assets/icons/credit.svg)] bg-center bg-contain" />
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default HomePage;
