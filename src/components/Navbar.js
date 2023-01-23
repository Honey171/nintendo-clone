import React, { useEffect, useState, useRef } from 'react';

import {

  logo,

  storeIcon,

  snowIcon,

  gamesIcon,

  switchIcon,

  eventsIcon,

  nintendoIcon,

  bigLogo,

  searchImageOne,

  searchImageTwo,

  searchImageThree,

  searchImageFour,

  largerNavSupportIcon,

  largerNavProfileIcon,

  largerNavCartIcon,

  largerNavWishIcon,

} from '../assets/imageLinks';

import { IoIosSearch } from 'react-icons/io';

import { FiChevronDown } from 'react-icons/fi';

import { AiOutlineClose, AiOutlineHeart } from 'react-icons/ai';



function Navbar({ setSearch, search }) {

  const [categoryModal, setCategoryModal] = useState(false);

  const [input, setInput] = useState('');

  const optionsRef = useRef(null);



  useEffect(() => {

    optionsRef.current = document.querySelectorAll('.options');

    const options = optionsRef.current;



    if (options.length) {

      options.forEach((option) => {

        option.addEventListener('mouseover', () => {

          const hovered = document.querySelector('.hovered');

          const first = document.querySelector('.firstOne');

          if (hovered) {

            hovered.classList.remove('hovered');

          }

          if (first) {

            first.classList.remove('firstOne');

          }

        });

        option.addEventListener('mouseout', () => {

          option.classList.add('hovered');

        });

      });

    }

    return () => {

      options.forEach((option) => {

        option.removeEventListener('mouseover', () => {});

        option.removeEventListener('mouseout', () => {});

      });

    };

  }, [categoryModal]);



  return (

    <nav className="fixed w-full z-50 bg-white pointer-events-auto">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3 text-[#484848]">

          <div className="bg-[#e60012] w-[105px] h-[53px] items-center justify-center cursor-pointer hidden lg:flex">

            {logo}

          </div>

          <div className="bg-[#e60012] lg:w-[105px] lg:h-[53px] flex items-center lg:justify-center w-[100vw] h-[48px] lg:hidden pl-5">

            {bigLogo}

          </div>

          <form

            className={`hidden lg:flex items-center border-b ${

              search

                ? 'border-[#e60012]'

                : 'border-[#484848] hover:border-[#e60012]'

            } py-1.5 `}

          >

            <div

              className={`flex items-center gap-2 ${

                search

                  ? ''

                  : 'hover:text-[#e60012] inputPlaceholder cursor-pointer'

              } `}

              onClick={() => {

                setSearch(true);

                if (categoryModal) {

                  const before = document.querySelector('.beforeAnimation');

                  before.classList.toggle('animated');

                  setCategoryModal(false);

                }

              }}

            >

              <IoIosSearch

                className={`text-2xl ${search ? 'text-[#e60012]' : ''}`}

              />

              <input

                type="text"

                placeholder="Search games,hardware, news, etc"

                value={input}

                className={`w-[280px] outline-none text-sm font-medium ${

                  search ? 'cursor-text' : 'cursor-pointer'

                }  placeholder:text-gray-600`}

                onChange={(e) => setInput(e.target.value)}

              />

            </div>

            <div

              className="flex gap-2 items-center font-extrabold hover:text-[#e60012] cursor-pointer"

              onClick={() => {

                setCategoryModal(!categoryModal);

                const before = document.querySelector('.beforeAnimation');

                before.classList.toggle('animated');

              }}

            >

              <p className="text-[13px]">All categories</p>

              <FiChevronDown className="text-xl beforeAnimation" />

            </div>

            {categoryModal && (

              <div className="absolute top-11 left-[26.5rem] bg-white border border-gray-300 rounded-sm py-2 text-xs w-[130px] z-50">

                <option

                  value="1"

                  className="options firstOne"

                >

                  All categories

                </option>

                <option

                  value="2"

                  className="options"

                >

                  Games

                </option>

                <option

                  value="3"

                  className="options"

                >

                  Hardware

                </option>

                <option

                  value="4"

                  className="options"

                >

                  Merchandise

                </option>

                <option

                  value="5"

                  className="options"

                >

                  News & Events

                </option>

                <option

                  value="6"

                  className="options"

                >

                  Support

                </option>

              </div>

            )}

          </form>

          {search && (

            <button

              className={`bg-[#484848] text-white px-1 py-1 rounded-full ${

                search ? 'opacity-1' : 'opacity-0'

              }  searchAnimation`}

              onClick={() => {

                if (input.length > 1) {

                  setInput('');

                }

                if (categoryModal) {

                  const before = document.querySelector('.beforeAnimation');

                  before.classList.toggle('animated');

                  setCategoryModal(false);

                }

                setSearch(false);

              }}

            >

              <AiOutlineClose />

            </button>

          )}

        </div>

        {!search && (

          <div>

            <ul className="items-center gap-7 pr-4 xl:gap-8 xl:pr-6 font-extrabold text-[#484848] text-[0.8rem] hidden lg:flex">

              <li className="flex items-center gap-1.5 hover:text-[#e60012] cursor-pointer">

                {largerNavSupportIcon} Support

              </li>

              <li className="flex items-center gap-1.5 hover:text-[#e60012] cursor-pointer">

                {largerNavWishIcon} Wish List

              </li>

              <li className="flex items-center gap-1.5 hover:text-[#e60012] cursor-pointer">

                {largerNavCartIcon} Cart

              </li>

              <li className="flex items-center gap-1.5 hover:text-[#e60012] cursor-pointer">

                {largerNavProfileIcon} Log in / Sign up

              </li>

            </ul>

          </div>

        )}

      </div>

      <div className="items-center justify-center bg-white py-3 border-t border-b border-gray-300 hidden lg:flex z-50">

        <ul className="items-center gap-8 pr-6 font-extrabold text-[#484848] text-[0.8rem] hidden lg:flex ">

          <li className="flex items-center gap-1.5 hover:text-[#e60012] cursor-pointer">

            {storeIcon} My Nintendo Store

            <FiChevronDown className="text-xl" />

          </li>

          <li className="flex items-center gap-1.5 hover:text-[#e60012] cursor-pointer">

            {snowIcon} Holiday Gift Guide

          </li>

          <li className="flex items-center gap-1.5 hover:text-[#e60012] cursor-pointer">

            {gamesIcon} Games <FiChevronDown className="text-xl" />

          </li>

          <li className="flex items-center gap-1.5 hover:text-[#e60012] cursor-pointer">

            {switchIcon} Nintendo Switch

            <FiChevronDown className="text-xl" />

          </li>

          <li className="flex items-center gap-1.5 hover:text-[#e60012] cursor-pointer">

            {eventsIcon} News & Events

          </li>

          <li className="flex items-center gap-1.5 hover:text-[#e60012] cursor-pointer">

            {nintendoIcon} Play Nintendo

            <FiChevronDown className="text-xl" />

          </li>

        </ul>

      </div>

      <div

        className={`absolute w-full h-[516px] top-[3.3rem] bg-white z-40 ${

          search

            ? 'opacity-1 pointer-events-auto'

            : 'opacity-0 pointer-events-none'

        } searchAnimation`}

      >

        <div className="pl-28 pt-5">

          <ul className="text-[#e60012] font-bold space-y-1">

            <li className="pb-2 text-[#484848]">Trending topics</li>

            <li className="hover:text-[#AC000D] cursor-pointer">

              Animal Crossing

            </li>

            <li className="hover:text-[#AC000D] cursor-pointer">

              Nintendo Switch

            </li>

            <li className="hover:text-[#AC000D] cursor-pointer">

              Nintendo Switch games

            </li>

            <li className="hover:text-[#AC000D] cursor-pointer">Zelda games</li>

            <li className="hover:text-[#AC000D] cursor-pointer">

              Pokémon games

            </li>

          </ul>

          <div className="pt-5">

            <p className="text-[#484848] font-bold pb-2">Top store products</p>

            <div className="flex flex-wrap gap-8 flex-row w-[800px]">

              <div className="flex items-center space-x-2 rounded-md w-[340px] text-[0.9rem] border border-gray-300 hover:text-[#e60012] text-[#484848] cursor-pointer searchImage">

                <img

                  src={searchImageOne}

                  alt=""

                  className="w-[141px] h-[81px] rounded-tl-md rounded-bl-md"

                  loading="lazy"

                />

                <div className="flex flex-col h-[70px] justify-between">

                  <p className="font-extrabold">

                    Kirby&trade; and the Forgotten Land

                  </p>

                  <div className="flex justify-between space-x-2 w-[180px]">

                    <div className="flex space-x-2 items-center">

                      <div className="bg-[#e60012] w-[2px] h-[15px]"></div>

                      <p className="text-[#484848]">Nintendo switch</p>

                    </div>

                    <AiOutlineHeart className="text-xl text-[#e60012] cursor-pointer" />

                  </div>

                </div>

              </div>

              <div className="flex items-center space-x-2 rounded-md w-[340px] text-[0.9rem] border border-gray-300 hover:text-[#e60012] text-[#484848] cursor-pointer searchImage">

                <img

                  src={searchImageTwo}

                  alt=""

                  className="w-[141px] h-[81px] rounded-tl-md rounded-bl-md"

                  loading="lazy"

                />

                <div className="flex flex-col h-[70px] justify-between">

                  <p className="font-extrabold">

                    Pokemon&trade; Legends: Arceus

                  </p>

                  <div className="flex justify-between space-x-2 w-[180px]">

                    <div className="flex space-x-2 items-center">

                      <div className="bg-[#e60012] w-[2px] h-[15px]"></div>

                      <p className="text-[#484848]">Nintendo switch</p>

                    </div>

                    <AiOutlineHeart className="text-xl text-[#e60012] cursor-pointer" />

                  </div>

                </div>

              </div>

              <div className="flex items-center space-x-2 rounded-md w-[340px] text-[0.9rem] border border-gray-300 hover:text-[#e60012] text-[#484848] cursor-pointer searchImage">

                <img

                  src={searchImageThree}

                  alt=""

                  className="w-[141px] h-[81px] rounded-tl-md rounded-bl-md"

                  loading="lazy"

                />

                <div className="flex flex-col h-[70px] justify-between">

                  <p className="font-extrabold">Metroid&trade; Dread</p>

                  <div className="flex justify-between space-x-2 w-[180px]">

                    <div className="flex space-x-2 items-center">

                      <div className="bg-[#e60012] w-[2px] h-[15px]"></div>

                      <p className="text-[#484848]">Nintendo switch</p>

                    </div>

                    <AiOutlineHeart className="text-xl text-[#e60012] cursor-pointer" />

                  </div>

                </div>

              </div>

              <div className="flex items-center space-x-2 rounded-md w-[340px] text-[0.9rem] border border-gray-300 hover:text-[#e60012] text-[#484848] cursor-pointer searchImage">

                <img

                  src={searchImageFour}

                  alt=""

                  className="w-[141px] h-[81px] rounded-tl-md rounded-bl-md"

                  loading="lazy"

                />

                <div className="flex flex-col h-[70px] justify-between">

                  <p className="font-extrabold">

                    Nintendo Switch&trade; Sports

                  </p>

                  <div className="flex justify-between space-x-2 w-[180px]">

                    <div className="flex space-x-2 items-center">

                      <div className="bg-[#e60012] w-[2px] h-[15px]"></div>

                      <p className="text-[#484848]">Nintendo switch</p>

                    </div>

                    <AiOutlineHeart className="text-xl text-[#e60012] cursor-pointer" />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </nav>

  );

}



export default Navbar;

