$(document).ready(function() {

//CREATE LI
	$('.submit').click(function() {
	
		var newItem = $('.input-box').val();

		$('.on-list').append('<li class="item">' 
			+ '<button class="done">X</button>' 
			+ newItem + '<button class="complete">&#10003</button></li>');

		$('.input-box').val('');

		return false;
	});

//DELETE LI
	$('.on-list').on('click', '.done', function() {
		$(this).closest('li').fadeOut();
	});


//STRIKETHROUGH ON LI
	$('.on-list').on('click', '.complete', function() {
		console.log('complete clicked');
		$(this).closest('li').toggleClass('strikethrough');
	});
})

