window.onload = () => {
  let a = document.querySelectorAll("body a")
  ;[...a].forEach((item) => {
    return (item.style.cssText = "background-color:yellow;")
  })
}
