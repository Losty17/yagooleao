import mercadopago from "mercadopago";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  mercadopago.configurations.setAccessToken(
    process.env.MERCADOPAGO_ACCESS_TOKEN as string
  );

  const paymentData = await request.json();
  const payment_data = {
    installments: 1,
    ...paymentData,
    description: "Título do produto",
  };

  const response = await mercadopago.payment.create(payment_data);

  const { status, status_detail, id } = response.body;

  console.log(response.body);

  return NextResponse.json({
    id,
    status,
    status_detail,
  });
}
