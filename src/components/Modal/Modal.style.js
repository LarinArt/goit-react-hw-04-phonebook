import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.backdropBgColor};
`;

export const ModalField = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 350px;
  height: auto;
  padding: 10px;

  background-color: ${({ theme }) => theme.colors.mainBgColor};
  color: ${({ theme }) => theme.colors.mainTextColor};
`;

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${({ theme }) => theme.colors.accentBgColor};

  margin-bottom: 35px;
  padding-bottom: 25px;
`;

export const ModalTitle = styled.h2`
  font-size: 30px;
  font-weight: 900;
  text-transform: uppercase;
`;

export const ModalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  background-color: ${({ theme }) => theme.colors.secondBgColor};
  color: ${({ theme }) => theme.colors.secondTextColor};
  font-family: inherit;
  border: none;

  cursor: pointer;
  transition: background-color ${({ theme }) => theme.colors.mainAnimationHover};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.accentBgColor};
  }
`;
