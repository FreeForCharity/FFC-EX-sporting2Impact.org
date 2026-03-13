import React from 'react'
import Image from 'next/image'

import getUpcomingEvents from '@/components/home-page/Events'
import HeroSlideshow from './LandingPageImages'

const CharityHeroBackground = () => {
  return (
    <div id="hero" className="relative w-full pb-[100px] overflow-hidden section-watermark">
      <div className="absolute inset-0 bg-[#2E6F8E]" />

      <div className="hero-container flex flex-col lg:flex-row gap-[40px] items-center justify-between relative z-10 text-white pt-[130px] w-[90%] mx-auto max-w-[1280px]">
        {/* LEFT SIDE TEXT */}
        <div className="w-full lg:w-[565px]">
          <h1 className="text-[50px] lg:text-[60px] font-[500] leading-[120%] mb-[20px]">
            Welcome to <br /> Sporting2Impact
          </h1>
          <p className="text-[24px] font-[400] leading-[120%] mb-[20px]">
            Building Healthier Communities
            <br />
            <br />
            SPORTS | FITNESS | CHARITY
          </p>
        </div>

        {/* RIGHT SIDE SLIDESHOW */}
        <HeroSlideshow />
      </div>
    </div>
  )
}

export default CharityHeroBackground
