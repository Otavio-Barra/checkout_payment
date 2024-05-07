const inputs = document.querySelectorAll(".campo__input");
const btnPayment = document.querySelector(
  ".container-form__btn-submit-payment"
);
const divMensage = document.querySelector(".mensage-error");
const email = document.getElementById("email");
const paymentContainer = document.querySelector(".container__payment");
const articleForm = document.querySelector(".container__container-content");
const moreInfo = document.querySelector(".container__more-descriptions");
let user = {
  userName: "",
  email: "",
};

inputs.forEach((input) => {
  let span = input.parentElement.querySelector("span");
  input.addEventListener("focus", () => {
    span.classList.add("active");
  });
  input.addEventListener("focusout", () => {
    if (input.value == "") {
      span.classList.remove("active");
    }
  });
  input.addEventListener("blur", () => {
    verificaCampo(input);
  });
});

const tiposDeErro = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "tooShort",
  "customError",
];

const mensagens = {
  name: {
    valueMissing: "O campo de nome não pode estar vazio.",
    patternMismatch: "Por favor, preencha um nome válido.",
    tooShort: "Por favor, preencha um nome válido.",
  },
  email: {
    valueMissing: "O campo de e-mail não pode estar vazio.",
    typeMismatch: "Por favor, preencha um email válido.",
    customError: "O email digitado e invalido.",
  },
  confirmEmail: {
    valueMissing: "O campo de e-mail não pode estar vazio.",
    typeMismatch: "Por favor, preencha um email válido.",
    customError: "O email digitado e invalido.",
  },
};

btnPayment.addEventListener("click", () => {
  const pegaCamposValidos = document.querySelectorAll(".correct");
  if (pegaCamposValidos.length === 3) {
    divMensage.textContent = "";
    articleForm.classList.add("oculto");
    moreInfo.classList.add("oculto");
    paymentContainer.classList.remove("oculto");
    user = {
      userName: inputs[0].value,
      email: inputs[1].value,
    };
  } else {
    inputs.forEach((input) => {
      verificaCampo(input);
    });
  }
});

function verificaCampo(input) {
  let mensagem = "";
  input.setCustomValidity("");
  if (input.name == "email" && input.value.length >= 0) {
    validaEmail(input);
  }
  if (input.name == "confirmEmail" && input.value.length !== 0) {
    validaEmail(input);
  }

  tiposDeErro.forEach((erro) => {
    if (input.validity[erro]) {
      mensagem = mensagens[input.name][erro];
    }
  });

  if (!input.checkValidity()) {
    input.classList.remove("correct");
    input.classList.add("error");
    divMensage.textContent = mensagem;
  } else {
    input.classList.remove("error");
    input.classList.add("correct");
    return true;
  }
}

function validaEmail(input) {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (!regex.test(input.value) || input.value !== email.value) {
    return input.setCustomValidity("Formato de e-mail inválido!");
  }
}

//

///
/*
// let time = 300;
// const alertTime = document.querySelector(".alert-time");

// function contagem() {
//   if (time <= 0) {
//     return;
//   }
//   time -= 1;
//   showTime();
// }

// function showTime() {
//   const getTime = new Date(time * 1000);
//   let timeFormate = getTime.toLocaleTimeString("pt-Br", {
//     minute: "2-digit",
//     second: "2-digit",
//   });
//   alertTime.innerHTML = `${timeFormate}`;
// }
// setInterval(contagem, 1000);

*/

///

//   alertTime.innerHTML = `${timeFormate}`;
// }

// setInterval(contagem, 1000);
// >>>>>>> parent of cb70acd (teste de validacao dos inputs)
