$(document).ready(function () {
  $(document).keydown(function(e){

  });

  // $('.newsletter').parallax({imageSrc: './img/newsletter-bg.jpg'});

var menuButton = $(".menu-button"); 
menuButton.on("click", function () {
  $(".navbar-menu").toggleClass("navbar-menu--visible");
});


  AOS.init();
});
