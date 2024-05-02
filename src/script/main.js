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

setInterval(contagem, 1000);
