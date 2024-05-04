import token from "./token.js";
console.log(token);
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
// myHeaders.append("X-Idempotency-Key", "0d5020ed-1af6-469c-ae06-c3bec19954bb");
myHeaders.append("Authorization", `Bearer ${token}`);

const raw = JSON.stringify({
  description: "Payment for product",
  notification_url: "google.com",
  external_reference: "MP0001",
  payer: {
    email: "test_user_123@testuser.com",
    identification: {
      type: "CPF",
      number: "95749019047",
    },
  },
  payment_method_id: "pix",
  transaction_amount: 7.0,
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

async function getData() {
  const response = await fetch(
    "https://api.mercadopago.com/v1/payments",
    requestOptions
  );
  const data = await response.json();
  console.log(data);
}
getData();

// .then((response) => response.json())
// .then((result) => console.log(result))
// .catch((error) => console.error(error));
