import React, { useEffect, useState } from "react";
import {
  Subtitle,
  Title,
  TextProduct,
  Subtitle2,
  TextProduct2,
  TitleProduct,
} from "ui/texts";
import { FlechaAbajo, FlechaArriba } from "ui/icons";
import { ButtonComprar, ButtonSearch } from "ui/buttons";
import { TextFieldSearch } from "ui/text-field";
import {
  Div,
  ContainerProduct,
  ContainerProduct2,
  ContainerData,
  ContainerText,
  ContainerText2,
  ContainerText3,
  Image,
  Price,
  Container,
  Div2,
  Div3,
  Description,
  ImageProduct,
  Form,
} from "./styled";
import { useUser } from "lib/user-context";
import { useRouter } from "next/router";
import { useTopResults, useSearchResults } from "lib/hooks";
import { useGenerateOrder } from "lib/api";

export function ProductsTop() {
  const res = useTopResults();
  const data = res?.results;

  return (
    <Div>
      <Subtitle>Productos</Subtitle>
      <Subtitle>destacados</Subtitle>
      {!data || data.length === 0 ? (
        <Title>Cargando...</Title>
      ) : (
        <Container>
          {data.map((i, index) => {
            return (
              <ContainerProduct key={index}>
                <Image src={i.Images[0].url} alt="" />
                <ContainerText>
                  <TextProduct>{i.Name}</TextProduct>
                  <Price>${i["Unit cost"]}</Price>
                </ContainerText>
              </ContainerProduct>
            );
          })}
        </Container>
      )}
    </Div>
  );
}

export function Products() {
  const router = useRouter();
  const { query, setProduct } = useUser();
  const [visibleCount, setVisibleCount] = useState(3);
  const res = useSearchResults(query);
  const data = res?.results;

  const handleShowMore = () => setVisibleCount(data.length);
  const handleShowLess = () => setVisibleCount(3);

  const handleProduct = (productId) => {
    const productData = data.find((item) => item.objectID === productId);
    setProduct(productData);
    localStorage.setItem("selectedProduct", JSON.stringify(productData));
    router.push("/products/search");
  };

  return (
    <Div2>
      <Subtitle2>Productos: </Subtitle2>
      {!data || data.length === 0 ? (
        <Title>Cargando...</Title>
      ) : (
        <Container>
          {data.slice(0, visibleCount).map((i, index) => {
            return (
              <ContainerProduct2
                key={index}
                onClick={() => handleProduct(i.objectID)}
              >
                <Image src={i.Images[0].url} alt="" />
                <ContainerText2>
                  <TextProduct2>{i.Name}</TextProduct2>
                  <Price>${i["Unit cost"]}</Price>
                </ContainerText2>
              </ContainerProduct2>
            );
          })}
        </Container>
      )}
      {visibleCount < data?.length && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "15px",
            cursor: "pointer",
          }}
          onClick={handleShowMore}
        >
          <TextProduct>Ver más</TextProduct>
          <FlechaAbajo />
        </div>
      )}
      {visibleCount > 3 && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "15px",
            cursor: "pointer",
          }}
          onClick={handleShowLess}
        >
          <FlechaArriba />
          <TextProduct>Ver menos</TextProduct>
        </div>
      )}
    </Div2>
  );
}

export function ProductId() {
  const { product, setProduct } = useUser();
  const router = useRouter();
  const { query, setQuery } = useUser();

  const { createOrder } = useGenerateOrder(product?.objectID);

  useEffect(() => {
    const storedProduct = localStorage.getItem("selectedProduct");
    if (storedProduct) {
      setProduct(JSON.parse(storedProduct));
    }
  }, [setProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryForm = e.target[0].value;
    setQuery(queryForm);
    router.push("/products");
  };

  const handleClick = async () => {
    const res = await createOrder();
    router.push(res.paymentUrl);
    console.log(res);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <TextFieldSearch placeholder={query} />
        <ButtonSearch>Buscar</ButtonSearch>
      </Form>
      <Div3>
        {!product ? (
          <Title>Encontra lo que estas buscando!</Title>
        ) : (
          <ContainerData>
            <ImageProduct src={product?.Images?.[0]?.url} alt="" />
            <ContainerText3>
              <TitleProduct>{product?.Name}</TitleProduct>
              <Price>${product?.["Unit cost"]}</Price>
              <ButtonComprar onClick={handleClick}>Comprar</ButtonComprar>
              <Description>{product?.Description}</Description>
            </ContainerText3>
          </ContainerData>
        )}
      </Div3>
    </div>
  );
}
