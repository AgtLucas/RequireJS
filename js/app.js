// Place third party dependencies in the lib folder

// Configure Loading modules from the lib directory, except 'app' ones

requirejs.config({
  "baseUrl": "js/lib",
  "paths": {
    "app": "../app"
  },
  "shim": {
    "pjax": ["jquery"],
    "pjax-cookies": ["jquery"]
  }
});

// Load the main app module to start the app
requirejs(["app/main"]);