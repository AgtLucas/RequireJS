// The require() function is used to run immediate functionalities
// require(["purchase"], function(purchase) {
//   purchase.purchaseProduct();
// });

// if ( $('.main-content').length ) {
//   alert('a');
// } else {
//   alert('b');
// }

require(["jquery", "pjax", "pjax-cookies", "magnifc-popup"], function($) {

  (function() {
    if ($.support.pjax) {
      var duration = 400;
      $(document).pjax("a[data-pjax]", ".main-content", {
        fragment: ".main-content",
        duration: duration
      }),
      $(".main-content")
        .bind("pjax:beforeSend", function() {
          $(this).hide("slow")
        })
        .bind("pjax:complete", function() {
          $(this).fadeIn(duration), $('.main-content').css('backgroundColor', 'black')
        });
    };

    $('.img-link').magnificPopup({type:'image'});
  })();

});