import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Header from '../../src/components/header'

// Extend Jest matchers
expect.extend(toHaveNoViolations)

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
}))

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => (
      <div {...props}>{children}</div>
    ),
    nav: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => (
      <nav {...props}>{children}</nav>
    ),
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
}))

describe('Header component', () => {
  it('should render the header', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('should display the Free For Charity logo', () => {
    render(<Header />)
    // Check for logo image with alt text
    expect(screen.getByAltText('Free For Charity')).toBeInTheDocument()
  })

  it('should display Home navigation link', () => {
    render(<Header />)
    // Home link should always be present in navigation
    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it('should have navigation links', () => {
    render(<Header />)
    // Check that navigation has at least some links
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })

  it('should have a mobile menu button', () => {
    render(<Header />)
    // Look for the menu icon button
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('should have search functionality button', () => {
    render(<Header />)
    const buttons = screen.getAllByRole('button')
    // Should have at least menu and search buttons
    expect(buttons.length).toBeGreaterThanOrEqual(2)
  })

  it('should have a Donate Now link for desktop', () => {
    render(<Header />)
    // Default render: desktop Donate Now CTA is present (mobile menu is closed by default)
    const donateLinks = screen.getAllByText('Donate Now')
    expect(donateLinks).toHaveLength(1)
    // Desktop button carries both 'hidden' and 'lg:flex' to be invisible on mobile
    expect(donateLinks[0]).toHaveClass('hidden', 'lg:flex')
  })

  it('should show Donate Now in mobile menu when hamburger is opened', () => {
    render(<Header />)
    // Open the mobile menu
    const menuButton = screen.getByRole('button', { name: /open menu/i })
    fireEvent.click(menuButton)
    // Both the desktop and mobile Donate Now links should now be visible
    const donateLinks = screen.getAllByText('Donate Now')
    expect(donateLinks).toHaveLength(2)
  })

  it('should have the Donate Now button hidden on mobile via CSS class', () => {
    render(<Header />)
    const donateLinks = screen.getAllByText('Donate Now')
    // The desktop-only Donate Now link must carry both 'hidden' and 'lg:flex' classes
    const desktopDonateLink = donateLinks.find(
      (el) => el.className?.includes('hidden') && el.className?.includes('lg:flex')
    )
    expect(desktopDonateLink).toBeDefined()
  })

  it('should not have accessibility violations', async () => {
    const { container } = render(<Header />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
