const App = {
    //All of ours selected HTML elements
    $: {
        menu: document.querySelector('.menu'),
        menuItems: document.querySelector(".items"),

    }
}



const menu = document.querySelector('.menu')
const menuItems = menu.querySelector(".items");

menu.addEventListener("click", (event) =>{
    menuItems.classList.toggle("hidden");
});