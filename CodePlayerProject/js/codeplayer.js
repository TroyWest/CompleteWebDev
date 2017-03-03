function updateOutput() {
    var stdHtml = "<html><head><style type='text/css'>" + $("#cssPanel").val() +
        "</style></head><body>" + $("#htmlPanel").val() +  "</body></html>";

    $("iframe").contents().find("html").html(stdHtml);

    document.getElementById("outputPanel").contentWindow.eval($("#jsPanel").val());
}

$(document).ready(function () {
    // set initial state of output
    updateOutput();

    $("textarea").on("change keyup paste", function () {
        updateOutput();
    });
});