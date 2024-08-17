const menuIcon = document.querySelector(".menu-icon"),
nav = document.querySelector(".nav"),
menu = document.querySelector(".bx-menu"),
x = document.querySelector(".bx-x")


menuIcon.addEventListener("click" , () => {
    console.log("clicked")
    nav.style.transition = "all ease-in-out .8s"
    nav.classList.toggle("active")
    nav.classList.toggle("hidden")
    menu.classList.toggle("active")
    menu.classList.toggle("hidden")
    x.classList.toggle("active")
    x.classList.toggle("hidden")
})