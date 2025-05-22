import styled from "styled-components";

export const Title = styled.h1`
  font-size: 50px;
  font-family: "Titillium Web";
  margin: 0;
  text-align: center;
`;

export const Subtitle = styled(Title)`
  font-size: 32px;
  margin: 0;
  color: white;
`;

export const Subtitle2 = styled(Title)`
  font-size: 32px;
  margin: 0;
  color: black;
`;

export const TextProduct = styled(Title)`
  font-size: 25px;
  margin: 0;
  color: black;
`;

export const TitleProduct = styled(TextProduct)`
  font-size: 35px;
`;

export const TextProduct2 = styled(TextProduct)`
  color: white;
`;
