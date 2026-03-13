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

      <section className='team-section'>
        <h2 className='section-title'>Founders</h2>
        <div className="team-grid">
          <div className="team-card founder-card">
            <h3 className="team-name">k</h3>
            <p><strong>Role:</strong></p>
            <p className="team-bio">
              <strong>Biography:</strong>
            </p>
          </div>
        </div>
      </section>

      <section className='team-section'>
        <h2 className='section-title'>Board of Directors</h2>
        <div className="team-grid borad-grid">
          <div className="team-card horizontal">
            <div className="details">
              <h3 className="team-name">k</h3>
              <p><strong>School:</strong></p>
              <p><strong>Grade:</strong></p>
              <p><strong>Duration:</strong></p>
              <p><strong>Role:</strong></p>
              <p className="team-bio">
                <strong>Biography:</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-[90%] mx-auto py-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-stretch justify-center mb-[50px] gap-[30px]">
          <TeamMemberCard
            imageUrl="/Images/member1.webp"
            name="Clarke Moyer"
            title="Free For Charity Founder/ President of the Board"
            linkedinUrl="https://www.linkedin.com/in/clarkemoyer/"
          />
          <TeamMemberCard
            imageUrl="/Images/member2.webp"
            name="Chris Rae"
            title="Free For Charity Vice President"
            linkedinUrl="https://www.linkedin.com/in/christopher-rae-540493a5/"
          />
          <TeamMemberCard
            imageUrl="/Images/member3.webp"
            name="Tyler Carlotto"
            title="Free For Charity Secretary"
            linkedinUrl="https://www.linkedin.com/in/tylercarlotto/"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mt-[40px] gap-[30px]">
          <TeamMemberCard
            imageUrl="/Images/member4.webp"
            name="Brennan Darling"
            title="Free For Charity Treasurer"
            linkedinUrl="https://www.linkedin.com/in/brennon-darling-80953038/"
          />
          <TeamMemberCard
            imageUrl="/Images/member5.webp"
            name="Rebecca Cook"
            title="Free For Charity Member at Large"
            linkedinUrl="https://www.linkedin.com/in/rebecca-cook-a91599265/"
          />
        </div>
      </div>
    </div>
  )
}

export default index
