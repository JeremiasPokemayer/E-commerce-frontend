import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: "40px";
  text-align: "center";
  background-color: rgba(5, 73, 22, 0.781);

  @media (min-width: 1280px) {
  }
`;

export const TitlePago = styled.h1`
  font-family: "Lilita One";
  margin: 0;
  color: #62f57b;
  margin-bottom: 20px;
  font-size: 50px;
`;

export const TextPago = styled.p`
  font-family: "Roboto";
  font-size: 20px;
  margin: 10px 0;
  color: #ffffff;
`;

export const ButtonVolver = styled.button`
  font-family: "Roboto";
  font-size: 15px;
  margin: 10px 0 20px;
  padding: 10px 20px;
  width: 300px;
  background-color: #2ecc71;
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s;
`;
