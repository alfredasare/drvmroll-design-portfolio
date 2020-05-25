import styled from 'styled-components';

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  left:0;
  z-index: 5;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out !important;
  
  @media (max-width: 480px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    text-align: center;
    transition: color 0.3s linear;
    outline: none;
    
    @media (max-width: 480px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: white;
    }
  }
`;