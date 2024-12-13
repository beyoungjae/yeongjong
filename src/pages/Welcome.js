import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import DirectionsInfo from '../components/DirectionsInfo'

const DirectionsContainer = styled(motion.div)`
   width: 90%;
   max-width: 1500px;
   margin: 0 auto;
   padding: 2.5rem;
   margin-top: 90px;

   @media (max-width: 1024px) {
      width: 95%;
      padding: 2rem;
   }
`

const Title = styled(motion.h2)`
   font-size: 4.5rem;
   color: #1a1a1a;
   text-align: center;
   margin-bottom: 4rem;
   position: relative;
   font-weight: 700;

   &::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 4px;
      background: linear-gradient(90deg, #2193b0, #6dd5ed);
      border-radius: 2px;
   }
`

const ContentContainer = styled(motion.div)`
   background: rgba(255, 255, 255, 0.8);
   backdrop-filter: blur(10px);
   border-radius: 25px;
   min-height: calc(100vh - 300px);
   overflow: auto;
   box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
   border: 1px solid rgba(255, 255, 255, 0.8);
`

const Welcome = () => {
   return (
      <DirectionsContainer initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
         <Title initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
            영종도 교통 안내
         </Title>
         <ContentContainer initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
            <DirectionsInfo />
         </ContentContainer>
      </DirectionsContainer>
   )
}

export default Welcome
