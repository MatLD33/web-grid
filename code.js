document.addEventListener("DOMContentLoaded", () => {
  // Initial clean up. DO NOT REMOVE.
  initialCleanup();

  let button = document.getElementById("btn-add-line")
  button.addEventListener("click", () => {
    console.log("C'est clické !")
    let gridcube = document.getElementById("grid")
    for (let i = 0; i < 10; i++) {
      gridcube.appendChild(document.createElement('div'))
    }
  })

  let gridcube = document.getElementById("grid")
  for (let cube of gridcube.children) {
    cube.addEventListener("click", () => {
      console.log("Grille clické")
      const random255 = () => Math.floor(Math.random() * 255)
      const randomColor = () =>
        `rgba(${random255()},${random255()},${random255()},1`
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
