

const btn = document.getElementById("clickMeBtn");

// console.log(btn);

btn.addEventListener("click", function(){
    console.log("You click a button");
})


const textElement = document.getElementById("textTitle");
const changeBtnElement = document.getElementById("changeTextBtn");
const backBtnElement = document.getElementById("backBtn");

// console.log(changeBtnElement, backBtnElement, textElement)

changeBtnElement.addEventListener("click", () =>{
    textElement.innerText="Oh no !!! a Trung het dep trai roiii !!";
})

backBtnElement.addEventListener("click", ()=>{
    textElement.innerText="Adu anh Trung sieu cap dep trai kia tui bay!!!"
})