$(document).ready(function () {

    // Toggle button behaviour

    // Hover
    $(".toggle-button").hover(function () {
        $(this).addClass("highlighted-button");
    }, function () {
        $(this).removeClass("highlighted-button");
    });

    // Clicked

    $(".toggle-button").click(function () {
        $(this).toggleClass("active");
        $(this).removeClass("highlighted-button");
        var panelId = "#" + $(this).attr("id") + "Panel";        
        $(panelId).toggleClass("hidden");
        var activePanels = 4 - $(".hidden").length;
        $(".panel").width(($(window).width()/activePanels)-7);

    });

    // Panel styles
    $(".panel").height($(window).height() - $("#control-bar").height()-20);
    $(".panel").width(($(window).width()/2)-7);
    

});