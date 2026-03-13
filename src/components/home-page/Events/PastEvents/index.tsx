'use client'
import React, { useMemo, useState } from 'react'

interface EventItem {
  id: number
  title: string
  date: string
  location: string
  type: string
  registrationLink?: string
}

interface PastEventsProps {
  events: EventItem[]
}

const PastEvents: React.FC<PastEventsProps> = ({ events }) => {
  const pastYears = useMemo(() => {
    const years = events.map((e) => new Date(e.date).getFullYear())
    return Array.from(new Set(years)).sort((a, b) => b - a)
  }, [events])

  const [selectedYear, setSelectedYear] = useState<number>(pastYears[0] ?? new Date().getFullYear())

  const pastEventsByYear = useMemo(() => {
    return events.filter((e) => new Date(e.date).getFullYear() === selectedYear)
  }, [events, selectedYear])

  const getPastEventsCount = (year: number) =>
    events.filter((e) => new Date(e.date).getFullYear() === year).length

  return (
    <section className="events-page-past-section mt-16">
      <h2 className="events-page-section-title events-page-past-title">Past Events</h2>

      {pastYears.length > 0 && (
        <div className="events-page-year-tabs">
          {pastYears.map((year) => (
            <button
              key={year}
              className={year === selectedYear ? 'active' : ''}
              onClick={() => setSelectedYear(year)}
            >
              {year} ({getPastEventsCount(year)})
            </button>
          ))}
        </div>
      )}

      {pastEventsByYear.length > 0 ? (
        <table className="events-page-past-events-table">
          <thead>
            <tr>
              <th>Event</th>
              <th>Date</th>
              <th>Location</th>
            </tr>
          </thead>

          <tbody>
            {pastEventsByYear.map((event, i) => (
              <tr key={event.id} className={i % 2 === 1 ? 'alt' : ''}>
                <td>{event.title}</td>
                <td>
                  {new Date(event.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: '2-digit',
                    year: 'numeric',
                  })}
                </td>
                <td>{event.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-events">No events for {selectedYear}.</p>
      )}
    </section>
  )
}

export default PastEvents
