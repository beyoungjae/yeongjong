import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'

const SlideContainer = styled.div`
   position: relative;
   width: 100%;
   height: 100vh;
   overflow: hidden;
`

const SlideContent = styled(motion.div)`
   position: relative;
   height: 100%;
   overflow: hidden;

   &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.5) 100%);
      z-index: 1;
   }

   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform-origin: center;
      transition: transform 8s ease;
   }

   &:hover img {
      transform: scale(1.1);
   }
`

const TextOverlay = styled(motion.div)`
   position: absolute;
   bottom: 15%;
   left: 10%;
   color: white;
   z-index: 2;
   max-width: 800px;
   padding: 4rem;
   background: rgba(0, 0, 0, 0.3);
   backdrop-filter: blur(10px);
   border-radius: 30px;
   border: 1px solid rgba(255, 255, 255, 0.1);

   h3 {
      font-size: 4.5rem;
      font-weight: 700;
      margin-bottom: 2rem;
      background: linear-gradient(45deg, #fff, #e0e0e0);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
   }

   p {
      font-size: 1.8rem;
      line-height: 1.6;
      font-weight: 300;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
   }
`

const StyledSwiper = styled(Swiper)`
   width: 100%;
   height: 100%;

   .swiper-button-next,
   .swiper-button-prev {
      color: white;
      width: 60px;
      height: 60px;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 50%;
      backdrop-filter: blur(4px);
      transition: all 0.3s ease;

      &::after {
         font-size: 2.2rem;
      }

      &:hover {
         background: rgba(33, 147, 176, 0.8);
         transform: scale(1.1);
      }
   }

   .swiper-pagination-bullet {
      width: 50px;
      height: 4px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 2px;
      transition: all 0.3s ease;

      &-active {
         background: #2193b0;
         width: 70px;
      }
   }
`

const slideVariants = {
   enter: { opacity: 0, scale: 1.1 },
   center: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
   },
   exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.4 },
   },
}

const textVariants = {
   hidden: { opacity: 0, y: 50 },
   visible: {
      opacity: 1,
      y: 0,
      transition: {
         delay: 0.5,
         duration: 0.8,
         ease: 'easeOut',
      },
   },
}

function Slideshow() {
   const slides = [
      {
         title: '마시안 해변',
         description: '일몰 명소로 유명하여 캠핑을 하며 노을을 감상하는 여행객이 많습니다.',
         imgSrc: '/images/영종도-마시안해변1번.jpg',
      },
      {
         title: '영종 씨 사이드 레일 바이크',
         description: '영종 레일 바이크는 4인승 구조로 씨사이드파크의 해안을 따라 왕복 5.6km의 선로를 타고 달립니다.',
         imgSrc: '/images/영종레일바이크.jpg',
      },
      {
         title: '을왕리 해변',
         description: '을왕리 해변은 백사장 길이는 약 700m, 평균 수심은 1.5m로 비교적 규모가 큰 해수욕장입니다.',
         imgSrc: '/images/을왕리해변2.jpg',
      },
   ]

   return (
      <SlideContainer>
         <StyledSwiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
               delay: 5000,
               disableOnInteraction: false,
            }}
            pagination={{
               clickable: true,
            }}
            navigation={true}
            loop={true}
            effect="fade"
            speed={1000}
         >
            {slides.map((slide, index) => (
               <SwiperSlide key={index}>
                  <SlideContent variants={slideVariants} initial="enter" animate="center" exit="exit">
                     <img src={slide.imgSrc} alt={slide.title} />
                     <TextOverlay variants={textVariants} initial="hidden" animate="visible">
                        <h3>{slide.title}</h3>
                        <p>{slide.description}</p>
                     </TextOverlay>
                  </SlideContent>
               </SwiperSlide>
            ))}
         </StyledSwiper>
      </SlideContainer>
   )
}

export default Slideshow
