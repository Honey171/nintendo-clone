import React from 'react';
import { flag } from '../assets/imageLinks';

function Footer() {
  return (
    <footer>
      <div className="lg:h-[102px] h-[350px] bg-[#242424] flex items-center justify-center text-white w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center text-sm gap-12">
          <p className="text-xs block text-center lg:max-w-[370px] xl:max-w-xl 2xl:max-w-3xl lg:hidden">
            © Nintendo.
            <br /> Games are property of their respective owners. <br />
            Nintendo of America Inc. Headquarters are in Redmond, Washington,
            USA
          </p>
          <p className="text-xs hidden lg:max-w-[370px] xl:max-w-xl 2xl:max-w-3xl lg:block ">
            © Nintendo. Games are property of their respective owners. Nintendo
            of America Inc. Headquarters are in Redmond, Washington, USA
          </p>
          <ul className="flex gap-5 font-semibold text-[12px] text-center">
            <li className="underline-transition">Contact us</li>
            <li className="underline-transition">Website feedback</li>
            <li className="underline-transition">Terms of Use</li>
            <li className="underline-transition">Documents & Policies</li>
          </ul>
          <div
            className="flex items-center gap-2 text-[12.5px] font-semibold cursor-pointer"
            onMouseEnter={() =>
              document
                .querySelector('.region')
                .classList.add('region-transition')
            }
            onMouseLeave={() =>
              document
                .querySelector('.region')
                .classList.remove('region-transition')
            }
          >
            <img
              src={flag}
              alt=""
            />
            <p className="region">Change region</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
