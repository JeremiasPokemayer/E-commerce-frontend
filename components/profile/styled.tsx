import styled from "styled-components";

export const Div = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #fce0ae;
  padding: 25px;
  @media (min-width: 1280px) {
    background-color: #dfabfd;
  }
`;

export const DivTextField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  @media (min-width: 1280px) {
  }
`;

export const Label = styled.label`
  font-size: 20px;
  font-family: "Roboto";
  margin-bottom: 5px;
`;
