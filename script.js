// Created by Sebastian

// Adds main to the script
document.getElementById(main)

// Creates the mainBox and Boxes inside the mainBox.
const mainBox = document.createElement("div")
const leftBox = document.createElement("div")
const rightBox = document.createElement("div")

// Creates div elements inside the rightBox inside of the mainBox
const rightBox1 = document.createElement("div")
const rightBox2 = document.createElement("div")
const rightBox3 = document.createElement("div")


// Creates buttons that are going into leftBox
const button1 = document.createElement("button")
const button2 = document.createElement("button")
const button3 = document.createElement("button")
const button4 = document.createElement("button")
const button5 = document.createElement("button")

// Adds texts into each button
button1.innerText = "justify-content: start;"
button2.innerText = "justify-content: center;"
button3.innerText = "justify-content: space-between;"
button4.innerText = "justify-content: space-around;"
button5.innerText = "justify-content: space-evenly;"

// Adds texts into each div in the rightBox
rightBox1.innerText = "Div1"
rightBox2.innerText = "Div2"
rightBox3.innerText = "Div3"

// Adds styling into the div elements in rightBox
rightBox1.classList.add("box")
rightBox2.classList.add("box")
rightBox3.classList.add("box")

// Adds styling into mainBox, leftBox and rightBox
mainBox.classList.add("mainBox")
leftBox.classList.add("leftBox")
rightBox.classList.add("rightBox")

// Makes mainBox a child of main
main.appendChild(mainBox)

// Makes leftBox and rightBox a child of mainBox
mainBox.appendChild(leftBox)
mainBox.appendChild(rightBox)

// Makes the buttons a child of leftBox
leftBox.appendChild(button1)
leftBox.appendChild(button2)
leftBox.appendChild(button3)
leftBox.appendChild(button4)
leftBox.appendChild(button5)

// Makes the test divs into a child of rightBox
rightBox.appendChild(rightBox1)
rightBox.appendChild(rightBox2)
rightBox.appendChild(rightBox3)

// 
function justifyStart(){
    rightBox.classList.add()
}

// Makes the buttons clickable and make them call a function
button1.addEventListener("click", justifyStart)
button2.addEventListener("click", RuneSide)
button3.addEventListener("click", EgilSide)
button4.addEventListener("click", RuneSide)
button5.addEventListener("click", EgilSide)