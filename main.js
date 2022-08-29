/*** text & image appear/disappear from left & right */
const h1 = document.querySelector("h1")
const h2 = document.querySelector("h2")
const p = document.querySelector("p")
const starbucksItem = document.getElementById("starbucksItem")

window.addEventListener('scroll', function() {
    console.log(starbucksItem)
    console.log(p)
    let yPosition = window.scrollY
    console.log("yPosition", yPosition)

    if (yPosition>250){
        h1.style.animation="slideOutLeft 2s ease-in forwards"
        h2.style.animation="slideOutLeft 3s ease-in forwards"
        p.style.animation="slideOutLeft 4s ease-in forwards"
        starbucksItem.style.animation="slideOutRight 2s ease-in forwards"
    } else {
        h1.style.animation="slideInLeft 2s ease-out forwards"
        h2.style.animation="slideInLeft 3s ease-in forwards"
        p.style.animation="slideInLeft 4s ease-in forwards"
        starbucksItem.style.animation="slideInRight 2s ease-out forwards"
    }
})

/*** when hover, underline menu */
const underline = document.getElementById("underline");
const navMenu = document.querySelectorAll("a")

navMenu.forEach(menu => menu.addEventListener("mouseover", e => underlineMenu(e)))

function underlineMenu(e) {
    underline.style.left = e.currentTarget.offsetLeft + "px";
    underline.style.width = e.currentTarget.offsetWidth + "px";
    underline.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}