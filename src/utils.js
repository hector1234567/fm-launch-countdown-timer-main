const TIMER_START = 9 * 24 * 60 * 60 * 1000; // 9 days in milliseconds

export function getInitialDate() {
  if (localStorage.getItem("initDate")) {
    return parseInt(localStorage.getItem("initDate"));
  } else {
    var initDate = new Date().getTime() + TIMER_START;
    localStorage.setItem("initDate", initDate);
    return initDate;
  }
}

export function getDiffTime(initDate) {
  const now = new Date().getTime();
  const diffMs = Math.abs(initDate - now);

  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}
