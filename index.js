const containerAc = document.getElementById("container")
const registerBtn = document.getElementById("register")
const loginBtn = document.getElementById("logIn")


registerBtn.addEventListener("click", () => {
    containerAc.classList.add("active")
})



loginBtn.addEventListener("click", () => {
    containerAc.classList.remove("active")
})




//profile dashboard 
