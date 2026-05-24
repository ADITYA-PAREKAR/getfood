let giftCnt = document.getElementById("giftCnt")
let giftclose = document.getElementById("giftclose")
let redeembtn = document.getElementById("redeembtn")

let chatform = document.getElementById("chatform")
let chatBot = document.getElementById("chatBot")
let formclose = document.getElementById("formclose")

redeembtn.addEventListener("click",()=>{
    giftCnt.style.display = "block"
})
giftclose.addEventListener("click",()=>{
    giftCnt.style.display = "none"
})

chatBot.addEventListener("click",()=>{
    chatform.style.display = "block"
})
formclose.addEventListener("click",()=>{
    formclose.style.display = "none"
})