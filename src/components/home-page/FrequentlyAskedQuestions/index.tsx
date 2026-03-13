import React from 'react'
import FrequentlyAskedQuestions from '@/components/ui/Frequently-Asked-Questions'

const index = () => {
  return (
    <div id="faq" className="py-[50px]">
      <div className="w-[90%] mx-auto lg:px-[20px]">
        <h1
          className="font-[400] text-[40px] lg:text-[48px]  tracking-[0] text-center mx-auto mb-[50px]"
          id="faustina-font"
        >
          Frequently Asked Questions
        </h1>
        <div>
          <FrequentlyAskedQuestions title="Are you really a charity?">
            <p>
              Yes, We have had IRS designation since 2025 and have been helping communities by
              providing free fitness sessions, health talks and other services like Jacket Donation.
              Our IRS designation number (EIN) is 33-4148206.  You can see our guidestar profile 
              <a href="https://app.candid.org/profile/16347048/sporting2impact-inc/?pkId=5d2b9f42-146a-49bd-ac2c-273092ba7307&isActive=true">
                here
              </a>
              .
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="If I am an individual or business and make a donation to Sporting2Impact, is this tax-deductible?">
            <p>
              While any official tax guidance should come from your accountant or other tax advisor
              Sporting2Impact INC is a registered 501(c)(3) organization and donations are
              tax-deductible. Our IRS designation number (EIN) is 33-4148206.  Upon checkout you
              will receive a receipt to provide to your accountant. Specifically, if you represent a
              business you can elect to deduct this as an expense versus as a donation depending on
              the guidance of your tax advisor.
            </p>
          </FrequentlyAskedQuestions>
        </div>
      </div>
    </div>
  )
}

export default index
