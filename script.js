function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector('#profile img')
  //subistintuindo a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

}

function naoPronto() {

  const html = document.documentElement
  html.classList.toggle("nao-pronto")
  return(alert("Esse link ainda não está pronto"))
}
