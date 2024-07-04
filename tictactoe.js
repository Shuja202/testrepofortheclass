boxeslist = [0, 0, 0, 0, 0, 0, 0, 0, 0];
playerturn = 1;

const boxes = document.querySelectorAll(".box");

boxes.forEach((eachbox) => {
  eachbox.addEventListener("click", function () {
    if (boxeslist[eachbox.id - 1] == 0) {
      const image = document.createElement("img");
      image.src = "images/tickimage.png";
      image.alt = "Tick Image";
      eachbox.appendChild(image);
      boxeslist[eachbox.id - 1] = playerturn;
      console.log(boxeslist);
    }
  });
});
