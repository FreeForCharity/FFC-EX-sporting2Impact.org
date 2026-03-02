import React from 'react'
import Hero from '@/components/home-page/Hero'
import Mission from '@/components/home-page/Mission'
import SupportFreeForCharity from '@/components/home-page/SupportSporting2Impact'
import EndowmentFeatures from '@/components/home-page/Endowment-Features'
import OurPrograms from '@/components/home-page/Our-Programs'
import VolunteerwithUs from '@/components/home-page/Volunteer-with-Us'
import Testimonials from '@/components/home/Testimonials'
import TheSporting2ImpactTeam from '@/components/home-page/TheSporting2ImpactTeam'
import FrequentlyAskedQuestions from '@/components/home-page/FrequentlyAskedQuestions'
import Events from '@/components/home-page/Events'

const index = () => {
  return (
    <div>
      <Hero />
      <Mission />
      {/* <Testimonials /> */}
      <Events />
      {/* <OurPrograms /> */}
      <VolunteerwithUs />
      <SupportFreeForCharity />
      <EndowmentFeatures />
      <FrequentlyAskedQuestions />
      <TheSporting2ImpactTeam />
    </div>
  )
}

export default index
