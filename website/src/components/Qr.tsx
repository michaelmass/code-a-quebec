"use client";

import Image from "next/image";
import { useWindowSize } from "react-use";
import { Container } from "@/components/Container";
import QrImage from "@/images/qr.png";

export const Qr = () => {
  const { width, height } = useWindowSize();

  return (
    <Container className="relative m-0 flex h-screen w-screen max-w-screen items-center justify-center p-0">
      <Image src={QrImage} alt="QR Code" width={width / 2} height={height / 2} />
    </Container>
  );
};
