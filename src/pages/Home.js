import React, { useState, useEffect } from 'react';

import BestSellersSection from '../components/BestSellersSection';

import CharactersSection from '../components/CharactersSection';

import FeaturedSection from '../components/FeaturedSection';

import Footer from '../components/Footer';

import GamingSystemSection from '../components/GamingSystemSection';

import HeroSection from '../components/HeroSection';

import LinksSection from '../components/LinksSection';

import MobileFixedNav from '../components/MobileFixedNav';

import Navbar from '../components/Navbar';

import NewReleasesSection from '../components/NewReleasesSection';

import NewsSection from '../components/NewsSection';

import OnlineStoreSection from '../components/OnlineStoreSection';

import SocialSection from '../components/SocialSection';



function Home() {

  const [search, setSearch] = useState(false);

  const [mobileNav, setMobileNav] = useState(false);



  useEffect(() => {

    if (search || mobileNav) {

      document.querySelector('body').classList.add('unscrollable');

      document.querySelector('.wrapper').classList.add('wrapperFilter');

    } else {

      document.querySelector('body').classList.remove('unscrollable');

      document.querySelector('.wrapper').classList.remove('wrapperFilter');

    }

  }, [search, mobileNav]);



  return (

    <main className="w-full">

      <Navbar

        search={search}

        setSearch={setSearch}

      />

      <nav className="lg:hidden">

        <MobileFixedNav

          mobileNav={mobileNav}

          setMobileNav={setMobileNav}

        />

      </nav>

      <div className="wrapper space-y-16">

        <HeroSection />

        <FeaturedSection />

        <OnlineStoreSection />

        <GamingSystemSection />

        <NewsSection />

        <CharactersSection />

        <BestSellersSection />

        <NewReleasesSection />

        <SocialSection />

        <LinksSection />

        <Footer />

      </div>

    </main>

  );

}



export default Home;

