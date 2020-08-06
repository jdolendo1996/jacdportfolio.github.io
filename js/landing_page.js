$( document ).ready(function() {

	
/*FOR NAV BAR ACTIONS*/

// Get RAW DOM 
const main       = document.getElementById("navbar_lp");

// Get the offset positions
const offset_main      = main.offsetTop;


// Scroll Action to make sticky navbar and change active state
$( window ).scroll(function() {
	if (window.pageYOffset > offset_main) {
		$('#navbar_lp').addClass('sticky-navbar');
	} else {
		$('#navbar_lp').removeClass('sticky-navbar');
	}

	 // If element is scrolled into view, do actions
	$('.animate__animated').each(function() {
      if (isScrolledIntoView(this) === true) {
      	
      	//apply animation
      	if($(this).hasClass('effect-fil')){
      		$(this).addClass('animate__fadeInLeft');
      	}else if($(this).hasClass('effect-fir')){
      		$(this).addClass('animate__fadeInRight');
      	}else if($(this).hasClass('effect-fid')){
      		$(this).addClass('animate__fadeInDown');
      	}

      	//FOR PROGRESS BAR ANIMATION
	    if($(this).find('div.progress').length !== 0){
	    	var p_id = $(this).find('div.progress-bar').attr('id');
	    	var p_value = $('#' + p_id).attr('aria-valuenow');
	    	console.log(p_id,p_value);
	    	$('#' + p_id).css({width:p_value});
	    }

      }
    });
});


//NAVBAR ACTIONS
$('#top_navbar > ul > li').on('click',function(){

	if($(this).is('[class*=link]')){
		 $('.nav-item').removeClass('active');
 		 $(this).addClass('active'); 
	}
  
});

//SKILLS NAVBAR ACTIONS
$('#nav_skills > ul > li').on('click',function(){

	//remove active state
	$('.nav-item').removeClass('active');
 	$(this).addClass('active');

 	var class_val = '';

	if($(this).hasClass('s-tech')){
		class_val = 's-tech';
	}else if($(this).hasClass('s-personal')){
		class_val = 's-personal';
	}else if($(this).hasClass('s-others')){
		class_val = 's-others';
	}


	$('.skill-type').each(function() {
     
		if($(this).hasClass(class_val)){

			$(this).removeClass('d-none');

			//apply animation
	      	if($(this).hasClass('effect-fil')){
	      		$(this).addClass('animate__fadeInLeft');
	      	}else if($(this).hasClass('effect-fir')){
	      		$(this).addClass('animate__fadeInRight');
	      	}
		}else{
			$(this).addClass('d-none');
		}

      
    });
  
});


 // Check if element is scrolled into view
 function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

});