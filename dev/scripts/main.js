$(function() {

	var $hamburger = $(".hamburger");
	$hamburger.on("click", function(e) {
	  $hamburger.toggleClass("is-active");
	  $(".nav__list").toggleClass("hide");
	  $(".nav__list").toggleClass("show");

	});

});