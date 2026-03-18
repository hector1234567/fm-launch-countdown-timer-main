//const TIMER_START = 9 * 24 * 60 * 60 * 1000; // 9 days in milliseconds
const TIMER_START = 10 * 1000; // 10 seconds in milliseconds

export function getInitialDate() {
  if (localStorage.getItem("initDate")) {
    return parseInt(localStorage.getItem("initDate"));
  } else {
    const initDate = new Date().getTime() + TIMER_START;
    localStorage.setItem("initDate", initDate);
    return initDate;
  }
}

export function getDiffTime(initDate) {
  const now = new Date().getTime();
  const diffMs = initDate - now;

  if (diffMs < 0) {
    localStorage.removeItem("initDate");
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}
