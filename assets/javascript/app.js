$(document).ready(function() {
  

  function renderStartButton() {
          $("#startButton").empty();
          var button = $("<button>");
          button.addClass("btn btn-lg btn-primary");
          button.text("Start");
          $("#startButton").append(button);
  }


  renderStartButton();

});