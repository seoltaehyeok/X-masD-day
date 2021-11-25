const dDay = document.querySelector("h2");

function xmasCount() {
  const date = new Date(); // Today
  const year = date.getFullYear(); // this year
  const nextYear = date.getFullYear() + 1; // next year
  const xmas = new Date(year, 11, 25); // this Christmas
  const nextXmas = new Date(nextYear, 11, 25); // next Christmas

  const gap = xmas - date;
  const day = Math.floor(gap / 1000 / 60 / 60 / 24);
  const hours = Math.floor((gap / 1000 / 60 / 60) % 24);
  const minutes = Math.floor((gap / 1000 / 60) % 60);
  const seconds = Math.floor((gap / 1000) % 60);

  const gap2 = nextXmas - date;
  const day2 = Math.floor(gap2 / 1000 / 60 / 60 / 24);
  const hours2 = Math.floor((gap2 / 1000 / 60 / 60) % 24);
  const minutes2 = Math.floor((gap2 / 1000 / 60) % 60);
  const seconds2 = Math.floor((gap2 / 1000) % 60);

  // Christmas is over this year.
  if (date.getMonth() === 11 && date.getDate() > 25) {
    dDay.innerText = `${day2}d ${hours2 < 10 ? `0${hours2}` : hours2}h ${
      minutes2 < 10 ? `0${minutes2}` : minutes2
    }m ${seconds2 < 10 ? `0${seconds2}` : seconds2}s`;
  }
  // Today is Christmas!!
  else if (date.getMonth() === 11 && date.getDate() === 25) {
    dDay.innerText = "Merry Christmas!";
  }
  // Christmas coming soon!
  else
    dDay.innerText = `${day}d ${hours < 10 ? `0${hours}` : hours}h ${
      minutes < 10 ? `0${minutes}` : minutes
    }m ${seconds < 10 ? `0${seconds}` : seconds}s`;
}

function init() {
  xmasCount();
  setInterval(xmasCount, 1000);
}
init();
