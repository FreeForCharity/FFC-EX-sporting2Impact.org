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

      <section className="team-section">
        <h2 className="section-title">Founders</h2>
        <div className="team-grid w-[90%] mx-auto py-[40px]">
          <div className="team-card founder-card">
            <h3 className="team-name">k</h3>
            <p>
              <strong>Role:</strong>
            </p>
            <p className="team-bio">
              <strong>Biography:</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2 className="section-title">Board of Directors</h2>
        <div className="team-grid borad-grid w-[90%] mx-auto py-[40px]">
          <div className="team-card horizontal">
            <div className="details">
              <h3 className="team-name">k</h3>
              <p>
                <strong>School:</strong>
              </p>
              <p>
                <strong>Grade:</strong>
              </p>
              <p>
                <strong>Duration:</strong>
              </p>
              <p>
                <strong>Role:</strong>
              </p>
              <p className="team-bio">
                <strong>Biography:</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default index
