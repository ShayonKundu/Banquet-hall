
// aucontainer transition on scroll
function reveal() {
  var reveals = document.querySelectorAll(".aucontainer");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

const menuBtn = document.querySelector('.menu-btn')
const navigation = document.querySelector('.nav')
const navigationCloseBtn = document.querySelector('.nav-close-btn')

const IS__ACTIVE = 'is--active'

const toggleNavigation = () => {
  navigation.classList.toggle(IS__ACTIVE)
}

const CLICK = 'click'
menuBtn.addEventListener(CLICK, toggleNavigation)
navigationCloseBtn.addEventListener(CLICK, toggleNavigation)