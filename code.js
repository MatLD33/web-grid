/*Mattéo Leturcq--Daligaux*/

document.addEventListener("DOMContentLoaded", () => {
  // Initial clean up. DO NOT REMOVE.
  initialCleanup();

  const random255 = () => Math.floor(Math.random() * 255)
  const randomColor = () =>
    `rgba(${random255()},${random255()},${random255()},1`

  let button = document.getElementById("btn-add-line")
  button.addEventListener("click", () => {
    console.log("C'est clické !")
    let gridcube = document.getElementById("grid")
    for (let i = 0; i < 10; i++) {
      let new_div = document.createElement('div')
      gridcube.appendChild(new_div)
      new_div.addEventListener("click", () => {
        console.log("Grille clické")
        new_div.style.backgroundColor = randomColor()
      })
      new_div.addEventListener("mouseover", () => {
        new_div.style.backgroundColor = randomColor()
      })
    }
  })

  let gridcube = document.getElementById("grid")
  for (let cube of gridcube.children) {
    cube.addEventListener("click", () => {
      console.log("Grille clické")
      cube.classList.add("clicked")
      cube.style.backgroundColor = randomColor()
    })

    cube.addEventListener("mouseover", () => {
      cube.style.backgroundColor = randomColor()
    })
  }



});

/**
 * Cleans up the document so that the exercise is easier.
 *
 * There are some text and comment nodes that are in the initial DOM, it's nice
 * to clean them up beforehand.
 */
function initialCleanup() {
  const nodesToRemove = [];
  document.getElementById("grid").childNodes.forEach((node, key) => {
    if (node.nodeType !== Node.ELEMENT_NODE) {
      nodesToRemove.push(node);
    }
  });
  for (const node of nodesToRemove) {
    node.remove();
  }
}
