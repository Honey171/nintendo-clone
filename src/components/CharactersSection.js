import React from 'react';
import {
  mario,
  marioBg,
  zelda,
  zeldaBg,
  splatoon,
  splatoonBg,
  kirby,
  kirbyBg,
} from '../assets/imageLinks';

function CharactersSection() {
  return (
    <section>
      <div className="flex items-center justify-center pb-20 shadow-xl sm:px-10">
        <div>
          <p className="text-[#484848] text-3xl font-bold pb-7 pl-4 md:pl-0">
            Characters
          </p>
          <div className="flex flex-wrap lg:flex-nowrap gap-3 xl:gap-9 items-center justify-center">
            <div
              className="rounded-md"
              onMouseEnter={() => {
                document
                  .querySelector('.marioBg')
                  .classList.remove('scale-[1.15]');
              }}
              onMouseLeave={() => {
                document
                  .querySelector('.marioBg')
                  .classList.add('scale-[1.15]');
              }}
            >
              <div className="absolute overflow-hidden rounded-md">
                <img
                  src={marioBg}
                  alt=""
                  className="w-[162px] h-[162px] xl:w-[272px] xl:h-[272px] lg:w-[230px] lg:h-[230px] marioBg scale-[1.15] z-0 transition-all rounded-md"
                />
              </div>
              <div className="relative overflow-hidden cursor-pointer">
                <img
                  src={mario}
                  alt=""
                  className="w-[162px] h-[162px] xl:w-[272px] xl:h-[272px] lg:w-[230px] lg:h-[230px] transition-all hover:scale-[1.15]"
                />
              </div>
              <p className="pt-2 text-[#484848] font-bold text-xl max-w-[160px] h-[60px]">
                Super Mario&trade;
              </p>
            </div>
            <div
              className="rounded-md"
              onMouseEnter={() => {
                document
                  .querySelector('.zeldaBg')
                  .classList.remove('scale-[1.15]');
              }}
              onMouseLeave={() => {
                document
                  .querySelector('.zeldaBg')
                  .classList.add('scale-[1.15]');
              }}
            >
              <div className="absolute overflow-hidden rounded-md">
                <img
                  src={zeldaBg}
                  alt=""
                  className="w-[162px] h-[162px] xl:w-[272px] xl:h-[272px] lg:w-[230px] lg:h-[230px] zeldaBg scale-[1.15] z-0 transition-all rounded-md"
                />
              </div>
              <div className="relative overflow-hidden cursor-pointer">
                <img
                  src={zelda}
                  alt=""
                  className="w-[162px] h-[162px] xl:w-[272px] xl:h-[272px] lg:w-[230px] lg:h-[230px] transition-all hover:scale-[1.15]"
                />
              </div>
              <p className="pt-2 text-[#484848] font-bold text-xl max-w-[160px] lg:max-w-lg h-[60px]">
                The Legend of Zelda&trade;
              </p>
            </div>
            <div
              className="rounded-md"
              onMouseEnter={() => {
                document
                  .querySelector('.splatoonBg')
                  .classList.remove('scale-[1.15]');
              }}
              onMouseLeave={() => {
                document
                  .querySelector('.splatoonBg')
                  .classList.add('scale-[1.15]');
              }}
            >
              <div className="absolute overflow-hidden rounded-md">
                <img
                  src={splatoonBg}
                  alt=""
                  className="w-[162px] h-[162px] xl:w-[272px] xl:h-[272px] lg:w-[230px] lg:h-[230px] splatoonBg scale-[1.15] z-0 transition-all rounded-md"
                />
              </div>
              <div className="relative overflow-hidden cursor-pointer">
                <img
                  src={splatoon}
                  alt=""
                  className="w-[162px] h-[162px] xl:w-[272px] xl:h-[272px] lg:w-[230px] lg:h-[230px] transition-all hover:scale-[1.15]"
                />
              </div>
              <p className="pt-2 text-[#484848] font-bold text-xl max-w-[160px] h-[60px] overflow-hidden">
                Splatoon&trade;
              </p>
            </div>
            <div
              className="rounded-md"
              onMouseEnter={() => {
                document
                  .querySelector('.kirbyBg')
                  .classList.remove('scale-[1.15]');
              }}
              onMouseLeave={() => {
                document
                  .querySelector('.kirbyBg')
                  .classList.add('scale-[1.15]');
              }}
            >
              <div className="absolute overflow-hidden rounded-md">
                <img
                  src={kirbyBg}
                  alt=""
                  className="w-[162px] h-[162px] xl:w-[272px] xl:h-[272px] lg:w-[230px] lg:h-[230px] kirbyBg scale-[1.15] z-0 transition-all rounded-md"
                />
              </div>
              <div className="relative overflow-hidden cursor-pointer">
                <img
                  src={kirby}
                  alt=""
                  className="w-[162px] h-[162px] xl:w-[272px] xl:h-[272px] lg:w-[230px] lg:h-[230px] transition-all hover:scale-[1.15] "
                />
              </div>
              <p className="pt-2 text-[#484848] font-bold text-xl max-w-[160px] h-[60px]">
                Kirby&trade;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CharactersSection;
