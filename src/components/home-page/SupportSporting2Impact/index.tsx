import React, { CSSProperties, IframeHTMLAttributes } from 'react'

interface ExtendedIframeProps extends IframeHTMLAttributes<HTMLIFrameElement> {
  allowpaymentrequest?: string
  allowtransparency?: string
}

const Index = () => {
  const donationFormStyle: CSSProperties = {
    position: 'absolute',
    border: '0',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
  }

  const donationFormProps: ExtendedIframeProps = {
    title: 'Donation form powered by Zeffy',
    style: donationFormStyle,
    src: 'https://www.zeffy.com/en-US/donation-form/donate-to-keep-community-healthy',
    allowpaymentrequest: '',
    allowtransparency: 'true',
  }

  return (
    <div id="donate" className="bg-[#f7f9fc] py-[60px]">
      <div className="w-[90%] mx-auto px-[20px] max-w-[1280px]">
        {/* Heading */}
        <h1
          className="font-[700] text-[42px] lg:text-[52px] leading-[110%] text-center mx-auto mb-[40px] text-[#2a6682]"
          id="faustina-font"
        >
          Support Sporting2Impact
        </h1>

        <div className="flex items-start flex-col lg:flex-row gap-[50px] lg:gap-[40px]">
          {/* Left side: Description + Impact Box */}
          <div className="flex flex-col w-full lg:w-[50%]">
            <p
              className="mb-[20px] font-[400] text-[22px] lg:text-[24px] leading-[160%] text-center lg:text-left text-[#374151]"
              id="lato-font"
            >
              Your generosity helps us build healthier communities by providing free fitness
              sessions, wellness education, and accessible health resources for all.
            </p>

            {/* Impact Box */}
            {/* <div className="bg-white border border-[#e5e7eb] rounded-xl shadow-md p-6 mt-4">
              <h3 className="text-[20px] font-[700] text-[#2a6682] mb-3" id="faustina-font">
                Your Impact
              </h3>
              <ul className="text-[#374151] text-[16px] leading-[150%] space-y-2" id="lato-font">
                <li>• Funds free community fitness sessions</li>
                <li>• Supports health education workshops</li>
                <li>• Helps provide wellness resources to families</li>
                <li>• Strengthens community health and engagement</li>
              </ul>
            </div> */}
          </div>

          {/* Right side: Donation Form */}
          <div className="w-full lg:w-[50%] flex justify-center">
            <div
              className="relative w-full max-w-[500px] h-[600px] bg-white rounded-xl shadow-xl border border-[#e5e7eb] overflow-hidden"
              role="region"
              aria-label="Donation form"
            >
              <iframe {...donationFormProps}></iframe>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <p className="text-center text-[14px] text-[#6b7280] mt-4">
          100% secure donation form powered by Zeffy — no platform fees.
        </p>
      </div>
    </div>
  )
}

export default Index
