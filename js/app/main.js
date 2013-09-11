// The require() function is used to run immediate functionalities
// require(["purchase"], function(purchase) {
//   purchase.purchaseProduct();
// });

// if ( $('.main-content').length ) {
//   alert('a');
// } else {
//   alert('b');
// }

define(["jquery", "pjax", "pjax-cookies", "magnifc-popup"], function($) {

  (function() {
    
    // Pjax
    if ($.support.pjax) {
      var duration = 400;
      $(document).pjax("a[data-pjax]", ".main-content", {
        fragment: ".main-content",
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
    
    // Magnific Popup
    $('.img-link').magnificPopup({type:'image'});
    
    // Owl Carousel
    $('.owl-carousel').owlCarousel({
      jsonPath: '../img.json',
      jsonSuccess: customDataSuccess
    });
    
    function customDataSuccess(data) {
      var content = "";
      
      for (var i in data["items"]) {
        
        var img = data["items"][i].img;
        var alt = data["items"][i].alt;
        
        content += "<img src\"" +img+ "\" alt=\"" +alt+ "\">"
        
      }
      
      $('.owl-carousel').html(content);
    }
  })();

});