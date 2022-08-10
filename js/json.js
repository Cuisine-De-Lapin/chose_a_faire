import { getTodayQuote, getBackgroundImage } from "./data.js";

const jsonResult = {
  background: getBackgroundImage(),
  quote: getTodayQuote()
}

document.head.innerHTML=""
document.body.innerText = JSON.stringify(jsonResult);