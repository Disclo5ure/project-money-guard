import styled from 'styled-components';

export const StyledBalanceBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  max-width: 280px;
  height: 80px;

  padding-top: 8px;
  padding-left: 32px;
  margin: auto;
  margin-bottom: 32px;
  border-radius: 8px;
  background: rgba(82, 59, 126, 0.6);

  /* Button shadow */
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  @media screen and (min-width: 768px) {
    max-width: 336px;
    padding-left: 40px;
    margin-left: 32px;
    backdrop-filter: blur(50px);
  }
  @media screen and (min-width: 1280px) {
    border-radius: 0;
    max-width: 480px;
    margin-left: 0;
    padding-left: 56px;
  }
`;

export const StyledBalanceLabel = styled.span`
  color: var(--white-40, rgba(255, 255, 255, 0.4));
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(18 / 12);
  text-transform: uppercase;
`;

export const StyledBalance = styled.span`
  color: var(--white);

  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: calc(45 / 30);
  span {
    font-weight: 400;
    margin-right: 4px;
  }
`;