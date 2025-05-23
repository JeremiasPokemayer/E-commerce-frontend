import React, { useEffect, useState } from "react";
import {
  Header,
  Footer,
  FooterButton,
  FooterDiv,
  DivRedes,
  Title,
  TextFooter,
  FooterLink,
  DivEmailLogout,
  TextEmail,
  LinkLogout,
  HeaderOculto,
  LayoutContainer,
  ButtonOculto,
  DivEmailLogoutMobile,
} from "./styled";
import { Hamburguesa, Carrito, Twitter, Instagram } from "ui/icons";
import { Subtitle } from "ui/texts";
import Link from "next/link";
import { removeLocalStorage, removeLocalStorageProduct } from "lib/api";
import { ButtonHamburguesa, ButtonHeader } from "ui/buttons";
import { useUser } from "@/lib/user-context";

interface UserData {
  email: string;
}

export function Layout({ children }) {
  const { email, setQuery, setProduct } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [data, setData] = useState<UserData | null>(null);
  useEffect(() => {
    const user = localStorage.getItem("UserData");
    if (user) {
      setData(JSON.parse(user));
    }
  }, []);

  const onClick = () => {
    removeLocalStorage();
    setData(null);
    window.location.reload();
  };

  const onClick2 = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleMenuCloseSearch = () => {
    setIsMenuOpen(false);
    setQuery("");
    setProduct(null);
    removeLocalStorageProduct();
  };

  return (
    <div>
      <LayoutContainer $isOpen={!isMenuOpen}>
        <Header>
          <div
            style={{ display: "flex", alignItems: "center", padding: "15px" }}
          >
            <Carrito />
            <Subtitle>Compralo</Subtitle>
          </div>
          <ButtonHamburguesa onClick={onClick2}>
            <Hamburguesa />
          </ButtonHamburguesa>
          {email || data?.email ? (
            <DivEmailLogout>
              <TextEmail>{email || data?.email}</TextEmail>
              <Link href={"/"} onClick={onClick}>
                <LinkLogout>Cerrar sesión</LinkLogout>
              </Link>
            </DivEmailLogout>
          ) : (
            <DivEmailLogout>
              <Link href={"/login"}>
                <ButtonHeader>Ingresar</ButtonHeader>
              </Link>
            </DivEmailLogout>
          )}
        </Header>
        <div>{children}</div>
        <Footer>
          <FooterDiv>
            <Link href={"/login"} passHref>
              <FooterLink>Ingresar</FooterLink>
            </Link>
            <Link href={"/profile"} passHref>
              <FooterLink>Mi perfil</FooterLink>
            </Link>
            <Link href={"/products/search"} passHref>
              <FooterLink>Buscar</FooterLink>
            </Link>
            <Link href={"/"} passHref onClick={onClick}>
              <FooterLink>Logout</FooterLink>
            </Link>
            <Link href={"/"} passHref>
              <FooterLink>Home</FooterLink>
            </Link>
          </FooterDiv>
          <DivRedes>
            <Title>Redes</Title>
            <FooterButton>
              <TextFooter>
                <Twitter />
                E-commerce Jere
              </TextFooter>
            </FooterButton>
            <FooterButton>
              <TextFooter>
                <Instagram />
                E-commerce Jere
              </TextFooter>
            </FooterButton>
          </DivRedes>
        </Footer>
      </LayoutContainer>
      <HeaderOculto $isOpen={isMenuOpen}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Link href={"/login"} onClick={handleMenuClose}>
            <ButtonOculto>Ingresar</ButtonOculto>
          </Link>
          <Link href={"/profile"} onClick={handleMenuClose}>
            <ButtonOculto>Mi Perfil</ButtonOculto>
          </Link>
          <Link href={"/products/search"} onClick={handleMenuCloseSearch}>
            <ButtonOculto>Buscar</ButtonOculto>
          </Link>
          {email || data?.email ? (
            <DivEmailLogoutMobile>
              <TextEmail>{email || data?.email}</TextEmail>
              <Link href={"/"} onClick={onClick}>
                <LinkLogout onClick={handleMenuClose}>Cerrar sesión</LinkLogout>
              </Link>
            </DivEmailLogoutMobile>
          ) : (
            <Link href={"/login"}>
              <ButtonHeader>Ingresar</ButtonHeader>
            </Link>
          )}
        </div>
      </HeaderOculto>
    </div>
  );
}
