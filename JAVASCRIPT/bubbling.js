const body = document.getElementsByTagName('body')[0]
const div = document.getElementsByTagName('div')[0]
const span = document.getElementsByTagName('span')[0]
const btn = document.getElementsByTagName('button')[0]

body.addEventListener('click',(e) => console.log("body was clicked"))
div.addEventListener('click',(e) => console.log("div was clicked"))
span.addEventListener('click',(e) => console.log("span was clicked"))

btn.addEventListener('click',(e) => {
    e.stopPropagation()
    console.log("btn was clicked")
})


//bubbling moves from inner to upper parent tags 
// btn -> span -> div -> body
//to stop this we do event propogation //e.stopPropagation()
// btn || stops here 


