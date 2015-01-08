$(document).ready(function() {

	$('.submit').click(function() {
		console.log("clicked")

		$('.on-list').append('<li class="item">' + '<button class="done">Done</button>' + $('.input-box').val() + '</li>');
	});


})