import React from 'react'
import NavBarc from './NavBarc'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import StorySection from './StorySection'
import FeaturedStories from './FeaturedStories'
import CommunityCollaborations from './CommunityCollaborations'
import CallToActionSection from './CallToActionSection'
import Footer from './Footer'
const ChachaChatoreHome = () => {
  return (
    <div className='bg-[#1b1b1b]  py-1'>
      <NavBarc/>
      <HeroSection/>
      <AboutSection/>
      <StorySection/>
      <FeaturedStories/>
      <CommunityCollaborations/>
      <CallToActionSection/>
      <Footer/>
    </div>
  )
}

export default ChachaChatoreHome