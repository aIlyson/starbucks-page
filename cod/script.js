// hover do menu 

$(document).ready(function(){
  $("#explore").hover(
      function() {
          $(".explore-cafe-container").show(); // Quando o mouse entra no item do menu
      },
      function() {
          $(".explore-cafe-container").hide(); // Quando o mouse sai do item do menu
      }
  );
});

$(document).ready(function(){
  $(".explore-cafe-container").hover(
      function() {
          $(".explore-cafe-container").show(); // Quando o mouse entra no item do menu
      },
      function() {
          $(".explore-cafe-container").hide(); // Quando o mouse sai do item do menu
      }
  );
});


$(document).ready(function(){
  $("#receitas").hover(
      function() {
          $(".receitas-container").show(); // Quando o mouse entra no item do menu
      },
      function() {
          $(".receitas-container").hide(); // Quando o mouse sai do item do menu
      }
  );
});

$(document).ready(function(){
  $(".receitas-container").hover(
      function() {
          $(".receitas-container").show(); // Quando o mouse entra no item do menu
      },
      function() {
          $(".receitas-container").hide(); // Quando o mouse sai do item do menu
      }
  );
});


$(document).ready(function(){
  $("#saiba-mais").hover(
      function() {
          $(".saiba-mais-container").show(); // Quando o mouse entra no item do menu
      },
      function() {
          $(".saiba-mais-container").hide(); // Quando o mouse sai do item do menu
      }
  );
});

$(document).ready(function(){
  $(".saiba-mais-container").hover(
      function() {
          $(".saiba-mais-container").show(); // Quando o mouse entra no item do menu
      },
      function() {
          $(".saiba-mais-container").hide(); // Quando o mouse sai do item do menu
      }
  );
});


// --------------------

// parte do cart

document.getElementById("cartBtn").addEventListener("click", function(event) {
  event.preventDefault(); // Evita o comportamento padrão do link
  document.getElementById("cartContainer").style.display = "block";
});

function fecharContainer() {
  document.getElementById("cartContainer").style.display = "none";
}

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

for (let i = 1; i < qtyRemover.length; i++) {
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
