$(document).ready(function(){

	$('.nav').on('click' , function(){
		$('.hamburger').toggleClass('is-opened');
		let isClick = $(this).hasClass('click');
		
		if(isClick == true){
			$('.nav__wrap').addClass('hidden');
			$(this).removeClass('click');
			$(this).css('background-color', 'cadetblue');
			$('.main').css('grid-template-columns', '250px 3fr');
			
		}else{
			$('.nav__wrap').removeClass('hidden');
			$(this).addClass('click');
			$(this).css('background-color', 'gray');
			$('.main').css('grid-template-columns', '500px 3fr');
		}
	});
	
	$('.container').on('click' , function(){
		alert('container');	
	});
});