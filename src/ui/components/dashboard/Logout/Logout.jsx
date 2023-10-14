import React from 'react';
import Logos from 'ui/icons/logo.svg';
import {
  LogoutContainer,
  LogoStyled,
  Logo,
  LogoTitle,
  Question,
  ButtonsContainer,
  LogoutBtn,
  CancelBtn,
} from './Logout.styled';

export const Logout = () => {
  return (
    <LogoutContainer>
      <LogoStyled>
        <Logo src={Logos} alt="Guard Money" />
        <LogoTitle>Money Guard</LogoTitle>
      </LogoStyled>
      <Question>Are you sure you want to log out?</Question>
      <ButtonsContainer>
        <LogoutBtn type="button">Logout</LogoutBtn>
        <CancelBtn type="button">Logout</CancelBtn>
      </ButtonsContainer>
    </LogoutContainer>
  );
};
