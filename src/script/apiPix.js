import token from "./token.js";
// import axios from "axios";

// // const mp = new MercadoPago(token);

// // console.log(mp);

// const client = {
//   transaction_amount: 7.0,
//   description: "Compra site",
//   payment_method_id: "pix",
//   notification_url: "https://www.google.com",
//   payer: {
//     email: "otaviombarra@gmail.com",
//     first_name: "teste",
//     last_name: "teste",
//   },
// };

// const pixgenerate = async () => {
//   return await axios.post("https://api.mercadopago.com/v1/payments", client, {
//     headers: {
//       "content-type": "application/json",
//       Authorization: `Bearer APP_USR-7508809216481718-050416-edd13f745e70166f695d8cdd0154f703-190179622`,
//     },
//   });
// };

// const { data } = await pixgenerate();
// const codigo_pix = data.point_of_interaction.transaction_data.qr_code;
// const codigo_base64 = data.point_of_interaction.transaction_data.qr_code_base64;
// const numero_pedido = data.id;

// console.log(numero_pedido);

//////////////////////////////////////

import { MercadoPagoConfig, Payment } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: token,
  options: { timeout: 5000, idempotencyKey: "abc" },
});

const payment = new Payment(client);

const fazerPedido = async () => {
  return await payment.create({
    body: {
      transaction_amount: 7.0,
      description: "Compra site",
      payment_method_id: "pix",
      payer: {
        email: "teset@gmail.com",
        first_name: "teste",
        last_name: "teste",
        identification: {
          type: "CPF",
          number: "19119119100",
        },
      },
    },
    requestOptions: { idempotencyKey: "abc" },
  });
};

const resposta = await fazerPedido();

const codigo_pix = resposta.point_of_interaction.transaction_data.qr_code;
const codigo_base64 =
  resposta.point_of_interaction.transaction_data.qr_code_base64;
const numero_pedido = resposta.id;

console.log(codigo_base64);
console.log(codigo_pix);
console.log(numero_pedido);
