$(document).ready(function(){
	$('.nav__button-menu_hidden').click(function(){
		$('.nav__navigation-menu_hidden').slideToggle('slow');
	});

	$('.main__fixed-container-2__work-examples').slick({
  	nextArrow: '<button class="slick-arrow-next"><i class="fa fa-angle-right"></i></button>',
  	prevArrow: '<button class="slick-arrow-prev"><i class="fa fa-angle-left"></i></button>',
    slidesToShow: 3,
    responsive: [
	    {
		  breakpoint: 1191,
		  settings: {
		  slidesToShow: 2,
		  arrows:false,
		  dots:true 
		  }
		},
		{
		  breakpoint: 681,
		  settings: {
		  slidesToShow: 1 ,
		  arrows:false,
		  dots:true }
	 	}
	  ]
    });

	/*Заказать звонок*/

    $('.header__call-button').add($('.main__fixed-container-3__call-button')).add($('.header__call-button_hidden')).click(function(){
		$('.popup-container').show();
	});

	$('.popup-container').click(function(event){
		if(event.target == this){
			$(this).hide();
		}
	});

	$('.popup__button-submit').click(function(){
		$('.popup__form-name').val('');
		$('.popup__form-number').val('');
	});

	/*Узнать больше, узнать стоимость, заказать проект*/

	$('.main-block__description__button-findinfo').add($('.main__fixed-container__findprice__button')).add($('.main__fixed-container-2__order-button')).click(function(){
		$('.popup-container-2').show();
	});

	$('.popup-container-2').click(function(event){
		if(event.target == this){
			$(this).hide();
		}
	});

	$('.popup-2__button-submit').click(function(){
		$('.popup-2__form-name').val('');
		$('.popup-2__form-number').val('');
	});
});