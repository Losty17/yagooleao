"use client";

import { initMercadoPago } from "@mercadopago/sdk-react";

initMercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY as string);

export default ({ children }: { children: React.ReactNode }) => children;
