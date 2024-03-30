function slideDownEvents() {
  const eventsTitle = document.querySelector(".events-title");

  function slideEvents() {
    const events = document.querySelector(".events");
    const eventsBtnIcon = document.getElementById("events-btn").children[0];
    eventsBtnIcon.classList.toggle("bxs-chevron-up");
    events.classList.toggle("active");
  }

  eventsTitle.addEventListener("click", slideEvents);
  }
slideDownEvents();

function slideToTop() {
  const sobre = document.getElementById("sobre");
  const topButton = document.getElementById("back-to-top");

  function backToTop() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }

  topButton.addEventListener("click", backToTop);

  function activeTopButton() {
    if (sobre.getBoundingClientRect().top <= 0 ) {
      topButton.classList.add("active");
    } else {
      topButton.classList.remove("active")
    }
  }

  window.addEventListener("scroll", activeTopButton);

}
slideToTop();



function menuMobile() {
  const menuIcon = document.querySelector(".menu-icon i");
  const closeBtn = document.querySelector(".bx-x");
  const mobileMenu = document.querySelector(".mobile-menu");
  const header = document.querySelector(".header");
  const navItens = document.querySelectorAll(".mobile-menu li a");

  function activeMenu() {
    mobileMenu.classList.toggle("active");
    header.classList.toggle("active");
  }

  function hideMenu() {
    mobileMenu.classList.remove("active");
    header.classList.remove("active");
  }

  navItens.forEach( item => {
    item.addEventListener("click", hideMenu);
  });

  menuIcon.addEventListener("click", activeMenu);
  closeBtn.addEventListener("click", hideMenu);
}
menuMobile();

const ano = document.getElementById("ano");
ano.innerText = new Date().getFullYear() + " ";