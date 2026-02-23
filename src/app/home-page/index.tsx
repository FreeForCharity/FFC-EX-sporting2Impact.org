import React from 'react'
import Hero from '@/components/home-page/Hero'
import Mission from '@/components/home-page/Mission'
import EndowmentFeatures from '@/components/home-page/Endowment-Features'
import VolunteerwithUs from '@/components/home-page/Volunteer-with-Us'
import FrequentlyAskedQuestions from '@/components/home-page/FrequentlyAskedQuestions'
import Events from '@/components/home-page/Events'
import TheSporting2ImpactTeam from '@/components/home-page/TheSporting2ImpactTeam'
import SupportSporting2Impact from '@/components/home-page/SupportSporting2Impact'

const index = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <VolunteerwithUs />
      <Events />
      <SupportSporting2Impact />
      <EndowmentFeatures />
      <FrequentlyAskedQuestions />
      <TheSporting2ImpactTeam />
    </div>
  )
}

export default index
