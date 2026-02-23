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
          <FrequentlyAskedQuestions title="What is the organization aiming to accomplish?">
            <p className="mb-[30px]">
              Sporting2Impact is a nonprofit that is commited to provide free fitness, heath talks,
              and conduct sports tournaments to bring awareness in the community and to help those
              in need.
            </p>
          </FrequentlyAskedQuestions>
        </div>
      </div>
    </div>
  )
}

export default index
