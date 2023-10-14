import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import loginMobile from '../../images/login/login-mobile.jpg';
import loginTablet from '../../images/login/login-tablet.jpg';
import loginDesktop from '../../images/login/login-desktop.jpg';

export const StyledLoginSection = styled.section`
  width: 100dvw;
  height: 100dvh;
  background-image: url(${loginMobile});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #1e0646;
  display: block;
  text-align: center;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    display: flex;
    background-image: url(${loginTablet});
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    background-image: url(${loginDesktop});
  }
`;
export const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(50px);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  @media screen and (min-width: 768px) {
    width: 533px;
    height: 570px;
  }

  .boxLogin {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    outline: none;
    padding-left: 11px;
    padding-top: 8px;
    padding-bottom: 8px;
    margin: 20px 0;
    border: 1px;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    background-color: transparent;
    border-bottom: 1px solid rgb(255 255 255 / 0.6);
    color: rgb(255 255 255 / 0.6);
    @media screen and (min-width: 768px) {
      width: 409px;
    }
  }
  .boxLogin > input {
    color: rgb(255 255 255 / 0.6);
    background-color: transparent;
    border: none;
  }
  .boxLogin > input::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  .iconEmail {
    margin-right: 15px;
    font-size: 24px;
    color: rgb(255 255 255 / 0.6);
  }
  .iconPass {
    margin-right: 15px;
    font-size: 24px;
    color: rgb(255 255 255 / 0.6);
  }
`;

export const StyledLink = styled(NavLink)`
  width: 280px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 20px;
  padding: 5px 10px;
  margin: 10px 15px;
  margin-bottom: 98px;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  background-color: #ffffff;
  color: #623f8b;
  &:hover {
    font-weight: 600;
  }
  @media screen and (min-width: 768px) {
    width: 300px;
    margin-bottom: 80px;
  }
`;

export const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 97px;
  .logoText {
    font-size: 19px;
    color: white;
    @media screen and (min-width: 768px) {
      font-size: 27px;
    }
  }
  @media screen and (min-width: 768px) {
    font-size: 27px;
    padding-top: 80px;
  }
`;
export const StyledLogo = styled.img`
  width: 25px;
  @media screen and (min-width: 768px) {
    width: 36px;
  }
`;