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
    })
}

document.addEventListener("DOMContentLoaded", () => {
    toggleMenu();
})