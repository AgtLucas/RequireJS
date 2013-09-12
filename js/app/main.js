// The require() function is used to run immediate functionalities
// require(["purchase"], function(purchase) {
//   purchase.purchaseProduct();
// });

// if ( $('.main-content').length ) {
//   alert('a');
// } else {
//   alert('b');
// }

define(["jquery", "pjax", "pjax-cookies", "magnifc-popup", "owl-carousel"], function($) {

  (function() {
    
    // Pjax
    if ($.support.pjax) {
      var duration = 400;
      $(document).pjax("a[data-pjax]", ".main-content .wrapper-960", {
        fragment: ".main-content .wrapper-960",
        duration: duration
      }),
      $(".main-content")
        .bind("pjax:beforeSend", function() {
          $(this).hide()
        })
        .bind("pjax:complete", function() {
          $(this).fadeIn(duration)
        });
    };
    
    // Magnific Popup.
      $('.img-link').magnificPopup({type:'image'});
    
    // Owl Carousel.
    $('.owl-carousel').owlCarousel({
     
      autoPlay: 3000,
      
      items: 3,
      lazyLoad: true,
      itemsDesktop: [1199,3],
      itemsDesktopSmall: [979,3]
     
    });
    
  })();

});