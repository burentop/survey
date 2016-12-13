$(document).ready(function () {
  $(".survey-input form").submit(function (event) {
    event.preventDefault();
    $("#result-name").text($("#name").val());
    $("#result-food").text($("#food").val());
    $("#result-music").text($("input:radio[name=music]:checked").val());
    $("#result-born").text($("#born").val());
    

    $(".results").show();
  });
});