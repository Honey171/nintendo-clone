import React, { useRef, useState, useEffect } from 'react';
import {
  newReleasesImageOne,
  newReleasesImageTwo,
  newReleasesImageThree,
  newReleasesImageFour,
  newReleasesImageFive,
  newReleasesImageSix,
  newReleasesImageSeven,
  newReleasesImageEight,
  newReleasesImageNine,
  newReleasesImageTen,
  newReleasesImageEleven,
  newReleasesImageTwelve,
  newReleasesImageThirteen,
  newReleasesImageFourteen,
  newReleasesImageFifteen,
  newReleasesImageSixteen,
  newReleasesImageSeventeen,
  newReleasesImageEighteen,
  newReleasesImageNineteen,
  newReleasesImageTwenty,
  newReleasesImageTwentyOne,
  newReleasesImageTwentyTwo,
  newReleasesImageTwentyThree,
  newReleasesImageTwentyFour,
  arrowLeft,
  arrowRight,
} from '../assets/imageLinks';
import { AiOutlineHeart } from 'react-icons/ai';

function NewReleasesSection() {
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
      <div className="flex items-center justify-center flex-col pb-20">
        <div className="flex flex-col items-start sm:flex-row sm:items-center gap-3 w-[21rem] sm:w-[38rem] md:w-[44rem] lg:w-[59rem] xl:w-[74rem] mb-7">
          <p className="text-[#484848] text-3xl font-bold pr-4 sm:border-r sm:border-[#dadada] h-[35px]">
            Digital new releases
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
              src={newReleasesImageOne}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold pt-4">Sail Forth</p>
              <p className="text-xs text-[#484848]">12/21/2022</p>
            </div>
            <div className="text-[13px]">
              <span className="text-white font-semibold px-1 bg-[#e60012] rounded-md absolute bottom-[5.1rem] left-4">
                Sale ends: 1/18/2023 PT
              </span>
            </div>
            <div className="flex flex-col px-4 space-y-3">
              <div className="flex items-center space-x-2">
                <p className="text-[#484848] font-extrabold">$17.59</p>
                <p className="line-through text-xs text-[#484848]">$19.99</p>
                <div className="rounded bg-[#e60012] text-white text-xs px-1">
                  -12%
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
          <div className="sm:min-w-[264px] min-h-[320px] min-w-[220px] border border-gray-300 flex flex-col justify-between z-0 relative rounded-sm hover:text-[#e60012] text-[#484848] cursor-pointer featureModal">
            <img
              src={newReleasesImageTwo}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold">Sports Story</p>
              <p className="text-xs text-[#484848]">12/23/2022</p>
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
              src={newReleasesImageThree}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold">Melatonin</p>
              <p className="text-xs text-[#484848]">12/22/2022</p>
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
              src={newReleasesImageFour}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold">Hyper Gunsport</p>
              <p className="text-xs text-[#484848]">12/22/2022</p>
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
              src={newReleasesImageFive}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold">Sonority</p>
              <p className="text-xs text-[#484848]">12/21/2022</p>
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
              src={newReleasesImageSix}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold">The Captain</p>
              <p className="text-xs text-[#484848]">12/20/2022</p>
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
              src={newReleasesImageSeven}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold">The Punchuin</p>
              <p className="text-xs text-[#484848]">12/20/2022</p>
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
              src={newReleasesImageEight}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold">Floppy Knights</p>
              <p className="text-xs text-[#484848]">12/19/2022</p>
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
              src={newReleasesImageNine}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold pt-5">
                Mortal Shell: Complete Edition
              </p>
              <p className="text-xs text-[#484848]">12/19/2022</p>
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
              src={newReleasesImageTen}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold">River City Girls 2</p>
              <p className="text-xs text-[#484848]">12/15/2022</p>
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
              src={newReleasesImageEleven}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold">Aka</p>
              <p className="text-xs text-[#484848]">12/14/2022</p>
            </div>
            <div className="flex flex-col px-4 space-y-3">
              <p className="text-[#484848] font-extrabold">$12.99</p>
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
              src={newReleasesImageTwelve}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold pt-5">
                CRISIS CORE –FINAL FANTASY VII– REUNION
              </p>
              <p className="text-xs text-[#484848]">12/13/2022</p>
            </div>
            <div className="flex flex-col px-4 space-y-3">
              <p className="text-[#484848] font-extrabold">$49.99</p>
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
              src={newReleasesImageThirteen}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold pt-5">DRAGON QUEST TREASURES</p>
              <p className="text-xs text-[#484848]">12/09/2022</p>
            </div>
            <div className="text-[13px]">
              <span className="text-white font-semibold px-1 bg-[#e60012] rounded-md absolute bottom-[5.1rem] left-4">
                Sale ends: 1/19/2023 PT
              </span>
            </div>
            <div className="flex flex-col px-4 space-y-3">
              <div className="flex items-center space-x-2">
                <p className="text-[#484848] font-extrabold">$49.79</p>
                <p className="line-through text-xs text-[#484848]">$59.99</p>
                <div className="rounded bg-[#e60012] text-white text-xs px-1">
                  -17%
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
          <div className="sm:min-w-[264px] min-h-[320px] min-w-[220px] border border-gray-300 flex flex-col justify-between z-0 relative rounded-sm hover:text-[#e60012] text-[#484848] cursor-pointer featureModal">
            <img
              src={newReleasesImageFourteen}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold">Hello neighbor 2</p>
              <p className="text-xs text-[#484848]">12/06/2022</p>
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
              src={newReleasesImageFifteen}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold">Inscryption</p>
              <p className="text-xs text-[#484848]">12/01/2022</p>
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
              src={newReleasesImageSixteen}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold pt-4">Just Dance®</p>
              <p className="text-xs text-[#484848]">11/22/2022</p>
            </div>
            <div className="text-[12px]">
              <span className="text-white font-semibold px-1 bg-[#6f00cb] rounded-md absolute bottom-[5.1rem] left-4">
                Free Download
              </span>
            </div>
            <div className="flex flex-col px-4 space-y-3">
              <p className="text-[#484848] font-extrabold">Free</p>
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
              src={newReleasesImageSeventeen}
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
              src={newReleasesImageEighteen}
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
              src={newReleasesImageNineteen}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold hidden sm:pt-5 sm:block">
                Pokémon™ Scarlet and Pokémon™ Violet Double...
              </p>
              <p className="font-extrabold pt-5 block sm:hidden">
                Pokémon™ Scarlet and Pokémon™ Violet
              </p>
              <p className="text-xs text-[#484848]">11/18/2022</p>
            </div>
            <div className="flex flex-col px-4 space-y-3">
              <p className="text-[#484848] font-extrabold">$119.99</p>
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
              src={newReleasesImageTwenty}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold">Tactis Ogre: Reborn</p>
              <p className="text-xs text-[#484848]">11/11/2022</p>
            </div>
            <div className="flex flex-col px-4 space-y-3">
              <p className="text-[#484848] font-extrabold">$49.99</p>
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
              src={newReleasesImageTwentyOne}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold">Rogue Legacy 2</p>
              <p className="text-xs text-[#484848]">11/09/2022</p>
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
              src={newReleasesImageTwentyTwo}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold">A Little to the left</p>
              <p className="text-xs text-[#484848]">11/09/2022</p>
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
              src={newReleasesImageTwentyThree}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold">Once Upon a Jester</p>
              <p className="text-xs text-[#484848]">11/09/2022</p>
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
              src={newReleasesImageTwentyFour}
              alt=""
              className="z-10 featureModalTransition rounded-tr-sm rounded-tl-sm"
            />
            <div className="flex flex-col pb-10 px-4 space-y-1">
              <p className="font-extrabold pt-2">Sonic Frontiers</p>
              <p className="text-xs text-[#484848]">11/08/2022</p>
            </div>
            <div className="text-[12px]">
              <span className="text-white font-semibold px-2 bg-[#0061fb] rounded-md absolute bottom-[5.1rem] left-4">
                Free demo
              </span>
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

export default NewReleasesSection;
