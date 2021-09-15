
(function(window) {
    var speak = "GoodBye";
    var bye = function (name) {
        console.log(speak + " " + name);
    }
    
    window.bye = bye;

})(window);