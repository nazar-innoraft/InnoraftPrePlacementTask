
// 1. Hide Content 
$(document).ready(function(){
    $("#hide").click(function(){
        $(".box").hide();
    });
    $("#show").click(function(){
        $(".box").show();
    });
});

// 2. Slide Down
$(document).ready(function(){
    $(".head").click(function(){
        $(".expand").slideDown();
        $("#reduce").slideDown();
    });
});
$(document).ready(function(){
    $("#reduce").click(function(){
        $(".expand").slideUp();
    });
});

// 3. Form Submit
$(document).ready(function(){
    $('#submit').click(function(){

        // Get the Login Name value and trim it
        var fname = $("#fname").val();
        var lname = $("#lname").val();
    
        // Check if empty of not
        if (fname.length < 1 || lname.length < 1) {
            alert('Text-field is empty');
            return false;
        }
    
    });
});

// 4. Change Text
$(document).ready(function(){
    $(".header").click(function(){
        $(this).css("background-color", "blue");
    });
    $(".left").click(function(){
        $(".left > p").html("Leftbar");
    });
    $(".down").click(function () {
        $(".up").fadeOut(0, function(){
            $(".down").css("height", "100%");
        });
    });
});

// 5. POP-UP
$(document).ready(function () {
    $(".footer").click(function(){
        $("#popup").css("display", "flex");
    });
    $("#popup span").click(function(){
        $("#popup").css("display", "none");
    });

});