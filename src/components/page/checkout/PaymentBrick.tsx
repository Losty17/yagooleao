"use client";

import { Payment } from "@mercadopago/sdk-react";
import "./styles.scss";

export type Payment = {
  id: string;
  status: string;
  status_detail: string;
};

export default ({
  setLoading,
  setPayment,
}: {
  setLoading: (loading: boolean) => void;
  setPayment: (payment: Payment) => void;
}) => {
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

  return (
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
        onReady={() => setLoading(false)}
      />
    </div>
  );
};
