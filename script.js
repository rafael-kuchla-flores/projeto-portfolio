function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem - 2
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "foto de maik brito sorrindo usando óculos e jaqueta de couro preta, sem barba e fundo em um gradient de rose e azul"
    )
  } else {
    img.setAttribute(
      "alt",
      "foto de maik brito sorrindo usando óculos e camisa preta, barba e fundo amarelo"
    )
  }
}
