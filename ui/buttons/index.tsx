import styled from "styled-components";

export const ButtonHamburguesa = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  padding: 18px;

  @media (min-width: 1280px) {
    display: none;
  }
`;

export const ButtonHeader = styled.button`
  display: none;
  background-color: #bddf45;
  border-radius: 10px;
  border: none;
  width: 200px;
  height: 40px;
  padding: 0;
  margin: 15px;
  font-weight: bold;
  font-size: 15px;
  @media (min-width: 1280px) {
    display: block;
  }
`;

export const ButtonBlue = styled.button`
  font-family: "Titillium Web";
  font-weight: bold;
  background-color: var(--azul);
  border: none;
  width: 50%;
  max-width: 450px;
  height: 40px;
  border-radius: 10px;
  margin: 20px 0px 20px;
  color: white;

  @media (min-width: 1280px) {
  }
`;

export const ButtonLogin = styled.button`
  font-family: "Titillium Web";
  font-size: 15px;
  font-weight: bold;
  background-color: #c7a615c1;
  border: none;
  width: 100%;
  max-width: 450px;
  height: 40px;
  border-radius: 10px;
  margin: 20px 0px 20px;
  color: black;

  @media (min-width: 1280px) {
  }
`;

export const ButtonComprar = styled(ButtonBlue)`
  background-color: #237f8fc1;
  margin: 0;
  margin-bottom: 15px;
  width: 100%;

  @media (min-width: 1280px) {
  }
`;

export const ButtonSearch = styled(ButtonBlue)`
  background-color: #c7a615c1;
  margin: 0;
  margin-top: 10px;
  width: 100%;

  @media (min-width: 1280px) {
  }
`;
