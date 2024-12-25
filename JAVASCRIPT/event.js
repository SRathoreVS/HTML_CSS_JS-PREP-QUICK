const changeColor = document.getElementById("btn")
changeColor.addEventListener("click",(e) => {
    document.getElementById("myDiv").style.backgroundColor = "yellow"
})

changeColor.addEventListener("mouseover",(e) => {
    document.getElementById("myDiv").style.backgroundColor = "brown"
})

//popups
alert("Hello")
prompt("how are you ?")

confirm("Are you 18+")