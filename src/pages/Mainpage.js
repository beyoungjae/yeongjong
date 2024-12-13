import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, useScroll, useSpring } from 'framer-motion'
import Slideshow from '../components/Slideshow'
import NoticeSection from '../components/NoticeSection'

const MainContainer = styled(motion.div)`
   position: relative;
   overflow: hidden;
   scroll-snap-type: y mandatory;
   height: 100vh;
   overflow-y: auto;
   scroll-behavior: smooth;

   & > section {
      scroll-snap-align: start;
      scroll-snap-stop: always;
   }
`

const SlideSection = styled.section`
   height: 100vh;
   width: 100%;
`

const ProgressBar = styled(motion.div)`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   height: 3px;
   background: linear-gradient(90deg, #2193b0, #6dd5ed);
   transform-origin: 0%;
   z-index: 1005;
`

const ScrollIndicator = styled(motion.div)`
   position: fixed;
   bottom: 40px;
   left: 50%;
   transform: translateX(-50%);
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1rem;
   color: #2193b0;
   z-index: 1000;
   pointer-events: none;

   svg {
      width: 24px;
      height: 24px;
      animation: bounce 2s infinite;
   }

   @keyframes bounce {
      0%,
      20%,
      50%,
      80%,
      100% {
         transform: translateY(0);
      }
      40% {
         transform: translateY(-10px);
      }
      60% {
         transform: translateY(-5px);
      }
   }
`

const ScrollText = styled.span`
   font-size: 1.4rem;
   font-weight: 500;
   text-transform: uppercase;
   letter-spacing: 2px;
   color: #2193b0;
`

function Mainpage() {
   const [showScroll, setShowScroll] = useState(true)
   const { scrollYProgress } = useScroll()
   const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
   })

   useEffect(() => {
      const handleScroll = () => {
         const scrollPosition = window.scrollY
         const windowHeight = window.innerHeight
         const documentHeight = document.documentElement.scrollHeight

         setShowScroll(scrollPosition < (documentHeight - windowHeight) * 0.8)
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
   }, [])

   return (
      <MainContainer>
         <ProgressBar style={{ scaleX }} />

         <SlideSection>
            <Slideshow />
         </SlideSection>

         <NoticeSection />

         {showScroll && (
            <ScrollIndicator initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }}>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
               </svg>
               <ScrollText>Scroll Down</ScrollText>
            </ScrollIndicator>
         )}
      </MainContainer>
   )
}

export default Mainpage
