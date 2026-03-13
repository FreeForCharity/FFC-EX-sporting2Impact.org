import React, { useMemo } from 'react'
import events from '@/data/events/events.json'
import PastEvents from './PastEvents'

const Events = () => {
  return (
    <div id="events" className="py-[52px]">
      <div className="w-[90%] mx-auto max-w-[1280px]">
        <h1
          className="font-[400] text-[40px] lg:text-[48px] leading-[100%] tracking-[0] text-center mx-auto mb-[50px]"
          id="faustina-font"
        >
          Upcoming Events
        </h1>

        <ul className="events-page-events-list">
          {getUpcomingEvents().map((event) => (
            <li
              key={event.id}
              className="events-page-event-card"
              style={{ backgroundImage: `url(/events/${event.type}.png)` }}
            >
              <div className="events-page-date-badge text-center">
                <span className="month">
                  {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                </span>
                <span className="day">
                  {new Date(event.date).toLocaleDateString('en-US', { day: 'numeric' })}
                </span>
              </div>
              <div className="events-page-category-tag">
                {event.type
                  .trim()
                  .split(' ')
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ')}
              </div>
              <div className="events-page-event-content">
                <h3>{event.title}</h3>
                <p>
                  <span className="event-label">📅 Date:</span>{' '}
                  {new Date(event.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                  })}
                </p>
                <p>
                  <span className="event-label">📍 Location:</span> {event.location}
                </p>
                <div className="events-page-event-footer">
                  {!event.registrationLink && (
                    <button className="events-page-registeration">Walk In</button>
                  )}
                  {event.registrationLink && (
                    <a
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="events-page-registeration"
                    >
                      Register
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="w-[95%] mt-[50px] mx-auto border border-[#2B627B]"></div>
        <h1
          className="font-[400] text-[40px] lg:text-[48px] leading-[100%] tracking-[0] text-center mx-auto mb-[50px]"
          id="faustina-font"
        >
          Past Events
        </h1>
        {/* Insert Past Events Here */}
        <PastEvents events={events} />
      </div>
      <div className="w-[95%] mt-[50px] mx-auto border border-[#2B627B]"></div>
    </div>
  )
}

interface Event {
  id: number
  title: string
  date: string
  location: string
  registrationLink: string
  type: string
}

function getUpcomingEvents(): Event[] {
  // Current time in EST
  const now = new Date()
  const nowEST = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }))

  // 2 weeks from now in EST
  const twoWeeksEST = new Date(nowEST)
  twoWeeksEST.setDate(nowEST.getDate() + 30)

  return events
    .map((e) => {
      // Convert event date to EST (including time)
      const eventDateEST = new Date(
        new Date(e.date).toLocaleString('en-US', { timeZone: 'America/New_York' })
      )
      return { ...e, eventDateEST }
    })
    .filter(
      (e: { eventDateEST: Date }) => e.eventDateEST >= nowEST && e.eventDateEST <= twoWeeksEST
    )
    .sort(
      (a: { eventDateEST: Date }, b: { eventDateEST: Date }) =>
        a.eventDateEST.getTime() - b.eventDateEST.getTime()
    )
}

export default Events
