import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/effect-fade'

const NoticeContainer = styled(motion.section)`
   padding: 10rem 3rem;
   background: linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%);
   position: relative;
   overflow: hidden;

   &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 200px;
      background: linear-gradient(180deg, white 0%, transparent 100%);
      pointer-events: none;
   }
`

const NoticeHeader = styled(motion.div)`
   text-align: center;
   margin-bottom: 7rem;
   position: relative;

   h2 {
      font-size: 4.5rem;
      font-weight: 800;
      color: #1a1a1a;
      margin-bottom: 2rem;
      background: linear-gradient(45deg, #2193b0, #6dd5ed);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
   }

   p {
      font-size: 2.2rem;
      color: #666;

      strong {
         color: #2193b0;
         font-weight: 600;
      }
   }
`

const NoticeGrid = styled(motion.div)`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
   gap: 3rem;
   max-width: 1400px;
   margin: 0 auto;
   padding: 0 2rem;

   @media (max-width: 768px) {
      grid-template-columns: 1fr;
   }
`

const NoticeCard = styled(motion.div)`
   background: rgba(255, 255, 255, 0.9);
   backdrop-filter: blur(10px);
   border-radius: 25px;
   padding: 3rem;
   box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
   border: 1px solid rgba(255, 255, 255, 0.8);
   height: 450px;
   overflow: hidden;
   transition: all 0.4s ease;

   &:hover {
      transform: translateY(-10px);
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
   }

   h3 {
      font-size: 2.4rem;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 2.5rem;
      padding-bottom: 1.5rem;
      border-bottom: 2px solid rgba(33, 147, 176, 0.2);
      position: relative;

      &::after {
         content: '';
         position: absolute;
         bottom: -2px;
         left: 0;
         width: 50px;
         height: 2px;
         background: linear-gradient(90deg, #2193b0, #6dd5ed);
         transition: width 0.3s ease;
      }

      &:hover::after {
         width: 100%;
      }
   }
`

const ImageSlider = styled(Swiper)`
   width: 100%;
   height: 300px;
   border-radius: 15px;
   overflow: hidden;

   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
   }

   &:hover img {
      transform: scale(1.05);
   }
`

const NoticeList = styled.ul`
   list-style: none;
   height: 300px;
   overflow-y: auto;

   &::-webkit-scrollbar {
      width: 6px;
   }

   &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 3px;
   }

   &::-webkit-scrollbar-thumb {
      background: #2193b0;
      border-radius: 3px;
   }

   li {
      padding: 1.5rem 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;

      &:last-child {
         border-bottom: none;
      }

      a {
         display: flex;
         justify-content: space-between;
         align-items: center;
         color: #666;
         text-decoration: none;
         transition: all 0.3s ease;

         &:hover {
            color: #2193b0;
            transform: translateX(10px);
         }

         span {
            font-size: 1.4rem;
            color: #999;
         }
      }
   }
`

const NoticeSection = () => {
   const notices = [
      { title: '마시안 해변 캠핑장 예약 오픈', date: '2024.03.19' },
      { title: '을왕리 해수욕장 환경정비 안내', date: '2024.03.18' },
      { title: '영종도 관광 가이드 발간', date: '2024.03.17' },
      { title: '봄맞이 꽃축제 개최 안내', date: '2024.03.16' },
      { title: '해변 드라이브 코스 추천', date: '2024.03.15' },
   ]

   const containerVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            duration: 0.8,
            ease: 'easeOut',
         },
      },
   }

   const cardVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            duration: 0.6,
            ease: 'easeOut',
         },
      },
   }

   return (
      <NoticeContainer variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
         <NoticeHeader>
            <h2>알림마당</h2>
            <p>
               <strong>영종도</strong>의 새로운 소식을 만나보세요!
            </p>
         </NoticeHeader>
         <NoticeGrid>
            <NoticeCard variants={cardVariants}>
               <h3>추천 명소</h3>
               <ImageSlider
                  modules={[Autoplay, EffectFade]}
                  effect="fade"
                  autoplay={{
                     delay: 3000,
                     disableOnInteraction: false,
                  }}
                  loop={true}
               >
                  <SwiperSlide>
                     <img src="/images/2022-중구-영종도_하늘정원.jpg" alt="추천 명소 1" />
                  </SwiperSlide>
                  <SwiperSlide>
                     <img src="/images/중구-영종도-마시안해변2번.jpg" alt="추천 명소 2" />
                  </SwiperSlide>
               </ImageSlider>
            </NoticeCard>

            <NoticeCard variants={cardVariants}>
               <h3>공지사항</h3>
               <NoticeList>
                  {notices.map((notice, index) => (
                     <motion.li key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                        <Link to="#">
                           {notice.title}
                           <span>{notice.date}</span>
                        </Link>
                     </motion.li>
                  ))}
               </NoticeList>
            </NoticeCard>

            <NoticeCard variants={cardVariants}>
               <h3>축제 정보</h3>
               <ImageSlider
                  modules={[Autoplay, EffectFade]}
                  effect="fade"
                  autoplay={{
                     delay: 3500,
                     disableOnInteraction: false,
                  }}
                  loop={true}
               >
                  <SwiperSlide>
                     <img src="/images/중구-영종도-마시안해변3번.jpg" alt="축제 1" />
                  </SwiperSlide>
                  <SwiperSlide>
                     <img src="/images/중구-영종도-마시안해변4번.jpg" alt="축제 2" />
                  </SwiperSlide>
               </ImageSlider>
            </NoticeCard>
         </NoticeGrid>
      </NoticeContainer>
   )
}

export default NoticeSection
