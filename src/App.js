import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import styled, { createGlobalStyle } from 'styled-components'
import Header from './components/Header'
import Mainpage from './pages/Mainpage'
import Welcome from './pages/Welcome'
import Introduction from './components/Introduction'
import './App.css'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    color: #333;
    line-height: 1.5;
    overflow-x: hidden;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #2193b0, #6dd5ed);
    border-radius: 5px;
    transition: all 0.3s ease;

    &:hover {
      background: linear-gradient(45deg, #1c7a94, #5bb9d1);
    }
  }
`

const AppWrapper = styled.div`
   min-height: 100vh;
   position: relative;
   background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);

   &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.8) 0%, transparent 100%);
      pointer-events: none;
      z-index: 0;
   }
`

const ContentWrapper = styled.div`
   position: relative;
   z-index: 1;
`

function App() {
   return (
      <>
         <GlobalStyle />
         <AppWrapper>
            <ContentWrapper>
               <Header />
               <AnimatePresence mode="wait">
                  <Routes>
                     <Route path="/" element={<Mainpage />} />
                     <Route path="/directions">
                        <Route index element={<Welcome />} />
                        <Route path="info" element={<Welcome />} />
                     </Route>
                     <Route path="/introduction" element={<Introduction />} />
                  </Routes>
               </AnimatePresence>
            </ContentWrapper>
         </AppWrapper>
      </>
   )
}

export default App
