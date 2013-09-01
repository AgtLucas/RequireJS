// The require() function is used to run immediate functionalities
// require(["purchase"], function(purchase) {
//   purchase.purchaseProduct();
// });

requirejs.config({
  'baseUrl': 'js',
  'paths': {
    'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min'
  }
});

requirejs(['js/main']);