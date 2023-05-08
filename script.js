$(document).ready(function () {
    $("#stream1_btn").on("click", function () {
        $(".stream1").removeClass("highlight_stream");
        $(".stream2").removeClass("highlight_stream");
        $(".stream3").removeClass("highlight_stream");
        $(".stream1").addClass("highlight_stream");
    });
    $("#stream2_btn").on("click", function () {
        $(".stream1").removeClass("highlight_stream");
        $(".stream2").removeClass("highlight_stream");
        $(".stream3").removeClass("highlight_stream");
        $(".stream2").addClass("highlight_stream");
    });
    $("#stream3_btn").on("click", function () {
        $(".stream1").removeClass("highlight_stream");
        $(".stream2").removeClass("highlight_stream");
        $(".stream3").removeClass("highlight_stream");
        $(".stream3").addClass("highlight_stream");
    });
    $("p").on("click", function () {
        $("p").css("color", "red");
    });
    $("h2").on("mouseenter", function () {
        $("h2").addClass("blue-background");
    });
    $("h2").on("mouseenter", function (event) {
        $(event.target).addClass("text-grow");
    });
    $(".bottom_button").on("mouseenter", function() {
        $("body").removeClass("grey-background").addClass("black-background");
    });
    $(".bottom_button").on("mouseleave", function() {
        $("body").removeClass("black-background").addClass("grey-background");
    });

});