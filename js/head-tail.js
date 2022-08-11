const headButton = document.querySelector("#head");
const tailButton = document.querySelector("#tail");
const historyList = document.querySelector("#history-list");

const TEXT_HEAD = "Tête";
const TEXT_TAIL = "Queue";

function getResult(isHead) {
  const value = Math.random();
  return isHead == (value > 0.5)
}

function getTextResult(isHead, isSuccess) {
  const yours = `Vous avez choisi <b>${isHead ? TEXT_HEAD : TEXT_TAIL}</b>.`;
  const ais = `IA a choisi <b>${isSuccess == isHead ? TEXT_HEAD : TEXT_TAIL}.</b>`;
  const result = isSuccess ? "Félicitations ! Vous <b>réussissez</b> !" : "Je suis désolé... Vous <b>échouez</b>...";

  const li = document.createElement("li");
  li.innerHTML = `${yours}<br>${ais}<br>${result}`
  historyList.appendChild(li);

  const lastItem = historyList.querySelector("li:last-child");
  historyList.scrollTop = historyList.scrollHeight;
  // historyList.scrollTo(0, lastItem.position);
  // historyList.scrollTo(0, historyList.scrollHeight);
}

function onClickHead() {
  getTextResult(true, getResult(true));
}

function onClickTail() {
  getTextResult(false, getResult(false));
}

function init() {
  console.log("init");

  headButton.addEventListener("click", onClickHead);
  tailButton.addEventListener("click", onClickTail);
}

init();