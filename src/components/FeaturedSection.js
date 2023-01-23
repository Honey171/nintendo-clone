import React, { useRef, useState, useEffect } from 'react';
import {
  featureCarouselImgOne,
  featureCarouselImgTwo,
  featureCarouselImgThree,
  featureCarouselImgFour,
  featureCarouselImgFive,
  featureCarouselImgSix,
  featureCarouselImgSeven,
  featureCarouselImgEight,
  featureCarouselImgNine,
  featureCarouselImgTen,
  featureCarouselImgEleven,
  featureCarouselImgTwelve,
  featureCarouselImgThirteen,
  featureCarouselImgFourteen,
  featureCarouselImgFifteen,
} from '../assets/imageLinks';
import { arrowLeft, arrowRight } from '../assets/imageLinks';

function FeaturedSection() {
  const ref = useRef(null);
  const [carouselWrapper, setCarouselWrapper] = useState();
  const [carouselEnd, setCarouselEnd] = useState(false);
  const [carouselStart, setCarouselStart] = useState(false);
  const [arrows, setArrows] = useState(false);
  const [currentPos, setCurrentPos] = useState(0);

  useEffect(() => {
    const carousel = ref.current;
    setCarouselWrapper(carousel);
    carousel.scrollLeft = currentPos * carousel.clientWidth;
    if (
      Math.trunc(carousel.scrollWidth / carousel.clientWidth) === currentPos
    ) {
      setCarouselEnd(true);
    } else {
      setCarouselEnd(false);
    }
    if (currentPos === 0) {
      setCarouselStart(true);
    } else {
      setCarouselStart(false);
    }
  }, [currentPos]);

  useEffect(() => {
    const refChildren = document.querySelectorAll('.featureModal');
    refChildren.forEach((child) => {
      child.addEventListener('mouseover', () => {
        child.children[0].classList.add('featureModalAnimation');
      });
      child.addEventListener('mouseout', () => {
        child.children[0].classList.remove('featureModalAnimation');
      });
    });
  }, []);

  const nextItem = () => {
    setCurrentPos(
      (currentPos) => (currentPos + 1) % carouselWrapper.childNodes.length,
    );
  };

  const prevItem = () => {
    setCurrentPos(
      (currentPos) =>
        (currentPos - 1 + carouselWrapper.childNodes.length) %
        carouselWrapper.childNodes.length,
    );
  };

  return (
    <section className="shadow-xl pb-20">
      <p className="xl:pl-60 pl-6 text-[#484848] text-3xl font-bold">
        Featured
      </p>
      <div
        className="carouselWrapper overflow-x-scroll scroll-smooth flex gap-[3.2rem] w-full px-[2rem] z-0 pt-6 scrollbar-hide"
        ref={ref}
        onMouseEnter={() => setArrows(true)}
        onMouseLeave={() => setArrows(false)}
      >
        <div className="min-w-[264px] min-h-[285px] border border-gray-300 flex flex-col justify-between z-0 relative rounded-sm hover:text-[#e60012] text-[#484848] cursor-pointer featureModal">
          <img
            src={featureCarouselImgOne}
            alt=""
            className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
          />
          <p className="px-4 pb-10 font-extrabold ">
            Ends 1/15 at 11:59 pm. PT
          </p>
          <div className="flex space-x-2 items-center pb-2 px-4">
            <div className="bg-[#e60012] w-[2px] h-[16px]"></div>
            <p className="text-[#484848] text-sm">Nintendo switch</p>
          </div>
        </div>
        <div className="min-w-[264px] min-h-[285px] border border-gray-300 flex flex-col justify-between z-0 relative rounded-sm hover:text-[#e60012] text-[#484848] cursor-pointer featureModal">
          <img
            src={featureCarouselImgTwo}
            alt=""
            className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
          />
          <p className="px-4 pb-5 font-extrabold">
            Pokémon Scarlet and Pokémon Violet—Learn more
          </p>
          <div className="flex space-x-2 items-center pb-2 px-4">
            <div className="bg-[#e60012] w-[2px] h-[16px]"></div>
            <p className="text-[#484848] text-sm">Nintendo switch</p>
          </div>
        </div>
        <div className="min-w-[264px] min-h-[285px] rounded-sm border border-gray-300 flex flex-col justify-between z-0 relative hover:text-[#e60012] text-[#484848] cursor-pointer featureModal">
          <img
            src={featureCarouselImgThree}
            alt=""
            className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
          />
          <p className="px-4 pb-10 font-extrabold">Splatoon 3-Available Now</p>
          <div className="flex space-x-2 items-center pb-2 px-4">
            <div className="bg-[#e60012] w-[2px] h-[16px]"></div>
            <p className="text-[#484848] text-sm">Nintendo switch</p>
          </div>
        </div>
        <div className="min-w-[264px] min-h-[285px] rounded-sm border border-gray-300 flex flex-col justify-between z-0 relative hover:text-[#e60012] text-[#484848] cursor-pointer featureModal">
          <img
            src={featureCarouselImgFour}
            alt=""
            className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
          />
          <p className="px-4 pb-5 font-extrabold">
            Mario Kart 8 Deluxe DLC Wave 3—Available now
          </p>
          <div className="flex space-x-2 items-center pb-2 px-4">
            <div className="bg-[#e60012] w-[2px] h-[16px]"></div>
            <p className="text-[#484848] text-sm">Nintendo switch</p>
          </div>
        </div>
        <div className="min-w-[264px] min-h-[285px] rounded-sm border border-gray-300 flex flex-col justify-between z-0 relative hover:text-[#e60012] text-[#484848] cursor-pointer featureModal">
          <img
            src={featureCarouselImgFive}
            alt=""
            className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
          />
          <p className="px-4 pb-5 font-extrabold">
            Kirby's Return to Dream Land Deluxe–Pre-order
          </p>
          <div className="flex space-x-2 items-center pb-2 px-4">
            <div className="bg-[#e60012] w-[2px] h-[16px]"></div>
            <p className="text-[#484848] text-sm">Nintendo switch</p>
          </div>
        </div>
        <div className="min-w-[264px] min-h-[285px] rounded-sm border border-gray-300 flex flex-col justify-between z-0 relative hover:text-[#e60012] text-[#484848] cursor-pointer featureModal">
          <img
            src={featureCarouselImgSix}
            alt=""
            className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
          />
          <p className="px-4 pb-5 font-extrabold">
            Mario+Rabbids Sparks of Hope—Available now
          </p>
          <div className="flex space-x-2 items-center pb-2 px-4">
            <div className="bg-[#e60012] w-[2px] h-[16px]"></div>
            <p className="text-[#484848] text-sm">Nintendo switch</p>
          </div>
        </div>
        <div className="min-w-[264px] min-h-[285px] rounded-sm border border-gray-300 flex flex-col justify-between z-0 relative hover:text-[#e60012] text-[#484848] cursor-pointer featureModal">
          <img
            src={featureCarouselImgSeven}
            alt=""
            className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
          />
          <p className="px-4 pb-10 font-extrabold">Bayonetta 3-Available now</p>
          <div className="flex space-x-2 items-center pb-2 px-4">
            <div className="bg-[#e60012] w-[2px] h-[16px]"></div>
            <p className="text-[#484848] text-sm">Nintendo switch</p>
          </div>
        </div>
        <div className="min-w-[264px] min-h-[285px] rounded-sm border border-gray-300 flex flex-col justify-between z-0 relative hover:text-[#e60012] text-[#484848] cursor-pointer featureModal">
          <img
            src={featureCarouselImgEight}
            alt=""
            className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
          />
          <p className="px-4 pb-5 font-extrabold">
            Switch Persona 3 Portable & Persona 4 Golden Bundle
          </p>
          <div className="flex space-x-2 items-center pb-2 px-4">
            <div className="bg-[#e60012] w-[2px] h-[16px]"></div>
            <p className="text-[#484848] text-sm">Nintendo switch</p>
          </div>
        </div>
        <div className="min-w-[264px] min-h-[285px] rounded-sm border border-gray-300 flex flex-col justify-between z-0 relative hover:text-[#e60012] text-[#484848] cursor-pointer featureModal">
          <img
            src={featureCarouselImgNine}
            alt=""
            className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
          />
          <p className="px-4 pb-5 font-extrabold">
            Crisis Core –Final Fantasy VII– Reunion
          </p>
          <div className="flex space-x-2 items-center pb-2 px-4">
            <div className="bg-[#e60012] w-[2px] h-[16px]"></div>
            <p className="text-[#484848] text-sm">Nintendo switch</p>
          </div>
        </div>
        <div className="min-w-[264px] min-h-[285px] rounded-sm border border-gray-300 flex flex-col justify-between z-0 relative hover:text-[#e60012] text-[#484848] cursor-pointer featureModal">
          <img
            src={featureCarouselImgTen}
            alt=""
            className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
          />
          <p className="px-4 pb-10 font-extrabold">
            Fortnite—Chapter 4 Season 1
          </p>
          <div className="flex space-x-2 items-center pb-2 px-4">
            <div className="bg-[#e60012] w-[2px] h-[16px]"></div>
            <p className="text-[#484848] text-sm">Nintendo switch</p>
          </div>
        </div>
        <div className="min-w-[264px] min-h-[285px] rounded-sm border border-gray-300 flex flex-col justify-between z-0 relative hover:text-[#e60012] text-[#484848] cursor-pointer featureModal">
          <img
            src={featureCarouselImgEleven}
            alt=""
            className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
          />
          <p className="px-4 pb-5 font-extrabold">
            Dragon Quest Treasures—Available now
          </p>
          <div className="flex space-x-2 items-center pb-2 px-4">
            <div className="bg-[#e60012] w-[2px] h-[16px]"></div>
            <p className="text-[#484848] text-sm">Nintendo switch</p>
          </div>
        </div>
        <div className="min-w-[264px] min-h-[285px] rounded-sm border border-gray-300 flex flex-col justify-between z-0 relative hover:text-[#e60012] text-[#484848] cursor-pointer featureModal">
          <img
            src={featureCarouselImgTwelve}
            alt=""
            className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
          />
          <p className="px-4 pb-5 font-extrabold">
            Xenoblade Chronicles 3—Available now
          </p>
          <div className="flex space-x-2 items-center pb-2 px-4">
            <div className="bg-[#e60012] w-[2px] h-[16px]"></div>
            <p className="text-[#484848] text-sm">Nintendo switch</p>
          </div>
        </div>
        <div className="min-w-[264px] min-h-[285px] rounded-sm border border-gray-300 flex flex-col justify-between z-0 relative hover:text-[#e60012] text-[#484848] cursor-pointer featureModal">
          <img
            src={featureCarouselImgThirteen}
            alt=""
            className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
          />
          <p className="px-4 pb-5 font-extrabold">
            Just Dance 2023 Edition—Available now
          </p>
          <div className="flex space-x-2 items-center pb-2 px-4">
            <div className="bg-[#e60012] w-[2px] h-[16px]"></div>
            <p className="text-[#484848] text-sm">Nintendo switch</p>
          </div>
        </div>
        <div className="min-w-[264px] min-h-[285px] rounded-sm border border-gray-300 flex flex-col justify-between z-0 relative hover:text-[#e60012] text-[#484848] cursor-pointer featureModal">
          <img
            src={featureCarouselImgFourteen}
            alt=""
            className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
          />
          <p className="px-4 pb-10 font-extrabold">Season 3—Sunken Treasures</p>
          <div className="flex space-x-2 items-center pb-2 px-4">
            <div className="bg-[#e60012] w-[2px] h-[16px]"></div>
            <p className="text-[#484848] text-sm">Nintendo switch</p>
          </div>
        </div>
        <div className="min-w-[264px] min-h-[285px] rounded-sm border border-gray-300 flex flex-col justify-between z-0 relative hover:text-[#e60012] text-[#484848] cursor-pointer featureModal">
          <img
            src={featureCarouselImgFifteen}
            alt=""
            className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
          />
          <p className="px-4 pb-5 font-extrabold">
            Nintendo Switch Online + Expansion Pack
          </p>
          <div className="flex space-x-2 items-center pb-2 px-4">
            <div className="bg-[#e60012] w-[2px] h-[16px]"></div>
            <p className="text-[#484848] text-sm">Nintendo switch</p>
          </div>
        </div>
        {!carouselEnd && (
          <div
            className={`absolute flex items-center justify-center right-0 w-[75px] h-[330px] ${
              arrows ? 'opacity-70' : 'opacity-0'
            } bg-black arrowAnimationTransition z-20 -translate-y-5 rounded-tl-md rounded-bl-md cursor-pointer`}
            onClick={nextItem}
          >
            {arrowRight}
          </div>
        )}
        {!carouselStart && (
          <div
            className={`absolute flex items-center justify-center left-0 w-[75px] h-[330px] ${
              arrows ? 'opacity-70' : 'opacity-0'
            } bg-black arrowAnimationTransition z-20 -translate-y-5 rounded-tr-md rounded-br-md cursor-pointer`}
            onClick={prevItem}
          >
            {arrowLeft}
          </div>
        )}
      </div>
    </section>
  );
}

export default FeaturedSection;
