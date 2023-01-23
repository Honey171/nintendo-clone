import {
  profile,
  heart,
  cart,
  hamburger,
  search,
  storeIcon,
  gamesIcon,
  switchIcon,
  eventsIcon,
  nintendoIcon,
  mobileArrowRight,
  flag,
  supportIcon,
} from '../assets/imageLinks';
import { AiOutlineClose } from 'react-icons/ai';

function MobileFixedNav({ mobileNav, setMobileNav }) {
  return (
    <div className="fixed translate-x-[-50%] left-[50%] mx-auto bottom-24 z-50">
      <div className="flex gap-10 bg-[white] items-center text-[#484848] px-6 sm:px-11 rounded-full pointer-events-auto">
        <div
          className={`absolute ${
            mobileNav ? 'h-[60vh] opacity-1' : 'h-0 opacity-0'
          } bottom-[29px] left-0 bg-white w-full -z-10 transition-all rounded-tr-lg rounded-tl-lg`}
        >
          <div className="relative flex bg-white items-center justify-center py-4 border-b border-[#c8c8c8] w-full rounded-tr-lg rounded-tl-lg">
            <p className="text-[#484848] text-xl font-extrabold">Menu</p>
            <button
              className="bg-[#c8c8c8] hover:bg-[#484848] transition-all px-1 py-1 text-white text-lg rounded-full absolute right-4"
              onClick={() => setMobileNav(false)}
            >
              <AiOutlineClose />
            </button>
          </div>
          <div className="overflow-scroll sm:overflow-hidden pb-20 sm:pb-10 h-[54vh]">
            <ul>
              <li className="h-[60px] flex items-center justify-between pt-2 px-7 border-b border-[#c8c8c8]">
                <div className="flex items-center gap-2 text-[#484848] font-bold">
                  <span className="text-[#e60012]">{storeIcon}</span> My
                  Nintendo Store
                </div>
                <div className="text-[#484848]">{mobileArrowRight}</div>
              </li>
              <li className="h-[60px] flex items-center justify-between pt-2 px-7 border-b border-[#c8c8c8]">
                <div className="flex items-center gap-2 text-[#484848] font-bold">
                  <span className="text-[#e60012]">{gamesIcon}</span> Games
                </div>
                <div className="text-[#484848]">{mobileArrowRight}</div>
              </li>
              <li className="h-[60px] flex items-center justify-between pt-2 px-7 border-b border-[#c8c8c8]">
                <div className="flex items-center gap-2 text-[#484848] font-bold">
                  <span className="text-[#e60012]">{switchIcon}</span>
                  Nintendo Switch
                </div>
                <div className="text-[#484848]">{mobileArrowRight}</div>
              </li>
              <li className="h-[60px] flex items-center pt-2 px-7 border-b border-[#c8c8c8]">
                <div className="flex items-center gap-2 text-[#484848] font-bold">
                  <span className="text-[#e60012]">{eventsIcon}</span> News &
                  Events
                </div>
              </li>
              <li className="h-[60px] flex items-center justify-between pt-2 px-7 border-b border-[#c8c8c8]">
                <div className="flex items-center gap-2 text-[#484848] font-bold">
                  <span className="text-[#e60012]">{nintendoIcon}</span> My Play
                  Nintendo
                </div>
                <div className="text-[#484848]">{mobileArrowRight}</div>
              </li>
            </ul>
            <ul className="mt-4">
              <li className="h-[60px] flex items-center pt-2 px-7 border-b border-[#c8c8c8]">
                <div className="flex items-center gap-2 text-[#484848] font-bold">
                  <span className="text-[#e60012]">{supportIcon}</span>
                  Support
                </div>
              </li>
              <li className="h-[60px] flex items-center  pt-2 px-7 border-b border-[#c8c8c8]">
                <div className="flex items-center gap-2 text-[#484848] font-bold">
                  <span className="text-[#e60012]">
                    <img
                      src={flag}
                      alt=""
                      className="w-4"
                    />
                  </span>{' '}
                  Change Region
                </div>
              </li>
            </ul>
          </div>
        </div>
        <span
          className="hover:text-[#e60012] cursor-pointer"
          onClick={() => {
            setMobileNav(!mobileNav);
          }}
        >
          {hamburger}
        </span>
        <span className="hover:text-[#e60012] cursor-pointer">{heart}</span>
        <div className="text-white bg-[#e60012] py-3 px-3 rounded-full flex items-center justify-center -translate-y-2 cursor-pointer">
          {search}
        </div>
        <span className="hover:text-[#e60012] cursor-pointer">{cart}</span>
        <span className="hover:text-[#e60012] cursor-pointer">{profile}</span>
      </div>
    </div>
  );
}

export default MobileFixedNav;
