import jquery18 from "https://cdn.skypack.dev/jquery-1.8@1.8.3";
    $(document).ready(function(e) {
        var width = $(document).width();

        function goRight() {
            $("#animate").animate({
            left: width
          }, 5000, function() {
             setTimeout(goLeft, 50);
          });
        }
        function goLeft() {
            $("#animate").animate({
            left: 0
          }, 5000, function() {
             setTimeout(goRight, 50);
          });
        }

        setTimeout(goRight, 50);
    });
// Code adapted from "the deep blue (waves)" by Andy Fitzsimon
