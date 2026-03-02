import React from 'react'
import Image from 'next/image'

const index = () => {
  return (
    <div id="volunteer" className="bg-[#2A6682] py-[40px]">
      <div className="w-[90%] mx-auto lg:px-[20px]">
        <h1
          className="mt-[2px] mb-[42px] pb-[10px] text-[30px] md:text-[48px] font-[400] leading-[46px] text-center text-white"
          id="faustina-font"
        >
          Volunteer with Us
        </h1>
        <div className="joinus-page-container">
          {/* HERO BANNER */}
          <section className="joinus-hero">
            <h1>Join Us in Building a Healthier Community</h1>
            <p>
              Be part of our mission to promote wellness, fitness, sports, and community engagement.
              Whether you want to volunteer, donate, collaborate, or sponsor — there’s a place for
              you here.
            </p>
            {/* <button className="hero-btn">Get Involved</button> */}
          </section>

          {/* WHAT WE DO */}
          <section className="joinus-section joinus-intro">
            <h2>What We Do</h2>
            <p>
              We are committed to building a healthier, more connected community through wellness,
              fitness, sports, and educational programs. Our mission is to create accessible
              opportunities for individuals and families to stay active, learn new skills, and
              participate in meaningful community events.
            </p>
            <p>
              Whether it’s organizing fitness workshops, hosting sports events, offering wellness
              programs, or collaborating with local partners, we strive to make a positive impact
              year-round.
            </p>
          </section>

          {/* HOW YOU CAN HELP (GRID WITH ICONS) */}
          <section className="joinus-section joinus-help">
            <h2>How You Can Help</h2>
            <p>
              Your support helps us expand our programs, reach more families, and bring high‑quality
              health, fitness, and sports activities to the community.
            </p>

            <div className="help-grid">
              {/* Donation */}
              <div className="help-card">
                <div className="help-icon">💙</div>
                <h3>Donation</h3>
                <p>Your contributions directly support our programs and community initiatives.</p>
                <a
                  href="https://www.zeffy.com/en-US/donation-form/donate-to-keep-community-healthy"
                  className="help-btn primary-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donate Now
                </a>
              </div>

              {/* Volunteering */}
              <div className="help-card">
                <div className="help-icon">🤝</div>
                <h3>Volunteering</h3>
                <p>Visit our Idealist page to see current volunteer opportunities.</p>
                <a
                  href="https://www.idealist.org/en/nonprofit/f70e4f401859448cb4304eed9f2a00a0-sporting2impact-inc-ellicott-city"
                  className="help-btn secondary-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Current Opportunities
                </a>
              </div>

              {/* Host an Event */}
              <div className="help-card">
                <div className="help-icon">🏅</div>
                <h3>Host an Event</h3>
                <p>Collaborate with us to conduct health, fitness, or sports events.</p>
                <a className="help-btn tertiary-btn">Contact Us</a>
              </div>

              {/* Sponsorship */}
              <div className="help-card">
                <div className="help-icon">🎉</div>
                <h3>Sponsorship</h3>
                <p>Partner with us to support our mission and gain community visibility.</p>
                <a className="help-btn tertiary-btn">Contact Us</a>
              </div>
            </div>
          </section>

          {/* CONTACT FORM */}
          {/* <section className="joinus-section joinus-contact">
  <h2>Contact Us</h2>
  <p>If you’d like to reach out directly, here’s how you can contact us:</p>

  <div className="contact-info-box">
    <p><strong>Email:</strong> <a href="mailto:info@sporting2impact.org"> info@sporting2impact.org</a></p>
    <p><strong>Phone:</strong> <a href="tel:+16674792048">+1 (667)-479-2048</a></p>
  </div>
</section> */}

          {/* SPONSOR LOGOS */}
          {/*<section class="joinus-section joinus-sponsors">
    <h2>Our Sponsors</h2>
    <p>We are grateful for the support of our community partners.</p>

    <div class="sponsor-logos">
      <div class="sponsor-logo">Logo 1</div>
      <div class="sponsor-logo">Logo 2</div>
      <div class="sponsor-logo">Logo 3</div>
      <div class="sponsor-logo">Logo 4</div>
    </div>
  </section> */}

          {/*  VOLUNTEER SIGNUP FORM */}
          {/*
  <section class="joinus-section joinus-volunteer">
    <h2>Volunteer Signup</h2>
    <p>Join our volunteer team and help us make a difference.</p>

    <form class="volunteer-form">
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email Address" required />
      <input type="text" placeholder="Phone Number" />
      <textarea placeholder="Tell us why you want to volunteer" rows="4"></textarea>
      <button type="submit" class="cta-primary">Sign Up</button>
    </form>
  </section>  */}
        </div>
      </div>
    </div>
  )
}

export default index
