$('body').prepend('<a href="#" class="bottom-top"><i class="icofont icofont-bubble-up"></i></a>');
	var amountScrolled = 300;
	$(window).on('scroll',function() {
		if ( $(window).scrollTop() > amountScrolled ) {
			$('a.bottom-top').fadeIn('slow');
		} else {
			$('a.bottom-top').fadeOut('slow');
		}
	});
	$('a.bottom-top').on('click',function() {
		$('html, body').animate({
			scrollTop: 0
		}, 700);
		return false;
});

/*header footer  code start here*/
$(function(){
  $("#header").load("header.html"); 
  $("#footer").load("footer.html"); 
});
/*header footer  code end here*/

/*blogs script code start here*/
	jQuery(".blogs").owlCarousel({
	  dots:false,
	  autoplay: true,
	  lazyLoad: true,
	  loop:false,
	  margin: 30,
	  animateOut: 'fadeOut',
	  animateIn: 'fadeIn',
	  responsiveClass: true,
	  autoHeight: true,
	  slideSpeed : 300,
	  nav:true,
	  navText: ['<i class="icofont icofont-long-arrow-left fa1"></i> Prev',
	   'Next <i class="icofont icofont-long-arrow-right fa2"></i>'],
	  responsive: {
	  	 320: {
	      items: 1
	    },

	    600: {
	      items: 1
	    },

	    1024: {
	      items:1
	    },

	    1366: {
	      items:1
	    }
	  }
	});
/*blogs script code end here*/

/*slideshow script code start here*/
	jQuery(".slideshow").owlCarousel({
	  dots:true,
	  autoplay: true,
	  lazyLoad: true,
	  loop:false,
	  margin: 30,
	  animateOut: 'fadeOut',
	  animateIn: 'fadeIn',
	  responsiveClass: true,
	  autoHeight: true,
	  slideSpeed : 300,
	  nav:true,
	  navText: ['<i class="icofont icofont-scroll-bubble-left fa1"></i>', '<i class="icofont icofont-scroll-bubble-right fa2"></i>'],
	  responsive: {
	  	 0: {
	      items: 1
	    },

	    600: {
	      items: 1
	    },

	    1024: {
	      items:1
	    },

	    1366: {
	      items:1
	    }
	  }
	});
/*slideshow script code end here*/
/*testimonails script code start here*/
jQuery(".testimonails").owlCarousel({
	  dots:true,
	  autoplay: true,
	  lazyLoad: true,
	  loop:false,
	  margin: 30,
	  animateOut: 'fadeOut',
	  animateIn: 'fadeIn',
	  responsiveClass: true,
	  autoHeight: true,
	  slideSpeed : 300,
	  nav:true,
	  navText: ['<i class="icofont icofont-scroll-bubble-left fa1"></i>', '<i class="icofont icofont-scroll-bubble-right fa2"></i>'],
	  responsive: {
	  	 0: {
	      items: 1
	    },

	    600: {
	      items: 1
	    },

	    1024: {
	      items:1
	    },

	    1366: {
	      items:1
	    }
	  }
	});
/*testimonails script code end here*/
/*dish script code start here*/
jQuery(".dish").owlCarousel({
	  autoplay: true,
	  lazyLoad: true,
	  loop: false,
	  pagination: false,
	  margin: 20,
	  animateOut: 'fadeOut',
	  animateIn: 'fadeIn',
	  responsiveClass: true,
	  autoHeight: true,
	  autoplayTimeout: 7000,
	  smartSpeed: 800,
	  nav: false,
	  navText: ['<i class="fa fa-angle-double-left fa1"></i>', '<i class="fa fa-angle-double-right fa2"></i>'],
	  responsive: {
	 
	    320: {
	      items:1
	    },

	     678: {
	      items:2
	    },


	    1024: {
	      items: 5
	    },

	    1366: {
	      items:5
	    }
	  }
	});
/*dish script code end here*/

// Product Grid
	$('#grid-view').on('click',function(){
		
		$('.mainpage .row > .product-list').attr('class', 'product-layout product-grid col-lg-4 col-md-6 col-sm-6 col-xs-12');
		localStorage.setItem('display', 'grid');
	});
	$('#list-view').on('click',function(){
		
		$('.mainpage .row > .product-grid').attr('class', 'product-layout product-list col-xs-12');
		localStorage.setItem('display', 'list');
	});

	//quantity code
	$(function () {
		$('.add').on('click',function(){
			var $qty=$(this).closest('p').find('.qty');
			var currentVal = parseInt($qty.val());
				$qty.val(currentVal + 1);
		});
		$('.minus').on('click',function(){
			var $qty=$(this).closest('p').find('.qty');
			var currentVal = parseInt($qty.val());
			$qty.val(currentVal - 1);					
		});
	});
	