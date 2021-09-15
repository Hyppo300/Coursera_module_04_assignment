(function(window) {
    var speakWord = "GoodBye";
    var byeSpeaker = function (name) {
        console.log(speakWord + " " + name);
    }
    
    window.byeSpeaker = byeSpeaker;

})(window);
