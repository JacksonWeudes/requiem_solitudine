const header = document.querySelector(".header");

function toggleMenu()
{
    const menuIcon = document.querySelector(".menu-icon");
    const sideMenu = document.querySelector(".side-menu");
    const overlay  = document.querySelector(".overlay")

    menuIcon.addEventListener("click", () => {
        sideMenu.classList.toggle("active");
        menuIcon.classList.toggle("active");
        overlay.classList.toggle("active");
        document.body.classList.toggle("active");

        if(window.scrollY == 0){
            header.classList.toggle("active");
        }
    });
}

function activedHeader()
{
    window.addEventListener("scroll", () => {
        if(window.scrollY > 10){
            header.classList.add("active");
        }
        else{
            header.classList.remove("active");
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    toggleMenu();
    activedHeader();
})