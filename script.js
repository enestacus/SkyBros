const scrollToTop = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', checkHeight)

function checkHeight(){
  if(window.scrollY > 200) {
    scrollToTop.style.display = "flex"
  } else {
    scrollToTop.style.display = "none"
  }
}

scrollToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})


const cheeseburger = document.querySelector(".cheeseburger");
const menu = document.querySelector(".menu");

cheeseburger.addEventListener("click", () => {
  cheeseburger.classList.toggle("active");
  menu.classList.toggle("active");
})

document.querySelectorAll(".choice").forEach(n => n.addEventListener("click", () => {
  cheeseburger.classList.remove("active");
  menu.classList.remove("active");
}))