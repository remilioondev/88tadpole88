$(document).ready(function () {

    $('.enter').click(function(e,timer) {
        $('.sound').get(0).play();
        $('.enter').removeClass('visible');
        e.preventDefault();
    });

    $('.buy').click(function(e,timer) {
        $('.pop-up').toggleClass('visible');
        e.preventDefault();
    });

    $('#ejs-content-frame').click(function(e,timer) {
        
        e.preventDefault();
    });

    $('.mute').click(function(e) {
        if ($('.sound').get(0).paused == false) {
            $('.sound').get(0).pause();
            $(this).addClass('muted')
        } else {
            $('.sound').get(0).play();
            $(this).removeClass('muted')
        }
        e.preventDefault();
    });

    $(".ca").on('click', function (){
        var text = $(this).text()
        console.log(text)
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val(text).select();
        document.execCommand("copy");
        $temp.remove();
        alert('Contract copied to clipboard');
        event.preventDefault();
    });


    if (window.matchMedia("(min-width: 1024px)").matches) {
          init_pointer({
            pointerColor: "#b9b9b9", // Css color
            ringSize: 15, // Pixels
            ringClickSize: 10 // Pixels when clicking
        });
    }


    
});