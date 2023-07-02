"use client";

import { Button, Container, Heading, Link } from "@/components";
import { Payment, initMercadoPago } from "@mercadopago/sdk-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./styles.scss";

initMercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY as string);

type PaymentType = {
  id: string;
  status: string;
  status_detail: string;
};

const Step = ({
  title,
  active,
  complete,
}: {
  title: string;
  active?: boolean;
  complete?: boolean;
}) => (
  <div className="flex flex-col place-items-center gap-2">
    <div className="h-6 w-6 rounded-full border-2 border-carbon flex items-center justify-center bg-marble">
      {complete ? (
        <Image
          src="/checkmark-circle.svg"
          alt="checkmark"
          className="h-[18px] aspect-square"
        />
      ) : (
        active && (
          <div className="h-4 w-4 rounded-full bg-carbon flex items-center justify-center" />
        )
      )}
    </div>
    <span className="font-semibold normal-case">{title}</span>
  </div>
);

export default () => {
  const [payment, setPayment] = useState<PaymentType>();

  const onSubmit = async ({
    selectedPaymentMethod,
    formData,
  }: {
    selectedPaymentMethod: string;
    formData: object;
  }) => {
    const response = await fetch("/api/orders/payment/process", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    setPayment({
      id: data.id,
      status: data.status,
      status_detail: data.status_detail,
    });
  };

  useEffect(() => {
    // @ts-ignore
    window.statusScreenBrickController?.unmount();
  }, [payment]);

  return (
    <Container horizontal className="gap-8">
      <div className="w-full py-8 flex flex-col gap-8">
        <Link href="/" className="font-semibold">
          ← Voltar para a loja
        </Link>
        <div className="flex justify-around">
          <Step title="Carrinho" complete />
          <Step title="Pagamento" active />
          <Step title="Revisão" />
          <hr className="border-t border-carbon w-[35%] left-0 absolute mt-3 -z-40" />
        </div>
        <div className="payment-brick-container">
          <Payment
            initialization={{
              amount: 25,
            }}
            customization={{
              visual: {
                hideFormTitle: true,
                hidePaymentButton: true,
              },
              paymentMethods: {
                maxInstallments: 3,
                bankTransfer: "all",
                creditCard: "all",
              },
            }}
            onSubmit={onSubmit}
          />
        </div>
      </div>
      <div className="top-0 sticky w-2/5 h-screen px-8 py-20 bg-zinc-200 hidden lg:flex flex-col gap-8 z-50">
        <Heading level={3} className="font-bold normal-case">
          Resumo
        </Heading>
        <div className="flex flex-col gap-4">
          <div className="w-full flex justify-between">
            <span className="font-semibold">Subtotal:</span>
            <span>R$ 25,00</span>
          </div>
          <div className="w-full flex justify-between">
            <span className="font-semibold">Descontos:</span>
            <span>R$ 0,00</span>
          </div>
        </div>
        <hr className="w-full border-t border-carbon" />
        <div className="w-full flex justify-between font-semibold text-lg">
          <span>Total:</span>
          <span>R$ 25,00</span>
        </div>
        <Button className="font-semibold py-3">Finalizar compra</Button>
      </div>
    </Container>
  );
};
