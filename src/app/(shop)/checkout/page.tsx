"use client";

import { Container, Heading, PaymentBrick } from "@/components";
import { Payment } from "@/components/page/checkout/PaymentBrick";
import { useEffect, useState } from "react";

export default () => {
  const [loading, setLoading] = useState(true);
  const [payment, setPayment] = useState<Payment>();

  useEffect(() => {
    // @ts-ignore
    window.statusScreenBrickController?.unmount();
  }, [payment]);

  return (
    <>
      <Container horizontal className="mt-16">
        <div className="w-full flex flex-col gap-8">
          <Heading level={2}>Checkout</Heading>
          <PaymentBrick setPayment={setPayment} setLoading={setLoading} />
        </div>
        <div className="w-full flex flex-col gap-8"></div>
      </Container>
    </>
  );
};
