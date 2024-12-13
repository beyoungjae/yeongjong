import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

const IntroContainer = styled(motion.div)`
   position: relative;
   overflow: hidden;
`

const BackgroundSlider = styled(Swiper)`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
   z-index: -1;

   .swiper-slide img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
      filter: brightness(0.7);
      transition: all 1.5s ease;
   }

   &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 100%);
      z-index: 1;
   }
`

const Section = styled(motion.section)`
   min-height: 100vh;
   display: flex;
   align-items: center;
   position: relative;
   padding: 8rem 4rem;
   overflow: hidden;

   &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${(props) => props.$overlay || 'rgba(0, 0, 0, 0.5)'};
      z-index: 1;
   }

   @media (max-width: 768px) {
      padding: 6rem 2rem;
   }
`

const ParallaxBackground = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   z-index: 0;

   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
   }
`

const SectionContent = styled(motion.div)`
   position: relative;
   z-index: 2;
   color: white;
   max-width: 1200px;
   margin: 0 auto;
   width: 100%;
   display: flex;
   gap: 6rem;
   align-items: center;

   @media (max-width: 1024px) {
      flex-direction: column;
      gap: 4rem;
   }
`

const TextContent = styled(motion.div)`
   flex: 1;

   h2 {
      font-size: 5rem;
      font-weight: 800;
      margin-bottom: 2rem;
      background: linear-gradient(45deg, #fff, #e0e0e0);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
   }

   p {
      font-size: 1.8rem;
      line-height: 1.8;
      margin-bottom: 3rem;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
   }

   ul {
      list-style: none;
      padding: 0;

      li {
         font-size: 1.6rem;
         margin-bottom: 1.5rem;
         display: flex;
         align-items: center;
         gap: 1rem;

         &::before {
            content: '•';
            color: #2193b0;
         }
      }
   }
`

const ImageContent = styled(motion.div)`
   flex: 1;
   position: relative;
   height: 500px;
   border-radius: 25px;
   overflow: hidden;
   box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
`

const DetailSection = ({ title, description, details, image, overlay, reversed }) => {
   const { scrollYProgress } = useScroll()
   const y = useTransform(scrollYProgress, [0, 1], [0, 200])

   return (
      <Section $overlay={overlay}>
         <ParallaxBackground style={{ y }}>
            <img src={image} alt={title} />
         </ParallaxBackground>
         <SectionContent initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} style={{ flexDirection: reversed ? 'row-reverse' : 'row' }}>
            <TextContent>
               <h2>{title}</h2>
               <p>{description}</p>
               <ul>
                  {details.map((detail, index) => (
                     <li key={index}>{detail}</li>
                  ))}
               </ul>
            </TextContent>
            <ImageContent initial={{ opacity: 0, x: reversed ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
               <img src={image} alt={title} />
            </ImageContent>
         </SectionContent>
      </Section>
   )
}

const ContentSection = styled(motion.div)`
   position: relative;
   z-index: 2;
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 8rem 4rem;
   color: white;
   max-width: 1400px;
   margin: 0 auto;

   @media (max-width: 768px) {
      padding: 6rem 2rem;
   }
`

const MainTitle = styled(motion.h1)`
   font-size: 7rem;
   font-weight: 800;
   margin-bottom: 3rem;
   background: linear-gradient(45deg, #fff, #e0e0e0);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

   @media (max-width: 768px) {
      font-size: 5rem;
   }
`

const Subtitle = styled(motion.p)`
   font-size: 2.4rem;
   font-weight: 300;
   margin-bottom: 6rem;
   line-height: 1.6;
   max-width: 800px;
   text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

   @media (max-width: 768px) {
      font-size: 2rem;
   }
`

const Introduction = () => {
   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            duration: 0.8,
            staggerChildren: 0.3,
         },
      },
   }

   const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
         opacity: 1,
         y: 0,
         transition: { duration: 0.5 },
      },
   }

   const sections = [
      {
         title: '환상적인 일몰',
         description: '마시안 해변과 을왕리 해변에서 만나는 황홀한 일몰은 영종도의 가장 아름다운 순간입니다.',
         details: ['해질녘 노을이 물드는 을왕리 해변', '마시안 해변의 로맨틱한 선셋 포인트', '일몰과 함께하는 비치 카페', '석양이 비치는 산책로'],
         image: '/images/중구-영종-마시안해변3번.jpg',
         overlay: 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3))',
      },
      {
         title: '하늘정원',
         description: '도심 속 녹색 쉼터, 하늘정원에서 사계절의 아름다움을 만나보세요.',
         details: ['계절별 테마 가든', '도시를 내려다보는 전망대', '사진 촬영 명소', '힐링 산책로'],
         image: '/images/2022-중구-영종도_하늘정원.jpg',
         overlay: 'linear-gradient(to left, rgba(0,0,0,0.7), rgba(0,0,0,0.3))',
      },
      {
         title: '해양레저',
         description: '을왕리와 마시안 해변에서 즐기는 다양한 해양레저 활동으로 특별한 추억을 만들어보세요.',
         details: ['초보자도 즐길 수 있는 서핑 강습', '스릴 넘치는 제트스키', '가족과 함께하는 바나나보트', '선셋 요트 투어'],
         image: '/images/중구-영종도-마시안해변2번.jpg',
         overlay: 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3))',
      },
      {
         title: '비치캠핑',
         description: '마시안 해변의 글램핑장에서 럭셔리한 캠핑을 즐기며 로맨틱한 밤을 보내보세요.',
         details: ['오션뷰 글램핑 사이트', '바다를 바라보며 즐기는 바베큐', '별들과 함께하는 캠프파이어', '아침 해변 요가 클래스'],
         image: '/images/중구-영종도-마시안해변4번.jpg',
         overlay: 'linear-gradient(to left, rgba(0,0,0,0.7), rgba(0,0,0,0.3))',
      },
      {
         title: '레일바이크',
         description: '바다를 따라 달리는 영종 씨사이드 레일바이크에서 시원한 바닷바람과 함께 특별한 체험을 해보세요.',
         details: ['5.6km의 해안 노선', '인생샷 포토존', '야간 LED 라이딩', '연인과 함께하는 로맨틱 코스'],
         image: '/images/영종레일바이크.jpg',
         overlay: 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3))',
      },
      {
         title: '맛집 탐방',
         description: '신선한 해산물부터 현지 맛집까지, 영종도의 다채로운 미식 여행을 즐겨보세요.',
         details: ['을왕리 포장마차거리의 활기찬 분위기', '신선한 회와 해산물 요리', '현지인이 추천하는 숨은 맛집', '오션뷰 레스토랑의 로맨틱한 식사'],
         image: '/images/을왕리해변2.jpg',
         overlay: 'linear-gradient(to left, rgba(0,0,0,0.7), rgba(0,0,0,0.3))',
      },
   ]

   return (
      <IntroContainer variants={containerVariants} initial="hidden" animate="visible">
         <BackgroundSlider
            modules={[EffectFade, Autoplay, Pagination]}
            effect="fade"
            autoplay={{
               delay: 5000,
               disableOnInteraction: false,
            }}
            loop={true}
            pagination={{ clickable: true }}
         >
            {sections.map((section, index) => (
               <SwiperSlide key={index}>
                  <img src={section.image} alt={section.title} />
               </SwiperSlide>
            ))}
         </BackgroundSlider>

         <ContentSection>
            <MainTitle initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
               천혜의 자연과 현대적 감성이 공존하는 곳
            </MainTitle>
            <Subtitle initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
               인천국제공항이 있는 관문도시이자, 아름다운 해변과 현대적인 시설이 어우러진 영종도에서 특별한 순간을 만나보세요.
            </Subtitle>
         </ContentSection>

         {sections.map((section, index) => (
            <DetailSection key={index} {...section} reversed={index % 2 === 1} />
         ))}
      </IntroContainer>
   )
}

export default Introduction
