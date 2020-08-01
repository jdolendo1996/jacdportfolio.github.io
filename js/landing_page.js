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
});

// When nav item is clicked, change active state
$('#top_navbar > ul > li').on('click',function(){
console.log(this);
	if($(this).is('[class*=link]')){
		 $('.nav-item').removeClass('active');  //Remove any previous active classes
  
 		 $(this).addClass('active'); //Add active class to the clicked item
	}
  
});
/*END NAV BAR ACTIONS*/
});