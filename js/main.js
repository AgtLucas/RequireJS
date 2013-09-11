// Place third party dependencies in the lib folder

// Configure Loading modules from the lib directory, except 'app' ones

requirejs.config({
  "baseUrl": "js/lib",
  "paths": {
    "app": "../app"
    // "jquery": "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min"
  },
  "shim": {
    "pjax": ["jquery"],
    "pjax-cookies": ["jquery"],
    "magnifc-popup": ["jquery"],
    "owl-carousel": ["jquery"],
    "img-json": ["jquery"]
  }
});

// Load the main app module to start the app
requirejs(["app/main"]);