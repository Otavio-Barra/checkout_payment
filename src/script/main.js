const input = document.querySelectorAll(".campo__input");

input.forEach((item) => {
  let span = item.parentElement.querySelector("span");
  item.addEventListener("focus", () => {
    span.classList.add("active");
  });
  item.addEventListener("focusout", () => {
    if (item.value == "") {
      span.classList.remove("active");
    }
  });
});

///

let time = 300;
const alertTime = document.querySelector(".alert-time");

function contagem() {
  if (time <= 0) {
    return;
  }
  time -= 1;
  showTime();
}

function showTime() {
  const getTime = new Date(time * 1000);
  let timeFormate = getTime.toLocaleTimeString("pt-Br", {
    minute: "2-digit",
    second: "2-digit",
  });
  alertTime.innerHTML = `${timeFormate}`;
}

// setInterval(contagem, 1000);

///

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
    customError: "O email digitado e  invalido.",
  },
  confirmEmail: {
    valueMissing: "O campo de e-mail não pode estar vazio.",
    typeMismatch: "Por favor, preencha um email válido.",
    customError: "O email digitado e  invalido.",
  },
};
const inputs = document.querySelectorAll("[required]");
const btnPayment = document.querySelector(
  ".container-form__btn-submit-payment"
);
const divMensage = document.querySelector(".mensage-error");
const form = document.querySelector("form");

inputs.forEach((input) => {
  input.addEventListener("blur", () => {
    verificaCampo(input);
  });
});
const paymentContainer = document.querySelector(".container__payment");
const articleForm = document.querySelector(".container__container-content");
const moreInfo = document.querySelector(".container__more-descriptions");
let user = {
  userName: "",
  email: "",
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
    console.log(user);
  } else {
    inputs.forEach((input) => {
      verificaCampo(input);
    });
  }
});
let email = document.getElementById("email");
let confEmail = document.getElementById("confirm-email");

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
