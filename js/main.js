$(document).ready(function () {
  $(document).keydown(function(e){
    if (e.keyCode === 27 ) {
      closeModal();
    }
  });

  // load comments
  $(".comments__item").slice(0, 4).addClass("comments__item--visible");
  $("#loadMore").on('click', function(event){
    event.preventDefault();

    $(".comments__item:hidden").slice(0, 4).slideDown().addClass("comments__item--visible");

    var count = $(".comments__item:hidden").length;
    if(count === 0) $("#loadMore").addClass("comments__button--hidden")
  });
  
  //  Мобильное меню
  var menuButton = $(".menu-button"); 
  menuButton.on("click", function () {
    $(".navbar-menu").toggleClass("navbar-menu--visible");
  }); 

  var bookmarks = $(".news__bookmark");
  bookmarks.on("click", function(event){
    if(event) event.preventDefault();
    $(this).toggleClass("news__bookmark--active");
  })

// Табы
  var tabsItem = $(".tabs__item");
  var contentItem = $(".content__item");

  tabsItem.on('click', function(event) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass("tabs__item--active");
    contentItem.removeClass("content__item--active");
    $(activeContent).addClass("content__item--active");
    $(this).addClass("tabs__item--active");
  });

  // Модальное окно
  var modalButton = $("[data-toggle=modal]");
  // var modalEvent = $(".modal__button");
  var closeModalButton = $(".modal__close, .modal__overlay");
  modalButton.on("click", openModal);
  // modalEvent.on('click', sendModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    if(event) {
      event.preventDefault();
    }

    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }

  // Обработка форм
  $(".footer__form").each(function() {
    $(this).validate({
      errorClass: "failed",
      messages: {
        email: {
          required: "Вы не указали Ваш email",
          email: "Формат email-адреса name@domain.com"
        },
      }
    })
  });

  $(".comments__content-info").each(function() {
    $(this).validate({
      errorClass: "invalid failed__message",
      messages: {
        message: {
          required: "Минимальное количество символов: 100",
          minlength: "Минимальное количество символов: 100"
        }
      }
    })
  });

  $(".form").each(function() {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Вы не указали Ваше имя",
          minlength: "Имя не должно быть меньше 2 букв"
        },
        email: {
          required: "Вы не указали Ваш email",
          email: "Формат email-адреса name@domain.com"
        },
        phone: {
          required: "Вы не указали номер Вашего телефона",
          minlength: "Номер должен состоять из 11 цифр"
        }
      }
    })
  });

  $(document).ready(function() {
    $(".phone").mask("+7 (999) 999-99-99");
  });

  var hotelSwiper = new Swiper('.hot-slider', {
    // Optional parameters
    loop: false,
    
    autoplay: {
      delay: 1000,
      stopOnLastSlide: false,
      disableOnInteraction: false
    },

    pagination: {
      el: '.swiper-pagination',
      // Буллеты
      type: 'bullets',
      clickable: true,
    },

    // Navigation arrows
    // navigation: {
    //   nextEl: '.hotel-slider__button--next',
    //   prevEl: '.hotel-slider__button--prev',
    // },
    speed: 600
  });

  AOS.init();
});
