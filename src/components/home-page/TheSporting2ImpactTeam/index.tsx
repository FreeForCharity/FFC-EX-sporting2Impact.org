import React from 'react'
import team from '@/data/team/team.json'

const Index = () => {
  const founders = team.filter((member) => member.group === 'Core Team')
  const boardOfDirectors = team.filter((member) => member.group === 'Board of Directors')

  return (
    <div id="team" className="team-container py-16">
      <h1 className="text-4xl lg:text-5xl text-center mb-16" id="faustina-font">
        The Sporting2Impact Team
      </h1>

      {/* Founders Section */}
      <section className="team-section">
        <h2 className="section-title text-blue-800">Founders</h2>
        <div className="team-grid">
          {founders.map((founder, idx) => (
            <div key={`founder-${idx}`} className="team-card founder-card">
              <h3 className="team-name">{founder.name}</h3>
              <p className="role-text">{founder.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="team-section">
        <h2 className="section-title">Board of Directors</h2>
        <div className="team-grid board-grid">
          {boardOfDirectors.map((member, idx) => (
            <div key={`board-${idx}`} className="team-card">
              <div className="details">
                <h3 className="team-name text-lg">{member.name}</h3>
                <p className="role-text !mb-3">{member.role}</p>
                <p>
                  <strong>School:</strong> {member.school}
                </p>
                <p>
                  <strong>Grade:</strong> {member.grade}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Index
