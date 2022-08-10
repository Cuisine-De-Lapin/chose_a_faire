import {getTodayQuote} from "./data.js";
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = getTodayQuote();

quote.innerText = todaysQuote.quote;
author.innerHTML = `<br>- ${todaysQuote.author}`;