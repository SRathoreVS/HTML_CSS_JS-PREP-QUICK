//ONCLICK and ANNIMATION

const myMove = () => {
    let pos = 0;
    const element = document.getElementById("inside");
    const id = setInterval(() => {
      if (pos >= 350) {
        clearInterval(id); // Stop the interval when the position reaches 350
      } else {
        pos++;
        element.style.top = pos + "px";
        element.style.left = pos + "px";
      }
    }, 5); // Adjust interval speed if needed
  };

//onclick for color change

const changeColor = () => {
    let div1 = document.getElementsByTagName("div")
    // const newColor = getRandomColor(); // Generate a random color
    div1.style.backgroundColor = "orange";
}

// const getRandomColor = () => {
//     const letters = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };

  //Mouseover 

const onMouseover = () => {
  let div = document.getElementsByTagName("div")
  div.style.backgroundColor = "blue"
}