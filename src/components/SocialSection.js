import React from 'react';
import { biggerLogo, fb, tw, yt, ig } from '../assets/imageLinks';

function SocialSection() {
  return (
    <section>
      <div className="h-[180px] lg:h-[120px] bg-[#e60012] flex items-center justify-center">
        <div className="flex flex-col lg:flex-row gap-7 lg:gap-0 items-center justify-between w-[93rem] px-4">
          <div className="cursor-pointer">{biggerLogo}</div>
          <div className="flex lg:gap-16 gap-8">
            <span className="cursor-pointer">{fb}</span>
            <span className="cursor-pointer">{ig}</span>
            <span className="cursor-pointer">{tw}</span>
            <span className="cursor-pointer">{yt}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialSection;
