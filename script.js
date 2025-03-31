document.getElementById(main)

const mainBox = document.createElement("div")
const leftBox = document.createElement("div")
const rightBox = document.createElement("div")

const rightBox1 = document.createElement("div")
const rightBox2 = document.createElement("div")
const rightBox3 = document.createElement("div")

const button1 = document.createElement("button")
const button2 = document.createElement("button")
const button3 = document.createElement("button")
const button4 = document.createElement("button")
const button5 = document.createElement("button")

const egilText = document.createElement("p")
const runeText = document.createElement("p")

button1.innerText = "justify-content: start;"
button2.innerText = "justify-content: center;"
button3.innerText = "justify-content: space-between;"
button4.innerText = "justify-content: space-around;"
button5.innerText = "justify-content: space-evenly;"

rightBox1.innerText = "Div1"
rightBox2.innerText = "Div2"
rightBox3.innerText = "Div3"

rightBox1.classList.add("box")
rightBox2.classList.add("box")
rightBox3.classList.add("box")


mainBox.classList.add("mainBox")
leftBox.classList.add("leftBox")
rightBox.classList.add("rightBox")

main.appendChild(mainBox)

mainBox.appendChild(leftBox)
mainBox.appendChild(rightBox)

leftBox.appendChild(button1)
leftBox.appendChild(button2)
leftBox.appendChild(button3)
leftBox.appendChild(button4)
leftBox.appendChild(button5)

rightBox.appendChild(rightBox1)
rightBox.appendChild(rightBox2)
rightBox.appendChild(rightBox3)

function justifyStart(){
    rightBox.classList.add()
}

button1.addEventListener("click", justifyStart)
button2.addEventListener("click", RuneSide)
button3.addEventListener("click", EgilSide)
button4.addEventListener("click", RuneSide)
button5.addEventListener("click", EgilSide)