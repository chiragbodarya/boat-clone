const carousalItems = document.querySelectorAll(".item");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
// ------------------------------------------------------------------------------------------------------------------------------
// scroll lists   - HEADER

const categories = document.getElementById("categories");
const more = document.getElementById("more");
const scrollCatagories = document.querySelector(".scroll-list-categorie");
const scrollMore = document.querySelector(".scroll-list-more");
const carousal = document.querySelector(".carousal");

categories.addEventListener("mouseenter", function () {
  scrollCatagories.classList.add("show");
});
categories.addEventListener("mouseout", function () {
  scrollCatagories.classList.remove("show");
});

more.addEventListener("click", function () {
  scrollMore.classList.toggle("show");
});

// ------------------------------------------------------------------------------------------------------------------------------

// Adding events to buttons   - SECTION
let slidePosition = 0;
let totalsliders = carousalItems.length;

const dots = document.querySelectorAll(".dot");

prevBtn.addEventListener("click", () => {
  previous();
});
nextBtn.addEventListener("click", () => {
  next();
});

function upadteposition() {
  carousalItems.forEach((slide, ind) => {
    // apply all values
    slide.classList.remove("active");
    slide.classList.add("hidden");
  });
  //          [0].active adding
  carousalItems[slidePosition].classList.add("active");

  // dots
  dots.forEach((dot) => {
    dot.classList.remove("dot-active");
  });

  dots[slidePosition].classList.add("dot-active");
}
// dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", function () {
    slidePosition = index;
    upadteposition();
  });
});

function previous() {
  upadteposition();

  if (slidePosition == 0) {
    slidePosition = totalsliders - 1;
  } else {
    slidePosition--;
  }
}

function next() {
  upadteposition();

  if (slidePosition == totalsliders - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
}
// ------------------------------------------------------------------------------------------------------------------------------

// Automatic slider

const Interval = setInterval(() => {
  upadteposition();
  next();
}, 3000);

// ------------------------------------------------------------------------------------------------------------------------------

// const section5 = document.querySelector(".full-img")
// const contentitem = document.querySelectorAll(".contentitem")

// section5.addEventListener("mouseenter", () => {
//     contentposition();
//     item++;
// })

// let item = 0;
// let contentitemLength = contentitem.length

// function contentposition() {
//     contentitem.forEach((item, ind) => {
//         item.classList.remove("active")
//     })
//     contentitem[item].classList.add("hidden")
// }

// // let contentInterval = setInterval(() => {
// //     contentposition();
// //     contentnext()
// // }, 1000);

// let contenttimeout = setTimeout(() => {
//     clearInterval(contentInterval)
// }, 2000);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {

    320: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3.5,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4.5,
      spaceBetween: 50,
    },
    1250: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".explore", {
  slidesPerView: "auto",
  spaceBetween: 20,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 3.5,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 4.5,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".blog", {
  slidesPerView: "auto",
  spaceBetween: 20,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 3.5,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 4.5,
      spaceBetween: 30,
    },
  },
});

function openNav() {
  function myFunction(x) {
    if (x.matches) {
      document.getElementById("mySidenav").style.width = "100%";
    } else {
      document.getElementById("mySidenav").style.width = "400px";
    }
  }

  var x = window.matchMedia("(max-width: 400px)");
  myFunction(x);
  x.addListener(myFunction);

  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";

  document.body.style.backgroundColor = "white";
}

const mySidenav = document.getElementById("mySidenav");
mySidenav.addEventListener('click', () => {
  document.getElementById("mySidenav").style.width = "0";
});


function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    if (cityName === tabcontent[i].id) {
      tabcontent[i].style.display = "flex";
      tabcontent[i].classList.add("active_tab");
    } else {
      tabcontent[i].style.display = "none";
    }
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
