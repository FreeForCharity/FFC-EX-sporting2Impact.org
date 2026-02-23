import React from 'react'
import BlueBtn from '../../ui/Bluebtn'

const Mission: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 font-sans text-center">
      <div className="mx-auto w-full max-w-[1000px]">
        <h1 className="mb-6 font-bold text-[30px] sm:text-[32px] md:text-[40px] leading-[1.1] text-[#f27022] w-full sm:w-[85%] md:w-[70%] mx-auto">
          Sporting2Impact has a simple mission with broad implications.
        </h1>

        <p
          className="font-bold text-[16px] sm:text-[17px] md:text-[18px] leading-[26px] sm:leading-[27px] my-3 text-black px-2 sm:px-0"
          id="lato-font"
        >
          Sporting2Impact is a 501(c)(3) non-profit organization
        </p>

        <p
          className="font-medium text-[16px] sm:text-[17px] md:text-[18px] leading-[26px] sm:leading-[27px] text-black px-2 sm:px-0"
          id="lato-font"
        >
          Sporting2Impact is a Maryland-based nonprofit on a mission to make sports accessible,
          inclusive, and transformative for everyone in our community. Founded on the belief that
          athletics have the power to inspire, unite, and uplift, we organize fun, engaging sporting
          events that not only promote health and teamwork but also raise awareness for those in
          need. At Sporting2Impact, we believe that sports are more than just games—they’re a
          catalyst for positive change. Join us as we play with purpose, strengthen our community,
          and make every match, race, and goal count!
        </p>

        {/* <div className="mt-6">
          <BlueBtn href="/about-us">Visit Site</BlueBtn>
        </div> */}
      </div>
    </section>
  )
}

export default Mission