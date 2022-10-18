const burger_menu = document.querySelector("#burger_menu");
const phone = document.querySelector(".phone");
const close_svg = document.querySelector(".close_svg");

burger_menu.addEventListener("click", toggleNav);

function toggleNav() {
  if (phone.classList.contains("active")) {
    phone.classList.remove("active");
  } else {
    phone.classList.add("active");
  }
}

close_svg.addEventListener("click", toggleNav);
