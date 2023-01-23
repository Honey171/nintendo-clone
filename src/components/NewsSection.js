import React from 'react';
import {
  newsTopImageOne,
  newsTopImageTwo,
  newsBottomImageOne,
  newsBottomImageTwo,
  newsBottomImageThree,
  newsBottomImageFour,
  newsBtnIcon,
} from '../assets/imageLinks';

function NewsSection() {
  return (
    <section>
      <div className="flex items-center justify-center pb-14 shadow-xl">
        <div className="px-5 md:px-10">
          <p className="text-[#484848] text-3xl font-bold pb-7">News</p>
          <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 text-[#484848]">
            <div className="space-y-3 hover:text-[#e60012] cursor-pointer newsModal">
              <img
                src={newsTopImageOne}
                alt=""
                className="w-full lg:w-[580px] lg:h-[316px] rounded-sm"
              />
              <p className="font-semibold text-[#484848]">01/12/23</p>
              <p className="font-extrabold text-[1.05rem]">
                In-game rewards: Week of January 12, 2023
              </p>
              <p className="lg:max-w-[580px] pt-10 text-[1.03rem] text-[#484848]">
                Here's what's coming to the item section this week. This
                collection will be available from 9:00 p.m. PT on January 11,
                2023, through 9:00 p.m. PT on...
              </p>
              <p className="text-[#e60012] font-extrabold underline underline-offset-8 decoration-2">
                Read more
              </p>
            </div>
            <div className="space-y-3 hover:text-[#e60012] cursor-pointer newsModal">
              <img
                src={newsTopImageTwo}
                alt=""
                className="w-full lg:w-[580px] lg:h-[316px] rounded-sm"
              />
              <p className="font-semibold text-[#484848]">01/11/23</p>
              <p className="font-extrabold text-[1.05rem]">
                Wii Rainbow Road blasts off in the Space Tour
              </p>
              <p className="lg:max-w-[560px] pt-9 text-[1.03rem] text-[#484848]">
                Three…two…one…liftoff! Launch into galactic kart-racing fun with
                the Space Tour, the latest limited-time event in the Mario Kart
                Tour game, happening...
              </p>
              <p className="text-[#e60012] font-extrabold underline underline-offset-8 decoration-2">
                Read more
              </p>
            </div>
          </div>
          <div className="flex pt-10 text-[#484848] flex-wrap md:flex-nowrap gap-[2rem] sm:gap-[3rem] md:gap-[2rem]">
            <div className="space-y-3 hover:text-[#e60012] cursor-pointer newsModal">
              <img
                src={newsBottomImageOne}
                alt=""
                className="rounded-sm w-[268px] sm:w-[300px] lg:w-[268px] lg:h-[147px]"
              />
              <p className="font-semibold text-[#484848]">01/10/23</p>
              <p className="max-w-[16.6rem] text-sm lg:text-base font-extrabold h-[66px]">
                How to download DLC
              </p>
              <p className="text-[#e60012] font-extrabold underline underline-offset-8 decoration-2">
                Read more
              </p>
            </div>
            <div className="space-y-3 hover:text-[#e60012] cursor-pointer newsModal">
              <img
                src={newsBottomImageTwo}
                alt=""
                className="rounded-sm w-[268px] sm:w-[300px] lg:w-[268px] lg:h-[147px]"
              />
              <p className="font-semibold text-[#484848]">01/05/23</p>
              <p className="max-w-[16.6rem] text-sm lg:text-base font-extrabold h-[66px]">
                Save on select digital games with the New Year Sale!
              </p>
              <p className="text-[#e60012] font-extrabold underline underline-offset-8 decoration-2">
                Read more
              </p>
            </div>
            <div className="space-y-3 hover:text-[#e60012] cursor-pointer newsModal">
              <img
                src={newsBottomImageThree}
                alt=""
                className="rounded-sm w-[268px] sm:w-[300px] lg:w-[268px] lg:h-[147px]"
              />
              <p className="font-semibold text-[#484848]">01/05/23</p>
              <p className="max-w-[16.6rem] text-sm lg:text-base font-extrabold h-[66px]">
                In-game rewards: Week of January 5, 2023
              </p>
              <p className="text-[#e60012] font-extrabold underline underline-offset-8 decoration-2">
                Read more
              </p>
            </div>
            <div className="space-y-3 hover:text-[#e60012] cursor-pointer newsModal">
              <img
                src={newsBottomImageFour}
                alt=""
                className="rounded-sm w-[268px] sm:w-[300px] lg:w-[268px] lg:h-[147px]"
              />
              <p className="font-semibold text-[#484848]">01/04/23</p>
              <p className="max-w-[16.6rem] text-sm lg:text-base font-extrabold h-[66px]">
                Spicy, sweet, or sour? It's a tasty Splatfest in Splatoon 3!
              </p>
              <p className="text-[#e60012] font-extrabold underline underline-offset-8 decoration-2">
                Read more
              </p>
            </div>
          </div>
          <button className="bg-[#e60012] text-white text-lg font-bold px-[1.5rem] py-2.5 h-[3rem] rounded-[4px] btnAnimation w-full lg:w-auto lg:hover:scale-105 flex justify-center items-center gap-4 mt-10">
            {newsBtnIcon} See all news articles
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
