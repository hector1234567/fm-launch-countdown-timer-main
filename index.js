const TIMER_START = 9 * 24 * 60 * 60 * 1000; // 9 days in milliseconds

var countdownItemElements = document.querySelectorAll(".countdown-item");
var initDate = getInitialDate();

window.addEventListener("DOMContentLoaded", () => {
  updateCountdown();
  setInterval(updateCountdown, 1000);
});

function getInitialDate() {
  if (localStorage.getItem("initDate")) {
    return parseInt(localStorage.getItem("initDate"));
  } else {
    var initDate = new Date().getTime() + TIMER_START;
    localStorage.setItem("initDate", initDate);
    return initDate;
  }
}

function updateCountdown() {
  const now = new Date().getTime();
  const diffMs = initDate - now;

  if (diffMs <= 0) {
    localStorage.removeItem("initDate");
    return;
  }

  countdownItemElements?.forEach((item) => {
    var value = item
      .querySelector(".countdown-value")
      .getAttribute("data-value");
    switch (value) {
      case "day":
        const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        updateValue(item, days);
        break;
      case "hour":
        const hours = Math.floor(
          (diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        updateValue(item, hours, 23);
        break;
      case "minute":
        const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        updateValue(item, minutes, 59);
        break;
      case "second":
        const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);
        updateValue(item, seconds, 59);
        break;
    }
  });
}

function updateValue(item, value, max) {
  var current = item.getAttribute("data-current");

  if (current === null) {
    console.log("first time");
    item.querySelector("[data-pasition='back'] span").textContent = value
      ? value - 1
      : max;
    item.querySelector("[data-pasition='front'] span").textContent = value;
    item.querySelector("[data-pasition='top'] span").textContent = value
      ? value - 1
      : max;
    item.querySelector("[data-pasition='down'] span").textContent = value;
    item.setAttribute("data-current", value);
  } else if (current != value) {
    item.classList.add("rotated");
    setTimeout(() => {
      item.querySelector("[data-pasition='back'] span").textContent = value
        ? value - 1
        : max;
      item.querySelector("[data-pasition='front'] span").textContent = value;
      item.querySelector("[data-pasition='top'] span").textContent = value
        ? value - 1
        : max;
      item.querySelector("[data-pasition='down'] span").textContent = value;

      item.classList.remove("rotated");
      item.setAttribute("data-current", value);
    }, 900);
  }
}
