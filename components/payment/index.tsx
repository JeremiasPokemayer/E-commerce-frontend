import React, { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";
import { Div, TitlePago, TextPago, ButtonVolver } from "./styled";

export function Success() {
  return (
    <Div>
      <Player
        autoplay
        keepLastFrame
        src="https://assets10.lottiefiles.com/packages/lf20_jbrw3hcz.json"
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
  return <div>Soy el Failure</div>;
}
