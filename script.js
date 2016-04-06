var gridSquares = 16;
var $height = 800 / gridSquares;
var $width = 800 / gridSquares;

function addDivs(num) {
  for (i = 0; i < num; i++) {
    $(".container").append("<div class='pixel'></div>");
  }
}

function resetPixels() {
	$(".pixel").each(function() {
		if($(this).hasClass("hovered")) {
			$(this).removeClass("hovered");
		}
	});
}

$(document).ready(function() {
	addDivs((gridSquares * gridSquares));


	$("#reset").on("click", resetPixels);
	$("#reset").on("click", function() {
		gridSquares = prompt("How big is your mind?")
		console.log(gridSquares); //Everything below this line is under work
		$(".pixel").each(function() {
			$(this).remove();
		});
		$height = 800 / gridSquares;
		$width = 800 / gridSquares;
		addDivs(gridSquares * gridSquares);
		$(".pixel").each(function() {
			$(this).css({"height":$height, "width":$width});
		});
	});

	$(".container").on("mouseenter", ".pixel", function() {
	  $(this).addClass("hovered");
	});
});