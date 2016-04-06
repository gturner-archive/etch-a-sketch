function addDivs(num) {
  for (i = 0; i < num; i++) {
    $(".container").append("<div class='pixel'></div>");
  }
}



addDivs(256);
$(".pixel").on("mouseenter", function() {
  $(this).addClass("hovered");
});
