const openExplore = () => $(".explore-cafe-container").toggle();
const openRecipe = () => $(".receitas-container").toggle();
const openArticle = () => $(".saiba-mais-container").toggle();

$("#explore, .explore-cafe-container").hover(openExplore);
$("#receitas, .receitas-container").hover(openRecipe);
$("#saiba-mais, .saiba-mais-container").hover(openArticle);

// --------------------

const cartBtn = document.getElementById("cartBtn");
const cartContainer = document.getElementById("cartContainer");
const closeCart = document.querySelector(".fechar");

function openCart(event) {
  event.preventDefault();
  cartContainer.style.display = "block";
}

cartBtn.addEventListener("click", openCart);

closeCart.addEventListener("click", function () {
  cartContainer.style.display = "none";
});

//---------------------

const hamburgerIcon = document.getElementById("hamburger-icon");
const mobileOpenMenu = document.getElementById("open-menu");
const closeMenu = document.querySelector(".close-menu");

hamburgerIcon.addEventListener("click", () => {
  mobileOpenMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  mobileOpenMenu.classList.remove("active");
});

// --------------------

document.addEventListener("DOMContentLoaded", function () {
  const produtosLink = document.getElementById("nossos-produtos-mobile");
  const receitasLink = document.getElementById("receitas-mobile");
  const saibaMaisLink = document.getElementById("saiba-mais-mobile");
  const produtosContainer = document.getElementById("nossos-produtos-info");
  const receitasContainer = document.getElementById("receitas-info");
  const saibaMaisContainer = document.getElementById("saiba-mais-info");
  const produtosCloseButton = document.querySelector(
    "#nossos-produtos-info .close-info"
  );
  const receitasCloseButton = document.querySelector(
    "#receitas-info .close-info"
  );
  const saibaMaisCloseButton = document.querySelector(
    "#saiba-mais-info .close-info"
  );
  const closeMenuButton = document.querySelector(".close-menu-container");
  const closeMenuButtonReceitas = document.querySelector(
    ".close-menu-container-R"
  );
  const closeMenuButtonSaibaMais = document.querySelector(
    ".close-menu-container-SB"
  );

  // Adiciona evento de clique ao links

  produtosLink.addEventListener("click", function (event) {
    event.preventDefault();
    produtosContainer.classList.add("active");
  });

  receitasLink.addEventListener("click", function (event) {
    event.preventDefault();
    receitasContainer.classList.add("active");
  });

  saibaMaisLink.addEventListener("click", function (event) {
    event.preventDefault();
    saibaMaisContainer.classList.add("active");
  });

  // Adiciona evento de clique ao botão de fechar o container

  produtosCloseButton.addEventListener("click", function () {
    produtosContainer.classList.remove("active");
  });

  receitasCloseButton.addEventListener("click", function () {
    receitasContainer.classList.remove("active");
  });

  saibaMaisCloseButton.addEventListener("click", function () {
    saibaMaisContainer.classList.remove("active");
  });

  // Adiciona evento de clique ao botão de fechar o menu inteiro

  closeMenuButton.addEventListener("click", function () {
    const mobileOpenMenu = document.getElementById("open-menu");
    mobileOpenMenu.classList.remove("active");
    produtosContainer.classList.remove("active");
  });

  closeMenuButtonReceitas.addEventListener("click", function () {
    const mobileOpenMenu = document.getElementById("open-menu");
    mobileOpenMenu.classList.remove("active");
    receitasContainer.classList.remove("active");
  });

  closeMenuButtonSaibaMais.addEventListener("click", function () {
    const mobileOpenMenu = document.getElementById("open-menu");
    mobileOpenMenu.classList.remove("active");
    saibaMaisContainer.classList.remove("active");
  });
});

// --------------------

const carouselSlide = document.querySelector(".carousel-slide");
const prevButton = document.querySelector(".carousel-button.prev");
const nextButton = document.querySelector(".carousel-button.next");
const indicators = document.querySelectorAll(".indicator");

let counter = 0;

const handleCarouselNavigation = (indexChange) => {
  counter = (counter + indexChange + indicators.length) % indicators.length;
  const translateXValue = -counter * 100;
  carouselSlide.style.transform = `translateX(${translateXValue}%)`;
  indicators.forEach((indicator, i) =>
    indicator.classList.toggle("active", i === counter)
  );
};

prevButton.addEventListener("click", () => handleCarouselNavigation(-1));
nextButton.addEventListener("click", () => handleCarouselNavigation(1));
indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () =>
    handleCarouselNavigation(index - counter)
  );
});

// --------------------

const qtyRemover = document.querySelectorAll(".qt-remover");
const qtyAdicionar = document.querySelectorAll(".qt-adicionar");
const qtyValor = document.querySelectorAll(".numero");

for (let i = 0; i < qtyRemover.length; i++) {
  const remover = qtyRemover[i];
  const adicionar = qtyAdicionar[i];
  const valor = qtyValor[i];

  remover.addEventListener("click", () => {
    const numero = parseInt(valor.innerText);
    valor.innerText = Math.max(numero - 1, 1);
  });

  adicionar.addEventListener("click", () => {
    const numero = parseInt(valor.innerText);
    valor.innerText = Math.max(numero + 1, 1);
  });
}

// --------------------

$(document).ready(function () {
  $(".coffe-container").slick({
    centerMode: true,
    centerPadding: "0%", // Espaço entre as imagens
    slidesToShow: 3, // Mostra três imagens
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "10%", // Reduzindo o espaço entre as imagens para dispositivos menores
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "5%", // Reduzindo ainda mais o espaço para dispositivos menores
          slidesToShow: 1,
        },
      },
    ],
    prevArrow: false, // Remove o botão de navegação "Anterior"
    nextArrow: false, // Remove o botão de navegação "Próximo"
  });

  $(".coffe-container img").on("click", function (e) {
    const $carousel = $(".coffe-container");
    const clickX = e.pageX;
    const widthBody = document.body.offsetWidth;

    const isLeft = clickX < widthBody / 2;

    if (isLeft) {
      $carousel.slick("slickPrev"); // Avança para o slide anterior
    } else {
      $carousel.slick("slickNext"); // Avança para o próximo slide
    }
  });
});
