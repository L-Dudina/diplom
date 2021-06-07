$(document).ready(function () {
  $(document).keydown(function(e){
    if (e.keyCode === 27 ) {
      closeModal();
    }
  });

//  Мобильное меню
  var menuButton = $(".menu-button"); 
  menuButton.on("click", function () {
    $(".navbar-menu").toggleClass("navbar-menu--visible");
  }); 

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

  //////////////////////

  // function sendModal() {
  //   if($(".form").valid()){
  //     closeModal();
  //     setTimeout(() => {        
  //       spaceSendModal();
  //     }, 500);
  //   }
  // }

  // function spaceSendModal(){
  //   openSendModal();
    
  //   function openSendModal() {
  //     var modalSendOverlay = $(".modal__overlay");
  //     var modalSendDialog = $(".modal__dialog--send");
  //     modalSendOverlay.addClass("modal__overlay--visible");
  //     modalSendDialog.addClass("modal__dialog--visible");

  //     var closeSendModalButton = $(".modal__close, .modal__overlay");
  //     closeSendModalButton.on("click", closeSendModal);
  //   }

  //   function closeSendModal(event) {
  //     if(event) {
  //       event.preventDefault();
  //     }

  //     var modalOverlay = $(".modal__overlay");
  //     var modalDialog = $(".modal__dialog--send");
  //     modalOverlay.removeClass("modal__overlay--visible");
  //     modalDialog.removeClass("modal__dialog--visible");
  //   }
  // }

  ///////////////

  // Обработка форм
  $(".form").each(function() {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Ваше имя",
          minlength: "Имя не должно быть меньше 2 букв"
        },
        email: {
          required: "Ваш email",
          email: "Формат email-адреса name@domain.com"
        },
        phone: {
          required: "Номер Вашего телефона",
          minlength: "Номер должен состоять из 11 цифр"
        }
      }
    })
  });

  $(document).ready(function() {
    $(".phone").mask("+7 (999) 999-99-99");
  });

  AOS.init();
});
