//'use strict';

angular.module('stdComponents').controller('navbarCtl', function($location){
    console.log("Navbar controller loaded!");

    var self = this;

    self.location = $location.path();

    self.textField = "";

    self.pages = [
        {text: "Home", link: '/'},
        {text: "About", link: '/about'},
        {text: "gpa", link: '/gpa'},
        {text: "404 Page", link: '/w45rtw4t45t'}
    ];

    self.isActive = function(route){
        return route === self.location;
    }

});
