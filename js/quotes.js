const quotes = [
  {
    quote : "L'éducation, c'est la famille qui la donne ; l'instruction, c'est l'Etat qui la doit.",
    author : "Victor Hugo"
  },
  {
    quote : "Dans la vie on ne fait pas ce que l'on veut mais on est responsable de ce que l'on est.",
    author : "Jean-Paul Sartre"
  },
  {
    quote : "Pour critiquer les gens il faut les connaître, et pour les connaître, il faut les aimer.",
    author : "Coluche"
  },
  {
    quote : "Aimer, ce n'est pas se regarder l'un l'autre, c'est regarder ensemble dans la même direction.",
    author : "Antoine De Saint-Exupéry"
  },
  {
    quote : "On ne souffre jamais que du mal que nous font ceux qu'on aime. Le mal qui vient d'un ennemi ne compte pas.",
    author : "Victor Hugo"
  },
  {
    quote : "Un seul être vous manque et tout est dépeuplé.",
    author : "Lamartine"
  },
  {
    quote : "Un sourire coûte moins cher que l'électricité, mais donne autant de lumière.",
    author : "Abbé Pierre"
  },
  {
    quote : "Le travail éloigne de nous trois grands maux : l'ennui, le vice et le besoin.",
    author : "Voltaire"
  },
  {
    quote : "Mesdames, un conseil. Si vous cherchez un homme beau, riche et intelligent... prenez-en trois !",
    author : "Coluche"
  },
  {
    quote : "Il ne faut avoir aucun regret pour le passé, aucun remords pour le présent, et une confiance inébranlable pour l'avenir.",
    author : "Jean Jaurès"
  }

];



const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerHTML = `<br>- ${todaysQuote.author}`;