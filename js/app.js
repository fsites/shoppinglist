$(document).ready(function() {

	$('.submit').click(function() {
	
		var newItem = $('.input-box').val();

		$('.on-list').append('<li class="item">' 
			+ '<button class="done">Done</button>' 
			+ newItem + '</li>');

		$('.input-box').val('');

		return false;


	});

	$('.on-list').on('click', '.done', function() {
		console.log('clicked');
		$(this).closest('li').remove();
	});

	

	

});

