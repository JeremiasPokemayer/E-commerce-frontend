import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #163163;

  @media (min-width: 1280px) {
    background-color: #6f09aa;
  }
`;

export const Div2 = styled(Div)`
  background-color: #ffee8e;

  @media (min-width: 1280px) {
    background-color: #ffc548;
  }
`;

export const Div3 = styled(Div)`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;

  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const ContainerData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80vh;
  padding: 35px;

  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: center;
    width: 1280px;
  }
`;

export const ContainerProduct = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  width: 330px;
  height: 330px;
  margin: 20px 0px 120px;
  background-color: #24c058c1;

  @media (min-width: 1280px) {
    margin: 20px 30px 120px;
  }
`;

export const ContainerProduct2 = styled(ContainerProduct)`
  background-color: #265797;

  @media (min-width: 1280px) {
    margin: 20px 30px 120px;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  justify-content: space-around;
  height: 80px;
  align-items: center;
  margin: 0;
`;

export const ContainerText2 = styled(ContainerText)`
  color: white;
`;

export const ContainerText3 = styled(ContainerText)`
  flex-direction: column;
  align-items: start;
  height: auto;

  @media (min-width: 1280px) {
    padding: 25px;
  }
`;

export const Image = styled.img`
  width: 326px;
  height: 240px;
  border-radius: 8px;
`;

export const ImageProduct = styled(Image)`
  border-radius: 5px;
  width: 100%;
`;

export const Price = styled.h2`
  margin: 0;
  font-family: "Titillium Web";
  font-size: 35px;
  color: black;
`;

export const Description = styled.p`
  margin: 0;
  font-family: "Titillium Web";
  font-size: 15px;
  color: black;

  @media (min-width: 1280px) {
    font-size: 18px;
  }
`;

export const Form = styled.form`
  background-color: #410909;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  margin: 0;
`;
