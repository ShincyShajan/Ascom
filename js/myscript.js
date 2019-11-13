$('#group').owlCarousel({
    loop: true,
    margin : 10,
	dots: true,
    nav: true, 
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },	
        1000:{
            items:2
        }
    }
})



/* ---  Back to Top --  */

$( window ).scroll( function() {
	if ( $( this ).scrollTop() > 100 ) {
		$( '.back-to-top' ).addClass( 'show-back-to-top' );
	} else {
		$( '.back-to-top' ).removeClass( 'show-back-to-top' );
	}
});


$( '.back-to-top' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 200 );
	return false;
});
