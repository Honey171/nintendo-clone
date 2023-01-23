import React from 'react';
import { smallerImg, bigImg, teenImg } from '../assets/imageLinks';

function HeroSection() {
  return (
    <section>
      <div className="lg:pt-32 pt-12 flex items-center justify-center lg:px-7">
        <div className="flex flex-col shadow-md lg:w-auto">
          <img
            src={bigImg}
            alt=""
            className="rounded-sm w-[1441px] hidden lg:block"
          />
          <img
            src={smallerImg}
            alt=""
            className="rounded-sm block lg:hidden"
          />
          <div className="flex lg:flex-row flex-col space-y-4 lg:space-y-0 justify-between items-center pt-10 pb-10">
            <div className="flex lg:flex-row flex-col space-y-4 lg:space-y-0 items-center lg:gap-2 xl:gap-7">
              <p className="text-3xl text-[#484848] font-bold text-center lg:text-left lg:max-w-lg xl:max-w-xl">
                Pre-order digitally today, play on 1/20
              </p>
              <button className="bg-[#e60012] text-white text-lg font-bold px-6 py-2.5 rounded-[4px] hover:scale-110 btnAnimation w-[95%] sm:w-[120%] lg:w-auto">
                Pre-order now
              </button>
            </div>
            <div className="items-center space-x-4 hidden cursor-pointer sm:flex">
              <img
                src={teenImg}
                alt=""
                className="w-[47px] h-[70px]"
              />
              <p className="text-xs max-w-[185px] text-[#484848] font-bold">
                Fantasy Violence, Mild language, Mild Suggestive Themes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
