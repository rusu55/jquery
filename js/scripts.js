// Scroll Top Menu

$(window).on("scroll", function() {
  if ($(window).scrollTop() >= 150) {
    $("header").addClass("black");
  } else {
    $("header").removeClass("black");
  }
});
