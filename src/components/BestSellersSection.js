import React, { useRef, useState, useEffect } from 'react';
import {
  bestSellerImageOne,
  bestSellerImageTwo,
  bestSellerImageThree,
  bestSellerImageFour,
  bestSellerImageFive,
  bestSellerImageSix,
  bestSellerImageSeven,
  bestSellerImageEight,
  bestSellerImageNine,
  bestSellerImageTen,
  bestSellerImageEleven,
  bestSellerImageTwelve,
  bestSellerImageThirteen,
  bestSellerImageFourteen,
  bestSellerImageFifteen,
  bestSellerImageSixteen,
  arrowLeft,
  arrowRight,
} from '../assets/imageLinks';
import { AiOutlineHeart } from 'react-icons/ai';

function BestSellersSection() {
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
    <section>
      <div className="shadow-xl flex items-center justify-center flex-col pb-20">
        <div className="flex flex-col items-start sm:flex-row sm:items-center gap-3 w-[21rem] sm:w-[38rem] md:w-[44rem] lg:w-[59rem] xl:w-[74rem] mb-7">
          <p className="text-[#484848] text-3xl font-bold pr-4 sm:border-r sm:border-[#dadada] h-[35px]">
            Digital best sellers
          </p>
          <p className="underline text-[#e60012] underline-offset-4 decoration-2 font-extrabold cursor-pointer">
            See full list
          </p>
        </div>
        <div
          className="carouselWrapper overflow-x-scroll scroll-smooth flex gap-[2.3rem] w-[21rem] sm:w-[38rem] md:w-[44rem] lg:w-[59rem] xl:w-[74rem] z-0 pt-6 scrollbar-hide"
          ref={ref}
          onMouseEnter={() => setArrows(true)}
          onMouseLeave={() => setArrows(false)}
        >
          <div className="sm:min-w-[264px] min-h-[320px] min-w-[220px] border border-gray-300 flex flex-col justify-between z-0 relative rounded-sm hover:text-[#e60012] text-[#484848] cursor-pointer featureModal">
            <img
              src={bestSellerImageOne}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold">Hollow Knight</p>
              <p className="text-xs text-[#484848]">06/12/2018</p>
            </div>
            <div className="flex flex-col px-4 space-y-3">
              <p className="text-[#484848] font-extrabold">$15.00</p>
              <div className="flex justify-between">
                <div className="flex space-x-2 items-center pb-5">
                  <div className="bg-[#e60012] w-[2px] h-[16px]"></div>
                  <p className="text-[#484848] text-sm">Nintendo switch</p>
                </div>
                <AiOutlineHeart className="self-start text-[#e60012] text-2xl hover:text-3xl transition-all" />
              </div>
            </div>
          </div>
          <div className="sm:min-w-[264px] min-h-[320px] min-w-[220px] border border-gray-300 flex flex-col justify-between z-0 relative rounded-sm hover:text-[#e60012] text-[#484848] cursor-pointer featureModal">
            <img
              src={bestSellerImageTwo}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold">Stardew Valley</p>
              <p className="text-xs text-[#484848]">10/05/2017</p>
            </div>
            <div className="flex flex-col px-4 space-y-3">
              <p className="text-[#484848] font-extrabold">$14.99</p>
              <div className="flex justify-between">
                <div className="flex space-x-2 items-center pb-5">
                  <div className="bg-[#e60012] w-[2px] h-[16px]"></div>
                  <p className="text-[#484848] text-sm">Nintendo switch</p>
                </div>
                <AiOutlineHeart className="self-start text-[#e60012] text-2xl hover:text-3xl transition-all" />
              </div>
            </div>
          </div>
          <div className="sm:min-w-[264px] min-h-[320px] min-w-[220px] border border-gray-300 flex flex-col justify-between z-0 relative rounded-sm hover:text-[#e60012] text-[#484848] cursor-pointer featureModal">
            <img
              src={bestSellerImageThree}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold">Hades</p>
              <p className="text-xs text-[#484848]">09/17/2020</p>
            </div>
            <div className="flex flex-col px-4 space-y-3">
              <p className="text-[#484848] font-extrabold">$24.99</p>
              <div className="flex justify-between">
                <div className="flex space-x-2 items-center pb-5">
                  <div className="bg-[#e60012] w-[2px] h-[16px]"></div>
                  <p className="text-[#484848] text-sm">Nintendo switch</p>
                </div>
                <AiOutlineHeart className="self-start text-[#e60012] text-2xl hover:text-3xl transition-all" />
              </div>
            </div>
          </div>
          <div className="sm:min-w-[264px] min-h-[320px] min-w-[220px] border border-gray-300 flex flex-col justify-between z-0 relative rounded-sm hover:text-[#e60012] text-[#484848] cursor-pointer featureModal">
            <img
              src={bestSellerImageFour}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold">Pool Pro GOLD</p>
              <p className="text-xs text-[#484848]">08/13/2020</p>
            </div>
            <div className="flex flex-col px-4 space-y-3">
              <p className="text-[#484848] font-extrabold">$9.99</p>
              <div className="flex justify-between">
                <div className="flex space-x-2 items-center pb-5">
                  <div className="bg-[#e60012] w-[2px] h-[16px]"></div>
                  <p className="text-[#484848] text-sm">Nintendo switch</p>
                </div>
                <AiOutlineHeart className="self-start text-[#e60012] text-2xl hover:text-3xl transition-all" />
              </div>
            </div>
          </div>
          <div className="sm:min-w-[264px] min-h-[320px] min-w-[220px] border border-gray-300 flex flex-col justify-between z-0 relative rounded-sm hover:text-[#e60012] text-[#484848] cursor-pointer featureModal">
            <img
              src={bestSellerImageFive}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold">Nova-111</p>
              <p className="text-xs text-[#484848]">01/13/2022</p>
            </div>
            <div className="flex flex-col px-4 space-y-3">
              <p className="text-[#484848] font-extrabold">$9.99</p>
              <div className="flex justify-between">
                <div className="flex space-x-2 items-center pb-5">
                  <div className="bg-[#e60012] w-[2px] h-[16px]"></div>
                  <p className="text-[#484848] text-sm">Nintendo switch</p>
                </div>
                <AiOutlineHeart className="self-start text-[#e60012] text-2xl hover:text-3xl transition-all" />
              </div>
            </div>
          </div>
          <div className="sm:min-w-[264px] min-h-[320px] min-w-[220px] border border-gray-300 flex flex-col justify-between z-0 relative rounded-sm hover:text-[#e60012] text-[#484848] cursor-pointer featureModal">
            <img
              src={bestSellerImageSix}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold">Creepy Tale 2</p>
              <p className="text-xs text-[#484848]">10/07/2021</p>
            </div>
            <div className="flex flex-col px-4 space-y-3">
              <p className="text-[#484848] font-extrabold">$14.99</p>
              <div className="flex justify-between">
                <div className="flex space-x-2 items-center pb-5">
                  <div className="bg-[#e60012] w-[2px] h-[16px]"></div>
                  <p className="text-[#484848] text-sm">Nintendo switch</p>
                </div>
                <AiOutlineHeart className="self-start text-[#e60012] text-2xl hover:text-3xl transition-all" />
              </div>
            </div>
          </div>
          <div className="sm:min-w-[264px] min-h-[320px] min-w-[220px] border border-gray-300 flex flex-col justify-between z-0 relative rounded-sm hover:text-[#e60012] text-[#484848] cursor-pointer featureModal">
            <img
              src={bestSellerImageSeven}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold">Golden Force</p>
              <p className="text-xs text-[#484848]">01/28/2021</p>
            </div>
            <div className="flex flex-col px-4 space-y-3">
              <p className="text-[#484848] font-extrabold">$19.99</p>
              <div className="flex justify-between">
                <div className="flex space-x-2 items-center pb-5">
                  <div className="bg-[#e60012] w-[2px] h-[16px]"></div>
                  <p className="text-[#484848] text-sm">Nintendo switch</p>
                </div>
                <AiOutlineHeart className="self-start text-[#e60012] text-2xl hover:text-3xl transition-all" />
              </div>
            </div>
          </div>
          <div className="sm:min-w-[264px] min-h-[320px] min-w-[220px] border border-gray-300 flex flex-col justify-between z-0 relative rounded-sm hover:text-[#e60012] text-[#484848] cursor-pointer featureModal">
            <img
              src={bestSellerImageEight}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold">Pokémon™ Violet</p>
              <p className="text-xs text-[#484848]">11/18/2022</p>
            </div>
            <div className="flex flex-col px-4 space-y-3">
              <p className="text-[#484848] font-extrabold">$59.99</p>
              <div className="flex justify-between">
                <div className="flex space-x-2 items-center pb-5">
                  <div className="bg-[#e60012] w-[2px] h-[16px]"></div>
                  <p className="text-[#484848] text-sm">Nintendo switch</p>
                </div>
                <AiOutlineHeart className="self-start text-[#e60012] text-2xl hover:text-3xl transition-all" />
              </div>
            </div>
          </div>
          <div className="sm:min-w-[264px] min-h-[320px] min-w-[220px] border border-gray-300 flex flex-col justify-between z-0 relative rounded-sm hover:text-[#e60012] text-[#484848] cursor-pointer featureModal">
            <img
              src={bestSellerImageNine}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold">Celeste</p>
              <p className="text-xs text-[#484848]">01/25/2018</p>
            </div>
            <div className="flex flex-col px-4 space-y-3">
              <p className="text-[#484848] font-extrabold">$19.99</p>
              <div className="flex justify-between">
                <div className="flex space-x-2 items-center pb-5">
                  <div className="bg-[#e60012] w-[2px] h-[16px]"></div>
                  <p className="text-[#484848] text-sm">Nintendo switch</p>
                </div>
                <AiOutlineHeart className="self-start text-[#e60012] text-2xl hover:text-3xl transition-all" />
              </div>
            </div>
          </div>
          <div className="sm:min-w-[264px] min-h-[320px] min-w-[220px] border border-gray-300 flex flex-col justify-between z-0 relative rounded-sm hover:text-[#e60012] text-[#484848] cursor-pointer featureModal">
            <img
              src={bestSellerImageTen}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold">Pokémon™ Scarlet</p>
              <p className="text-xs text-[#484848]">11/18/2022</p>
            </div>
            <div className="flex flex-col px-4 space-y-3">
              <p className="text-[#484848] font-extrabold">$59.99</p>
              <div className="flex justify-between">
                <div className="flex space-x-2 items-center pb-5">
                  <div className="bg-[#e60012] w-[2px] h-[16px]"></div>
                  <p className="text-[#484848] text-sm">Nintendo switch</p>
                </div>
                <AiOutlineHeart className="self-start text-[#e60012] text-2xl hover:text-3xl transition-all" />
              </div>
            </div>
          </div>
          <div className="sm:min-w-[264px] min-h-[320px] min-w-[220px] border border-gray-300 flex flex-col justify-between z-0 relative rounded-sm hover:text-[#e60012] text-[#484848] cursor-pointer featureModal">
            <img
              src={bestSellerImageEleven}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold">Untitled Goose Game</p>
              <p className="text-xs text-[#484848]">09/20/2019</p>
            </div>
            <div className="flex flex-col px-4 space-y-3">
              <p className="text-[#484848] font-extrabold">$19.99</p>
              <div className="flex justify-between">
                <div className="flex space-x-2 items-center pb-5">
                  <div className="bg-[#e60012] w-[2px] h-[16px]"></div>
                  <p className="text-[#484848] text-sm">Nintendo switch</p>
                </div>
                <AiOutlineHeart className="self-start text-[#e60012] text-2xl hover:text-3xl transition-all" />
              </div>
            </div>
          </div>
          <div className="sm:min-w-[264px] min-h-[320px] min-w-[220px] border border-gray-300 flex flex-col justify-between z-0 relative rounded-sm hover:text-[#e60012] text-[#484848] cursor-pointer featureModal">
            <img
              src={bestSellerImageTwelve}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold">Mario Kart™ 8 Deluxe</p>
              <p className="text-xs text-[#484848]">04/28/2017</p>
            </div>
            <div className="flex flex-col px-4 space-y-3">
              <p className="text-[#484848] font-extrabold">$59.99</p>
              <div className="flex justify-between">
                <div className="flex space-x-2 items-center pb-5">
                  <div className="bg-[#e60012] w-[2px] h-[16px]"></div>
                  <p className="text-[#484848] text-sm">Nintendo switch</p>
                </div>
                <AiOutlineHeart className="self-start text-[#e60012] text-2xl hover:text-3xl transition-all" />
              </div>
            </div>
          </div>
          <div className="sm:min-w-[264px] min-h-[320px] min-w-[220px] border border-gray-300 flex flex-col justify-between z-0 relative rounded-sm hover:text-[#e60012] text-[#484848] cursor-pointer featureModal">
            <img
              src={bestSellerImageThirteen}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold">Minecraft</p>
              <p className="text-xs text-[#484848]">06/20/2018</p>
            </div>
            <div className="flex flex-col px-4 space-y-3">
              <p className="text-[#484848] font-extrabold">$29.99</p>
              <div className="flex justify-between">
                <div className="flex space-x-2 items-center pb-5">
                  <div className="bg-[#e60012] w-[2px] h-[16px]"></div>
                  <p className="text-[#484848] text-sm">Nintendo switch</p>
                </div>
                <AiOutlineHeart className="self-start text-[#e60012] text-2xl hover:text-3xl transition-all" />
              </div>
            </div>
          </div>
          <div className="sm:min-w-[264px] min-h-[320px] min-w-[220px] border border-gray-300 flex flex-col justify-between z-0 relative rounded-sm hover:text-[#e60012] text-[#484848] cursor-pointer featureModal">
            <img
              src={bestSellerImageFourteen}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold pt-2 sm:pt-0">
                Ori and the Will of the Wisps
              </p>
              <p className="text-xs text-[#484848]">09/17/2020</p>
            </div>
            <div className="flex flex-col px-4 space-y-3">
              <p className="text-[#484848] font-extrabold">$29.99</p>
              <div className="flex justify-between">
                <div className="flex space-x-2 items-center pb-5">
                  <div className="bg-[#e60012] w-[2px] h-[16px]"></div>
                  <p className="text-[#484848] text-sm">Nintendo switch</p>
                </div>
                <AiOutlineHeart className="self-start text-[#e60012] text-2xl hover:text-3xl transition-all" />
              </div>
            </div>
          </div>
          <div className="sm:min-w-[264px] min-h-[320px] min-w-[220px] border border-gray-300 flex flex-col justify-between z-0 relative rounded-sm hover:text-[#e60012] text-[#484848] cursor-pointer featureModal">
            <img
              src={bestSellerImageFifteen}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold pt-2 sm:pt-0">
                Nintendo Switch™ Sports
              </p>
              <p className="text-xs text-[#484848]">04/29/2022</p>
            </div>
            <div className="flex flex-col px-4 space-y-3">
              <p className="text-[#484848] font-extrabold">$39.99</p>
              <div className="flex justify-between">
                <div className="flex space-x-2 items-center pb-5">
                  <div className="bg-[#e60012] w-[2px] h-[16px]"></div>
                  <p className="text-[#484848] text-sm">Nintendo switch</p>
                </div>
                <AiOutlineHeart className="self-start text-[#e60012] text-2xl hover:text-3xl transition-all" />
              </div>
            </div>
          </div>
          <div className="sm:min-w-[264px] min-h-[320px] min-w-[220px] border border-gray-300 flex flex-col justify-between z-0 relative rounded-sm hover:text-[#e60012] text-[#484848] cursor-pointer featureModal">
            <img
              src={bestSellerImageSixteen}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold pt-2 sm:pt-5">
                LEGO® Harry Potter™ Collection
              </p>
              <p className="text-xs text-[#484848]">10/30/2018</p>
            </div>
            <div className="text-[13px]">
              <span className="text-white font-semibold px-1 bg-[#e60012] rounded-md absolute bottom-[5.1rem] left-4">
                Sale ends: 2/5/2023 PT
              </span>
            </div>
            <div className="flex flex-col px-4 space-y-3">
              <div className="flex items-center space-x-2">
                <p className="text-[#484848] font-extrabold">$9.99</p>
                <p className="line-through text-xs text-[#484848]">$49.99</p>
                <div className="rounded bg-[#e60012] text-white text-xs px-1">
                  -80%
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex space-x-2 items-center pb-5">
                  <div className="bg-[#e60012] w-[2px] h-[16px]"></div>
                  <p className="text-[#484848] text-sm">Nintendo switch</p>
                </div>
                <AiOutlineHeart className="self-start text-[#e60012] text-2xl hover:text-3xl transition-all" />
              </div>
            </div>
          </div>
          <div className="h-[343px] min-w-[143px] rounded-md bg-[#e60012] text-white font-extrabold flex items-center justify-center cursor-pointer hover:opacity-75">
            See full list
          </div>
          <div className="absolute w-[21rem] sm:w-[38rem] md:w-[44rem] lg:w-[59rem] xl:w-[75rem]">
            {!carouselEnd && (
              <div
                className={`absolute flex items-center justify-center right-0 w-[65px] h-[100px] sm:h-[400px] opacity-50 hover:opacity-80 bg-black arrowAnimationTransition z-20 sm:-translate-y-10 translate-y-[50%] rounded-tr-md rounded-br-md cursor-pointer`}
                onClick={nextItem}
              >
                {arrowRight}
              </div>
            )}
            {!carouselStart && (
              <div
                className={`absolute flex items-center justify-center left-0 w-[65px] h-[100px] sm:h-[400px] opacity-50 hover:opacity-80 bg-black arrowAnimationTransition z-20 sm:-translate-y-10 translate-y-[50%] rounded-tr-md rounded-br-md cursor-pointer`}
                onClick={prevItem}
              >
                {arrowLeft}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestSellersSection;
