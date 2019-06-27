let locationXY = []; //위치 저장 배열
let blackId = [];
let whiteId = [];

const turn = document.getElementById("turn");

let blackTurn = true, //턴
  whiteTurn = false;

function changeTurn() {
  //턴바꾸기 함수
  if (blackTurn === true) {
    blackTurn = false;
    whiteTurn = true;
    turn.style.background = "#fff";
  } else {
    blackTurn = true;
    whiteTurn = false;
    turn.style.background = "#262626";
  }
}

function checkGame(id, color = "") {
  for (let i = 1; i < 225; i++) {
    if (
      id.includes(i) &&
      id.includes(i + 1) &&
      id.includes(i + 2) &&
      id.includes(i + 3) &&
      id.includes(i + 4)
    ) {
      setTimeout(() => {
        resultModal(color);
      }, 300);
    }
  }
  for (let i = 1; i < 225; i++) {
    if (
      id.includes(i) &&
      id.includes(i + 15) &&
      id.includes(i + 30) &&
      id.includes(i + 45) &&
      id.includes(i + 60)
    ) {
      setTimeout(() => {
        resultModal(color);
      }, 300);
    }
  }
  for (let i = 1; i < 225; i++) {
    if (
      id.includes(i) &&
      id.includes(i + 16) &&
      id.includes(i + 32) &&
      id.includes(i + 48) &&
      id.includes(i + 64)
    ) {
      setTimeout(() => {
        resultModal(color);
      }, 300);
    }
  }
  for (let i = 1; i < 225; i++) {
    if (
      id.includes(i) &&
      id.includes(i + 14) &&
      id.includes(i + 28) &&
      id.includes(i + 42) &&
      id.includes(i + 56)
    ) {
      setTimeout(() => {
        resultModal(color);
      }, 300);
    }
  }
}
