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

const qtyRemover = document.querySelectorAll(".qt-remover");
const qtyAdicionar = document.querySelectorAll(".qt-adicionar");
const qtyValor = document.querySelectorAll(".numero");

for (let i = 0; i < qtyRemover.length; i++) {
  const remover = qtyRemover[i];
  const adicionar = qtyAdicionar[i];
  const valor = qtyValor[i];

  remover.addEventListener("click", () => {
    const numero = parseInt(valor.innerText);
    valor.innerText = Math.max(numero - 1, 0);
  });

  adicionar.addEventListener("click", () => {
    const numero = parseInt(valor.innerText);
    valor.innerText = Math.max(numero + 1, 0);
  });
}

// --------------------

$(document).ready(function () {
  $(".galeria").slick({
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

  // Adiciona evento de clique para cada imagem
  $(".galeria img").on("click", function (e) {
    const $carousel = $(".galeria");
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
