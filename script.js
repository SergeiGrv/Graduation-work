$(document).ready(function(){
	$('.header__button-menu_hidden').click(function(){
		$('.header__navigation-menu_hidden').slideToggle('slow');
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
		$("html,body").addClass("fixed");
	});

	$('.popup-container').click(function(event){
		if(event.target == this){
			$(this).hide();
			$("html,body").removeClass("fixed");
		}
	});

	/*Узнать больше, узнать стоимость, заказать проект*/

	$('.main-block__description__button-findinfo').add($('.main__fixed-container__findprice__button')).add($('.main__fixed-container-2__order-button')).click(function(){
		$('.popup-container-2').show();
		$("html,body").addClass("fixed");
	});

	$('.popup-container-2').click(function(event){
		if(event.target == this){
			$(this).hide();
			$("html,body").removeClass("fixed");
		}
	});

	$('.popup__form-number').add('.popup-2__form-number').mask('8(999) 999-99-99');

});