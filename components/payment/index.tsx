import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";
import { CaraTriste } from "ui/icons";
import {
  Div,
  Div2,
  TitlePago,
  TitlePago2,
  TextPago,
  ButtonVolver,
  ButtonVolver2,
} from "./styled";

export function Success() {
  return (
    <Div>
      <Player
        autoplay
        keepLastFrame
        src="https://lottie.host/d64392ce-f0d4-4e12-a6e9-d106e7402dfb/ZfnklJOuDU.json"
        style={{ height: "400px", width: "400px" }}
      />
      <TitlePago>¡Pago aprobado!</TitlePago>
      <TextPago>Tu transacción se completó con éxito.</TextPago>
      <Link href={"/"}>
        <ButtonVolver>Volver al inicio</ButtonVolver>
      </Link>
    </Div>
  );
}

export function Failure() {
  return (
    <Div2>
      <Player
        autoplay
        keepLastFrame
        src="https://lottie.host/0eda4543-e3d6-4612-a69e-2f40127932b9/O3qMxH9Og2.json"
        style={{ height: "400px", width: "400px" }}
      />
      <TitlePago2>
        ¡Pago rechazado!
        <CaraTriste />
      </TitlePago2>
      <TextPago>
        Tu transacción no fue exitosa, podes volver a intentarlo en unos
        minutos.
      </TextPago>
      <Link href={"/"}>
        <ButtonVolver2>Volver al inicio</ButtonVolver2>
      </Link>
    </Div2>
  );
}
