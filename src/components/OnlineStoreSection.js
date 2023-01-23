import React from 'react';
import { onlineStoreImage, onlineStoreImageMobile } from '../assets/imageLinks';

function OnlineStoreSection() {
  return (
    <section>
      <div className="w-full flex flex-col items-center justify-center pb-20 shadow-xl">
        <div className="space-y-6 px-5 md:px-10">
          <p className="text-[#484848] text-3xl font-bold">Online Store</p>
          <div className="space-y-11">
            <img
              src={onlineStoreImage}
              alt=""
              className="hidden md:block"
            />
            <img
              src={onlineStoreImageMobile}
              alt=""
              className="block md:hidden"
            />
            <div className="flex justify-between items-center flex-col lg:flex-row space-y-5 lg:space-y-0">
              <p className="text-lg md:text-xl text-[#484848] font-bold lg:max-w-[740px] xl:max-w-4xl">
                Shop games, exclusive Nintendo merchandise, and more! Plus, get
                free shipping on orders $50 and over.
              </p>
              <button className="bg-[#e60012] text-white text-lg font-bold px-[1.5rem] h-[3rem] rounded-[4px] btnAnimation w-full lg:w-auto lg:hover:scale-110">
                Start Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnlineStoreSection;
