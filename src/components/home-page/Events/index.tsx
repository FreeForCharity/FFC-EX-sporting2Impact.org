import React from 'react'

const Events = () => {
  return (
    <div id="events" className="py-[52px]">
      <div className="w-[90%] mx-auto max-w-[1280px]">
        <h1
          className="font-[400] text-[40px] lg:text-[48px] leading-[100%] tracking-[0] text-center mx-auto mb-[50px]"
          id="faustina-font"
        >
          Upcoming Events
        </h1>

        <div className="text-center mb-8">
          <p className="text-[20px] lg:text-[25px] font-[500]" id="lato-font">
            Join us for upcoming fitness, health talks, and sports events.
            <br />
            Check our Facebook Events page for more details on upcoming events.
          </p>
        </div>

        {/* SociableKit Facebook Events Widget */}
        <div className="flex justify-center">
          <iframe
            src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
              'https://www.facebook.com/profile.php?id=61586413341306&sk=events'
            )}&tabs=events&width=1200&height=1000`}
            style={{ border: 'none', overflow: 'hidden', maxWidth: '1200px' }}
            width="100%"
            height="1000"
            loading="lazy"
            title="Facebook Events"
            frameBorder={0}
            allow="encrypted-media"
          />
        </div>
        {/* 
        <div className="text-center mt-8">
          <p className="text-[18px] font-[400] text-gray-600" id="lato-font">
            <a
              href="https://www.facebook.com/events/calendar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2EA3F2] hover:underline"
            >
              View all events on Facebook
            </a>
          </p>
        </div> */}
      </div>

      <div className="w-[95%] mt-[50px] mx-auto border border-[#2B627B]"></div>
    </div>
  )
}

export default Events
