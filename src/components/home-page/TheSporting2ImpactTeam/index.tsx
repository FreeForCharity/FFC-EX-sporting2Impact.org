import React from 'react'
import TeamMemberCard from '@/components/ui/TeamMemberCard'

const index = () => {
  return (
    <div id="team" className="py-[50px]">
      <h1
        className="font-[400] text-[40px] lg:text-[48px]  tracking-[0] text-center mx-auto mb-[50px]"
        id="faustina-font"
      >
        The Sporting2Impact Team
      </h1>

      <div className="w-[90%] mx-auto py-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-stretch justify-center mb-[50px] gap-[30px]">
          <TeamMemberCard
            imageUrl="/Images/member1.webp"
            name="Siva Ch"
            title="Sporting2Impact President & Treasurer"
          />
          <TeamMemberCard
            imageUrl="/Images/member2.webp"
            name="Sridhar U"
            title="Sporting2Impact Vice President"
          />
          <TeamMemberCard
            imageUrl="/Images/member3.webp"
            name="Vamsi K"
            title="Sporting2Impact Secretary"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mt-[40px] gap-[30px]">
          <TeamMemberCard
            imageUrl="/Images/member4.webp"
            name="Askhat Ch"
            title="Sporting2Impact Board Member - Outreach Coordinator"
          />
          <TeamMemberCard
            imageUrl="/Images/member5.webp"
            name="Tanya K"
            title="Sporting2Impact Board Member - Social Media Coordinator"
          />

          <TeamMemberCard
            imageUrl="/Images/member6.webp"
            name="Suchay U"
            title="Sporting2Impact Board Member - Events Coordinator"
          />
        </div>
      </div>
    </div>
  )
}

export default index
