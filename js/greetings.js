const loginForm = document.querySelector("#login-form")
const loginInput = loginForm.querySelector("input")
const greeting = document.querySelector("#greeting")
const HIDDEN_CLASSNAME = "hidden"
const LOCAL_ID_USERNAME = "username"

function onSubmit(event) {
  event.preventDefault()
  loginForm.classList.add(HIDDEN_CLASSNAME)
  const username = loginInput.value
  console.log(username)
  localStorage.setItem(LOCAL_ID_USERNAME, username)
  paintGreetings(username)
}

function paintGreetings(userName) {
  greeting.innerText = `Bonjour, ${userName}.`
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUserName = localStorage.getItem(LOCAL_ID_USERNAME)

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener("submit", onSubmit)
} else {
  paintGreetings(savedUserName)
}

