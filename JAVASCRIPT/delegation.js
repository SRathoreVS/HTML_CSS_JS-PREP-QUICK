const div = document.getElementsByTagName("div")[0];

div.addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON") {
    console.log("btn was clicked");
  } else if (e.target.tagName == "SPAN") {
    console.log("span was clicked");
  }
});

//btn was clicked
//span if span was clicked 

//rescued from being in bubbling . 