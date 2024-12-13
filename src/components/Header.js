import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

const HeaderContainer = styled(motion.header)`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 90px;
   background: ${(props) => (props.$scrolled ? 'rgba(255, 255, 255, 0.95)' : 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3))')};
   backdrop-filter: blur(10px);
   z-index: 1004;
   transition: all 0.4s ease;
   box-shadow: ${(props) => (props.$scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none')};
`

const HeaderInner = styled.div`
   width: 100%;
   max-width: 1700px;
   margin: 0 auto;
   height: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 3rem;
`

const Logo = styled(motion.div)`
   display: flex;
   align-items: center;
   gap: 1.5rem;
   cursor: pointer;

   a {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      text-decoration: none;
   }

   img {
      height: 45px;
      filter: ${(props) => (props.$scrolled ? 'none' : 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))')};
      transition: all 0.3s ease;
   }

   h1 {
      font-size: 2.8rem;
      font-weight: 700;
      background: ${(props) => (props.$scrolled ? 'linear-gradient(45deg, #2193b0, #6dd5ed)' : '#fff')};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: all 0.3s ease;
      text-shadow: ${(props) => (props.$scrolled ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.2)')};
   }
`

const LogoLink = styled(NavLink)`
   display: flex;
   align-items: center;
   gap: 1.5rem;
   text-decoration: none;

   &:hover {
      img {
         transform: scale(1.05);
      }

      h1 {
         transform: translateX(5px);
      }
   }

   img,
   h1 {
      transition: all 0.3s ease;
   }
`

const Nav = styled(motion.nav)`
   display: flex;
   align-items: center;
   gap: 2rem;
`

const NavList = styled(motion.ul)`
   display: flex;
   gap: 3rem;
   list-style: none;
`

const NavItem = styled(motion.li)`
   position: relative;

   a {
      font-size: 1.8rem;
      font-weight: 500;
      color: ${(props) => (props.$scrolled ? '#333' : 'white')};
      text-decoration: none;
      padding: 1rem 1.5rem;
      border-radius: 12px;
      transition: all 0.3s ease;

      &:hover {
         background: ${(props) => (props.$scrolled ? 'rgba(33, 147, 176, 0.1)' : 'rgba(255, 255, 255, 0.1)')};
      }

      &.active {
         background: ${(props) => (props.$scrolled ? '#2193b0' : 'rgba(255, 255, 255, 0.2)')};
         color: ${(props) => (props.$scrolled ? 'white' : 'white')};
      }
   }
`

const MegaMenu = styled(motion.div)`
   position: absolute;
   top: 100%;
   left: 50%;
   transform: translateX(-50%);
   background: white;
   border-radius: 16px;
   padding: 2rem;
   min-width: 250px;
   box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
   opacity: 0;
   visibility: hidden;
   transition: all 0.3s ease;

   &::before {
      content: '';
      position: absolute;
      top: -8px;
      left: 50%;
      transform: translateX(-50%);
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 8px solid white;
   }

   ${NavItem}:hover & {
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) translateY(10px);
   }
`

const MegaMenuItem = styled(motion.li)`
   a {
      display: block;
      padding: 1.2rem 2rem;
      color: #333;
      font-size: 1.6rem;
      border-radius: 8px;
      transition: all 0.2s ease;

      &:hover {
         background: rgba(33, 147, 176, 0.1);
         color: #2193b0;
         transform: translateX(5px);
      }
   }
`

const Header = () => {
   const [scrolled, setScrolled] = useState(false)
   const navigate = useNavigate()

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 50)
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
   }, [])

   const handleLogoClick = () => {
      navigate('/')
      window.scrollTo({ top: 0, behavior: 'smooth' })
   }

   return (
      <HeaderContainer $scrolled={scrolled} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
         <HeaderInner>
            <Logo $scrolled={scrolled} whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
               <LogoLink to="/" onClick={handleLogoClick}>
                  <img src="/images/로고 최종형.png" alt="영종도 로고" />
                  <h1>영종도</h1>
               </LogoLink>
            </Logo>

            <Nav>
               <NavList>
                  <NavItem $scrolled={scrolled}>
                     <NavLink to="/directions/info">교통안내</NavLink>
                  </NavItem>
                  <NavItem $scrolled={scrolled}>
                     <NavLink to="/introduction">영종도 소개</NavLink>
                  </NavItem>
                  <NavItem $scrolled={scrolled}>
                     <NavLink to="/board">게시판</NavLink>
                     <MegaMenu>
                        <MegaMenuItem whileHover={{ x: 5 }}>
                           <NavLink to="/board/free">자유게시판</NavLink>
                        </MegaMenuItem>
                        <MegaMenuItem whileHover={{ x: 5 }}>
                           <NavLink to="/board/reviews">여행후기</NavLink>
                        </MegaMenuItem>
                        <MegaMenuItem whileHover={{ x: 5 }}>
                           <NavLink to="/board/qna">질문답변</NavLink>
                        </MegaMenuItem>
                     </MegaMenu>
                  </NavItem>
               </NavList>
            </Nav>
         </HeaderInner>
      </HeaderContainer>
   )
}

export default Header
