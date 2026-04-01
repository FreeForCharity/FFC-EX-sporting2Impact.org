'use client'

import React from 'react'
import HeroSlideshow from './LandingPageImages'

const donationFormStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  border: '0',
}
interface ExtendedIframeProps extends React.HTMLAttributes<HTMLIFrameElement> {
  title: string
  style: React.CSSProperties
  src: string
  allowpaymentrequest: string
  allowtransparency: string
}
const donationFormProps: ExtendedIframeProps = {
  title: 'Donation form powered by Zeffy',
  style: donationFormStyle,
  src: 'https://www.zeffy.com/en-US/donation-form/donate-to-keep-community-healthy',
  allowpaymentrequest: '',
  allowtransparency: 'true',
}

const CharityHeroBackground = () => {
  return (
    <div
      id="hero"
      className="relative w-full min-h-screen overflow-hidden bg-[#2E6F8E] flex items-center"
    >
      {/* FULLSCREEN SLIDESHOW BACKGROUND */}
      {/* <div className="absolute inset-0 z-0">
        <HeroSlideshow />
      </div> */}

      {/* DARK OVERLAY FOR READABILITY */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-[90%] max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 py-20">
        {/* LEFT SIDE TEXT */}
        <div className="text-white flex flex-col justify-center">
          <h1 className="text-[50px] lg:text-[60px] font-[500] leading-[120%] mb-[20px]">
            Welcome to <br /> Sporting2Impact
          </h1>

          <p className="text-[24px] font-[400] leading-[120%] mb-[20px]">
            Empowering Communities Through Sport and Wellness
            <br />
            <br />
            SPORTS | FITNESS | CHARITY
          </p>
        </div>

        {/* RIGHT SIDE DONATION FORM */}
        <div className="flex justify-center col-span-1 lg:col-span-2">
          <div
            className="relative w-full max-w-[500px] h-[600px] bg-white rounded-xl shadow-xl border border-[#e5e7eb] overflow-hidden"
            role="region"
            aria-label="Donation form"
          >
            <iframe {...donationFormProps}></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharityHeroBackground
