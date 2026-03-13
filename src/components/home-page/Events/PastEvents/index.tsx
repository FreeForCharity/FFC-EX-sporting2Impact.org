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
  // 1. Get current time in EST/Eastern for comparison
  const now = new Date()

  // 2. Filter for truly past events and sort them latest -> oldest
  const allPastEvents = useMemo(() => {
    return events
      .filter((e) => new Date(e.date) < now)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }, [events,now])

  // 3. Extract years from the filtered past events
  const pastYears = useMemo(() => {
    const years = allPastEvents.map((e) => new Date(e.date).getFullYear())
    return Array.from(new Set(years)) // Already sorted because allPastEvents is sorted
  }, [allPastEvents])

  const [selectedYear, setSelectedYear] = useState<number>(pastYears[0] ?? now.getFullYear())

  // 4. Filter by the selected year (sorting is preserved)
  const pastEventsByYear = useMemo(() => {
    return allPastEvents.filter((e) => new Date(e.date).getFullYear() === selectedYear)
  }, [allPastEvents, selectedYear])

  const getPastEventsCount = (year: number) =>
    allPastEvents.filter((e) => new Date(e.date).getFullYear() === year).length

  return (
    <section className="events-page-past-section mt-16">
      <h2 className="events-page-section-title events-page-past-title">Past Events</h2>

      {pastYears.length > 0 ? (
        <>
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
        </>
      ) : (
        <p className="no-events">No past events found.</p>
      )}
    </section>
  )
}

export default PastEvents
