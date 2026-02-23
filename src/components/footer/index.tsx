'use client'

import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer: React.FC = () => {
  const currentYear = React.useMemo(() => new Date().getFullYear(), [])
  const socialLinks = [
    {
      icon: FaFacebookF,
      href: 'https://www.facebook.com/share/1Ng59r4s8V/?mibextid=wwXIfr',
      label: 'Facebook',
    },
    {
      icon: FaLinkedinIn,
      href: 'https://www.linkedin.com/company/sporting2impact/',
      label: 'LinkedIn',
    },
    {
      icon: FaGithub,
      href: 'https://github.com/FreeForCharity/FFC-EX-sporting2Impact.org',
      label: 'GitHub',
    },
  ]
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12 px-4 md:px-6 lg:px-8">
        {/* Column 1: Endorsements */}
        <div className="space-y-6 px-4 sm:px-0">
          <h3 className="text-[28px] text-white">Endorsements</h3>

          <div className="space-y-4">
            <a
              href="https://app.candid.org/profile/16347048/sporting2impact-inc-33-4148206"
              aria-label="View Sporting2Impact GuideStar Profile"
            >
              <img src="/Svgs/footerImage.svg" alt="GuideStar Platinum Seal of Transparency" />
            </a>
            <Link
              href="https://app.candid.org/profile/16347048/sporting2impact-inc-33-4148206"
              className="group relative my-4 flex w-full max-w-[230px] items-center justify-between
                border-2 border-[#2ea3f2] bg-black px-5 py-2.5 text-[#2ea3f2]
                transition-all duration-300 hover:border-transparent"
              id="aria-font"
            >
              <span className="text-[17px] font-medium leading-tight sm:text-[18px] md:text-[20px] transition-transform duration-300 group-hover:-translate-x-1">
                Direct GuideStar Profile Link
              </span>

              <ArrowRight
                className="h-8 w-8 translate-x-2 opacity-0 text-[#2ea3f2] transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                strokeWidth={2}
              />
            </Link>

            <p>
              <span className="font-[500] text-[22px]">Sporting2Impact EIN: 33-4148206</span>
            </p>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-6 px-4 sm:px-0">
          <h3 className="text-[28px] text-white">Quick Links</h3>

          <ul className="space-y-2 text-sm" id="lato-font">
            {[
              { name: 'Home', href: '/#hero' },
              { name: 'Mission', href: '/#mission' },
              { name: 'Programs', href: '/#programs' },
              { name: 'Events', href: '/#events' },
              { name: 'Donate', href: '/#donate' },
              { name: 'Volunteer', href: '/#volunteer' },
              { name: 'FAQ', href: '/#faq' },
              { name: 'Team', href: '/#team' },
              {
                name: 'Supported Charity Login',
                href: 'https://freeforcharity.org/hub/',
              },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  className="hover:text-[#F58C23] hover:tracking-widest transition-all text-[16px] font-[500]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="space-y-3">
            <h4 className="text-[28px] text-white">Sporting2Impact Policy</h4>
            <ul className="space-y-1 text-sm" id="lato-font">
              {[
                {
                  name: 'Sporting2Impact Donation Policy',
                  href: '/sporting2impact-donation-policy',
                },
                {
                  name: 'Donation Policy',
                  href: '/donation-policy',
                },
                {
                  name: 'Sporting2Impact Privacy Policy',
                  href: '/privacy-policy',
                },
                {
                  name: 'Sporting2Impact Cookie Policy',
                  href: '/cookie-policy',
                },
                {
                  name: 'Sporting2Impact Terms of Service',
                  href: '/terms-of-service',
                },
                {
                  name: 'Sporting2Impact Vulnerability Disclosure Policy',
                  href: '/vulnerability-disclosure-policy',
                },
                {
                  name: 'Sporting2Impact Security Acknowledgement',
                  href: '/security-acknowledgements',
                },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#F58C23] hover:tracking-widest transition-all text-[16px] font-[500]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 3: Contact Us */}
        <div className="space-y-6 px-4 sm:px-0">
          <h3 className="text-[28px] text-white">Contact Us</h3>

          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <Mail className="w-10 h-10 text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-[500] text-[22px]">E-mail</p>
                <a
                  href="mailto:info@sporting2impact.org"
                  className="font-[500] text-[15px] hover:text-cyan-400 transition-colors break-all"
                  id="aria-font"
                >
                  info@sporting2impact.org
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-10 h-10 text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-[500] text-[22px]">Call Us Today</p>
                <a
                  href="tel:6674792048"
                  className="font-[500] text-[16px] hover:text-cyan-400 transition-colors"
                  id="aria-font"
                >
                  +1 (667) 479-2048
                </a>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Ellicott+City+MD+21043&query_place_id=ChIJiQyXo9nqDk8RjMDsIEy7lI0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open main address in Google Maps"
              className="flex items-start gap-3 hover:opacity-80 transition-opacity"
            >
              <MapPin className="w-10 h-10 text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-[500] text-[22px]">Main Address</p>
                <p className="font-[500] text-[16px]" id="aria-font">
                  Ellicott City 21043
                </p>
              </div>
            </a>

            <div className="flex gap-3 pt-4">
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors"
                >
                  <Icon className="w-6 h-6 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="mt-12 py-6 px-4 border-t border-gray-800 text-center text-[18px] font-[500] w-full"
        id="aria-font"
      >
        <p>
          © {currentYear} All Rights Are Reserved by Sporting2Impact a US 501 (c)(3) Non Profit | A
          project of{' '}
          <Link
            href="https://sporting2impact.org"
            className="underline text-[#2EA3F2] hover:text-[#2EA3F2] transition-colors"
          >
            https://sporting2impact.org
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
