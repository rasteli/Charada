function scrollDiv(div) {
  const divs = {
    1: "HOME",
    2: "PROJETOS",
    3: "SOBRE"
  }

  const id = divs[div]
  const element = document.getElementById(id)

  element.scrollIntoView()
}
