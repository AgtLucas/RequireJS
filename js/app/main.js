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

    $('.img-link').magnificPopup({type:'image'});
  })();

});