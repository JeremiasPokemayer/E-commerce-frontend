import styled from "styled-components";

export const TextFieldHome = styled.input`
  font-family: "Titillium Web";
  width: 50%;
  max-width: 450px;
  text-align: center;
  height: 40px;
  border: 4px solid black;
  border-radius: 10px;
`;

export const TextFieldSearch = styled(TextFieldHome)`
  width: 100%;
  text-align: start;
  color: white;
  background-color: #410909;
  border: 2px solid white;
  font-size: 18px;
  font-weight: 600;
  padding: 15px;
`;

export const TextFieldLogin = styled.input`
  font-family: "Titillium Web";
  font-size: 20px;
  width: 100%;
  max-width: 450px;
  text-align: center;
  height: 40px;
  border: 4px solid black;
  border-radius: 10px;
`;
