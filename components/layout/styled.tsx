import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  height: 84px;
  justify-content: space-between;
  align-items: center;
  background-color: #410909;

  @media (min-width: 1280px) {
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 400px;
  width: 100%;
  justify-content: space-between;
  background-color: #410909;

  @media (min-width: 1280px) {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
  color: white;
`;

export const DivEmailLogout = styled.div`
  color: #8dd9fc;
  display: none;
  @media (min-width: 1280px) {
    display: block;
    padding: 15px;
  }
`;

export const DivEmailLogoutMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  color: #8dd9fc;

  @media (min-width: 1280px) {
    display: none;
  }
`;

export const DivRedes = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  color: white;
`;

export const FooterButton = styled.button`
  border: none;
  font-size: 20px;
  background-color: transparent;
  color: white;
  padding: 0px;
`;

export const Title = styled.h2`
  margin: 0;
  font-family: "Titillium Web";
`;

export const TextFooter = styled.div`
  margin: 0;
  font-family: "Titillium Web";
  display: flex;
  align-items: center;
`;

export const TextEmail = styled.h2`
  margin: 0;
  font-family: "Titillium Web";
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const FooterLink = styled.button`
  border: none;
  font-size: 20px;
  background-color: transparent;
  color: white;
  padding: 5px 0px;
`;

export const ButtonOculto = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  margin: 0;
  font-family: "Titillium Web";
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const HeaderOculto = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  height: 100vh;
  background-color: black;
`;

export const LayoutContainer = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
`;

export const LinkLogout = styled.button`
  border: none;
  background-color: transparent;
  color: #b6f168;
`;
