import styled from 'styled-components'

export const SearchContainer = styled.div`
   margin-bottom: 2rem;
   padding: 2rem;
   background: white;
   border-radius: 15px;
   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`

export const SearchInput = styled.input`
   width: 100%;
   padding: 1.2rem;
   border: 2px solid #e0e0e0;
   border-radius: 12px;
   font-size: 1.1rem;
   transition: all 0.3s ease;

   &::placeholder {
      color: #aaa;
   }

   &:focus {
      outline: none;
      border-color: #2193b0;
      box-shadow: 0 0 0 4px rgba(33, 147, 176, 0.1);
   }
`

export const SearchButton = styled.button`
   width: 100%;
   padding: 1.2rem;
   margin-top: 1rem;
   background: linear-gradient(45deg, #2193b0, #6dd5ed);
   border: none;
   border-radius: 12px;
   color: white;
   font-size: 1.1rem;
   font-weight: bold;
   cursor: pointer;
   transition: all 0.3s ease;

   &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(33, 147, 176, 0.2);
   }
`

export const RouteInfo = styled.div`
   margin-top: 2rem;
   padding: 1.5rem;
   background: #f8f9fa;
   border-radius: 12px;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`

export const RouteTitle = styled.h4`
   font-size: 1.2rem;
   color: #333;
   margin-bottom: 1rem;
   display: flex;
   align-items: center;

   &:before {
      content: '🎯';
      margin-right: 8px;
   }
`

export const RouteDetail = styled.div`
   padding: 1rem;
   background: white;
   border-radius: 8px;
   margin-bottom: 1rem;

   &:last-child {
      margin-bottom: 0;
   }
`

export const Time = styled.span`
   font-weight: bold;
   color: #2193b0;
`

export const Distance = styled.span`
   color: #666;
   margin-left: 1rem;
`
