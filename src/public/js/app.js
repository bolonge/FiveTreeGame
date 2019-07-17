const canvas = document.getElementById("ftMain");
const ctx = canvas.getContext("2d");

//var socket = io();

const onMouseDown = event => {
  //마우스클릭시 함수
  var x = rangeSet(event.offsetX);
  var y = rangeSet(event.offsetY);
  // 정해진 영역에만 돌을 놓을수 있다

  if (!locationXY.includes(`${x}_${y}`)) {
    // 중복시 에러
    if (downRange.includes(x) && downRange.includes(y)) {
      createId(x, y);
      if (blackTurn === true) {
        //턴에 따라 돌이 놓아지고
        blackDown(x, y);
        locationXY.push(`${x}_${y}`); //xy값저장
        checkGame(blackId, "흑");
      } else {
        whiteDown(x, y);
        locationXY.push(`${x}_${y}`);
        checkGame(whiteId, "백");
      }
      changeTurn(); // 턴이 바뀐다
    }
  } else {
    console.log("중복"); //중복일경우 콘솔에 중복 출력
  }
};

if (canvas) {
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("touchend", onMouseDown);
}
