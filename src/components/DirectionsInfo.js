import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const InfoContainer = styled(motion.div)`
   padding: 4rem;
   max-width: 1200px;
   margin: 0 auto;

   @media (max-width: 768px) {
      padding: 2rem;
   }
`

const Section = styled(motion.section)`
   margin-bottom: 4rem;
   background: white;
   padding: 3rem;
   border-radius: 20px;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
   border: 1px solid rgba(255, 255, 255, 0.8);
   transition: all 0.3s ease;

   &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
   }
`

const Title = styled.h3`
   font-size: 2.4rem;
   color: #2193b0;
   margin-bottom: 2rem;
   padding-bottom: 1rem;
   border-bottom: 2px solid #f0f0f0;
   display: flex;
   align-items: center;
   gap: 1rem;
`

const Icon = styled.span`
   font-size: 2.8rem;
`

const Content = styled.div`
   font-size: 1.6rem;
   line-height: 1.8;
   color: #666;

   p {
      margin-bottom: 1.5rem;
   }

   ul {
      list-style: none;
      padding-left: 2rem;

      li {
         position: relative;
         margin-bottom: 1rem;
         padding-left: 2rem;

         &::before {
            content: '•';
            position: absolute;
            left: 0;
            color: #2193b0;
         }
      }
   }
`

const TransportInfo = styled.div`
   background: #f8f9fa;
   border-radius: 15px;
   padding: 2rem;
   margin-top: 1.5rem;

   h4 {
      font-size: 1.8rem;
      color: #333;
      margin-bottom: 1.5rem;
   }

   p {
      margin-bottom: 1rem;
   }
`

const DirectionsInfo = () => {
   const containerVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            duration: 0.6,
            ease: 'easeOut',
         },
      },
   }

   const sectionVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            duration: 0.5,
            ease: 'easeOut',
         },
      },
   }

   return (
      <InfoContainer variants={containerVariants} initial="hidden" animate="visible">
         <Section variants={sectionVariants}>
            <Title>
               <Icon>🚆</Icon>
               공항철도 이용안내
            </Title>
            <Content>
               <p>인천국제공항에서 서울까지 빠르고 편리한 공항철도를 이용하실 수 있습니다.</p>
               <TransportInfo>
                  <h4>운행 정보</h4>
                  <ul>
                     <li>첫차: 05:23 (인천국제공항 → 서울역)</li>
                     <li>막차: 23:40 (인천국제공항 → 서울역)</li>
                     <li>소요시간: 약 43분 (직통열차 기준)</li>
                     <li>운행간격: 12~15분</li>
                  </ul>
               </TransportInfo>
            </Content>
         </Section>

         <Section variants={sectionVariants}>
            <Title>
               <Icon>🚌</Icon>
               버스 이용안내
            </Title>
            <Content>
               <p>다양한 버스 노선으로 영종도 각 지역으로 이동하실 수 있습니다.</p>
               <TransportInfo>
                  <h4>주요 버스 노선</h4>
                  <ul>
                     <li>공항리무진: 각 지역별 24시간 운영</li>
                     <li>시내버스: 인천/서울 각 지역 노선</li>
                     <li>마을버스: 영종도 내부 순환</li>
                  </ul>
               </TransportInfo>
            </Content>
         </Section>

         <Section variants={sectionVariants}>
            <Title>
               <Icon>🚗</Icon>
               자가용 이용안내
            </Title>
            <Content>
               <p>영종대교와 인천대교를 통해 편리하게 접근하실 수 있습니다.</p>
               <TransportInfo>
                  <h4>주요 도로 정보</h4>
                  <ul>
                     <li>영종대교: 인천 중구 운서동 방면 (통행료 면제)</li>
                     <li>인천대교: 송도국제도시 방면 (통행료 적용)</li>
                     <li>소요시간: 인천시내에서 약 30~40분</li>
                  </ul>
               </TransportInfo>
            </Content>
         </Section>
      </InfoContainer>
   )
}

export default DirectionsInfo
