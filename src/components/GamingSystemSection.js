import React from 'react';
import {
  gamingSystemImage,
  gamingSystemImageMobile,
} from '../assets/imageLinks';

function GamingSystemSection() {
  return (
    <section>
      <div className="w-full flex flex-col items-center justify-center pb-14 shadow-xl">
        <div className="space-y-6 px-5 md:px-10">
          <p className="text-[#484848] text-3xl font-bold">Gaming systems</p>
          <div className="space-y-11">
            <img
              src={gamingSystemImage}
              alt=""
              className="hidden md:block"
            />
            <img
              src={gamingSystemImageMobile}
              alt=""
              className="block md:hidden"
            />
            <div className="flex flex-col items-center lg:flex-row space-y-5 lg:space-y-0 lg:space-x-7 h-[3.5rem]">
              <p className="text-lg md:text-xl text-[#484848] font-bold lg:max-w-[740px] xl:max-w-4xl self-start lg:self-center">
                Find the perfect Nintendo Switch system for you.
              </p>
              <button className="bg-[#e60012] text-white text-lg font-bold px-[1.5rem] py-2.5 h-[3rem] rounded-[4px] btnAnimation w-full lg:w-auto lg:hover:scale-110">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GamingSystemSection;
