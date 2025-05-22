import styled from "styled-components";

export const Div = styled.div`
  margin: 30px;
  height: 50vh;
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  font-family: "Titillium Web";
  margin: 15px 0px;
  text-align: left;
`;

export const Text = styled.p`
  font-size: 15px;
  font-family: "Titillium Web";
  text-align: center;
  margin: 15px 0px 0px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media (min-width: 1280px) {
    align-items: center;
    margin-bottom: 30px;
  }
`;

export const Label = styled.label`
  font-size: 20px;
  font-family: "Roboto";
`;
