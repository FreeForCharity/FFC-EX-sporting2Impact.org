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
          <FrequentlyAskedQuestions title="What have and havent they accomplished so far?">
            <p>
              While a lot has been accomplished on the IT hosting side and to a certain degree the
              IT project management and consulting side, one element of FFC has not even been
              started. The Free For Charity directory showing services by category that are actually
              entirely free to non-profits has not been developed yet. There are on the market a
              number of regional consulting directories traditionally where the consultant is a
              for-profit entity and pays money to be marketed to other nonprofits. We seek to
              produce an entirely free directory with unbiased empirical metrics showing what
              resources are available to nonprofits. By reducing the high cost often several hundred
              dollars a year to be listed in these directories a broader suite of available
              high-quality professionals can be made available to the nonprofit community at a
              national level. However to accomplish this will require additional code and hosting
              resources that have a hard cost not currently budgeted within the freeforcharity
              budget. We are seeking grant opportunities to overcome these issues.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="Are you really a charity?">
            <p>
              Yes, We have had IRS designation since 2025 and have been helping communities by
              providing free fitness sessions, health talks and other services like Jacket Donation.
              Our IRS designation number (EIN) is 33-4148206.  You can see our guidestar
              profile here.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="If I am an individual or business and donate money for a domain package to Free for Charity, is this tax-deductible?">
            <p>
              While any official tax guidance should come from your accountant or other tax advisor
              Sporting2Impact INC is a registered 501(c)(3) organization and donations are
              tax-deductible. Our IRS designation number (EIN) is 33-4148206.  Upon checkout you
              will receive a receipt to provide to your accountant. Specifically, if you represent a
              business you can elect to deduct this as an expense versus as a donation depending on
              the guidance of your tax advisor.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="If I am an individual or business and donate money for a domain package to Free for Charity, is this tax-deductible?">
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
