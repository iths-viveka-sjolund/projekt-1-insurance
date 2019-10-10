let buttonToTop = document.querySelector(".tothetop")
buttonToTop.style.backgroundColor = "red"

buttonToTop.addEventListener("click", () => window.scrollTo({ 
    top: 0,
    behavior: 'smooth',
 
}));


