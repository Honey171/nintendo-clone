import React from 'react';
import certificate from '../assets/certificate.png';

function LinksSection() {
  return (
    <section className="px-8">
      <div className="mx-auto max-w-[89rem]">
        <div className="grid justify-center 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-4 gap-x-7 ml-8 xl:ml-2 mr-auto">
          <ul className="links space-y-2">
            <li>
              <span>About Nintendo</span>
            </li>
            <li>
              <span>Careers</span>
            </li>
            <li className="max-w-[210px]">
              <span>Corporate Social Responsibility</span>
            </li>
          </ul>
          <ul className="links space-y-2">
            <li>
              <span>Shop</span>
            </li>
            <li>
              <span>Games</span>
            </li>
            <li>
              <span>Hardware</span>
            </li>
            <li>
              <span>Merchandise</span>
            </li>
            <li>
              <span>Sales & deals</span>
            </li>
            <li>
              <span>Exclusives</span>
            </li>
            <li>
              <span>Online service</span>
            </li>
            <li>
              <span>Nintendo NY store</span>
            </li>
          </ul>
          <ul className="links space-y-2">
            <li className="max-w-[180px]">
              <span>My Nintendo Store orders</span>
            </li>
            <li>
              <span>Order details</span>
            </li>
            <li>
              <span>Shipping info</span>
            </li>
            <li>
              <span>Returns & exchanges</span>
            </li>
            <li>
              <span>FAQ</span>
            </li>
          </ul>
          <ul className="links space-y-2">
            <li>
              <span>Support</span>
            </li>
            <li>
              <span>Nintendo Switch</span>
            </li>
            <li>
              <span>Nintendo Account</span>
            </li>
            <li>
              <span>Other systems</span>
            </li>
            <li>
              <span>Repairs</span>
            </li>
            <li className="max-w-[180px]">
              <span>Nintendo product recycling</span>
            </li>
          </ul>
          <div className="space-y-7">
            <ul className="links space-y-2">
              <li>
                <span>Parents</span>
              </li>
              <li>
                <span>Info for parents</span>
              </li>
              <li>
                <span>Parental controls</span>
              </li>
            </ul>
            <ul className="links space-y-2 hidden xl:block">
              <li>
                <span>Privacy</span>
              </li>
              <li>
                <span>Privacy policy</span>
              </li>
              <li className="max-w-[180px]">
                <span>Cookies and interest-based ads</span>
              </li>
            </ul>
          </div>
          <ul className="links space-y-2">
            <li>
              <span>Community</span>
            </li>
            <li>
              <span>Community guidelines</span>
            </li>
            <li>
              <span>Online safety principles</span>
            </li>
          </ul>
          <ul className="links space-y-2 block xl:hidden">
            <li>
              <span>Privacy</span>
            </li>
            <li>
              <span>Privacy policy</span>
            </li>
            <li className="max-w-[180px]">
              <span>Cookies and interest-based ads</span>
            </li>
          </ul>
        </div>
        <div className="flex lg:justify-end justify-center pt-5">
          <img
            src={certificate}
            alt=""
            className="w-[64px] h-[85px] cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}

export default LinksSection;
