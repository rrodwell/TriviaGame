$(document).ready(function() {

  var questions = [
    
    {
      question: "What year did the Yellow Jackets win the Orange Bowl?",
      options: ["1999","2010","2014","2005"],
      answer: "2014",
      imageUrl: "assets/images/oragebowl.jpg",
    },
    
    {
      question: "What is the number of the only retired jersey in Georgia Tech history?",
      options: ["19","81","5","23"],
      answer: "19",
      imageUrl: "assets/images/clint.jpg",
    },
    
    {
      question: "Who was the Yellow Jacket's Quaterback last season?",
      options: ["Vad Lee","Justin Thomas","Mathew Jordan","Joshua Nesbitt"],
      answer: "Justin Thomas",
      imageUrl: "assets/images/justinthomas.jpg",
    },
    
    {
      question: "What was the final score of Tech's highest scoring football game?",
      options: ["222-0","79-32","185-111","56-7"],
      answer: "222-0",
      imageUrl: "assets/images/ga-tech-222-0.jpg",
    },
    
    {
      question: "How many National Championships has Georgia Tech won?",
      options: ["0","7","4","2"],
      answer: "4",
      imageUrl: "assets/images/nationalchamp.jpg",
    },
    
    {
      question: "What bowl game did GT play in last season?",
      options: ["Orange Bowl","TaxSlayer Bowl","Rose Bowl","SunBowl"],
      answer: "TaxSlayer Bowl",
      imageUrl: "assets/images/taxslayer.jpg",
    }
  ];

  //Variables to count correct answers vs wrong
  var correctAnswer = 0;
  var wrongAnswer = 0;

  var questionTimer;
  //Amount of time per question, 1:30
  var time = 500;
  var userPicks =[];


  console.log(questions[1].options[0]);  
  
  //Create start button on the DOM once screen is loaded
  function renderStartButton() {
    $("#startButton").empty();
    var button = $("<button>");
    button.addClass("btn btn-lg btn-primary");
    button.text("Start");
    $("#startButton").append(button);
  }

  function endGame(){
      $("#startButton").empty();
      $(".game")
      .append("<h3> All finished!</h3>")
      .append("<p><strong>Correct Answers:</strong> " + correctAnswer + "</p>")
      .append("<p><strong>Wrong Answers:</strong> " + wrongAnswer + "</p>")
  };

  function renderDoneButton(){
    var doneButton = $("<button onclick='endGame()'>");
    doneButton.addClass("btn btn-lg btn-danger");
    doneButton.text("Done");
    $("#startButton").append(doneButton);
  
  }



  //  The run function sets an interval
  //  that runs the decrement function once a second.
  function run() {
    questionTimer = setInterval(decrement, 1000);
  }

  //  The decrement function to count down timer per question.
  function decrement() {
    time--;
    //  Show the number in the #show-number tag.
    $("#gameTimer").html("<h3>Time Remaining: " + time + " seconds</h3>");
    //  Once number hits zero...
    if (time === 0) {
      stop();
    }
  }

  //  The stop function
  function stop() {
    clearInterval(questionTimer);
    $(".game")
      .append("<h3> Uh oh, times up!</h3>")
      .append("<p><strong>Correct Answers:</strong> " + correctAnswer + "</p>")
      .append("<p><strong>Wrong Answers:</strong> " + wrongAnswer + "</p>")
  }

  function populatePage() {
     $("#startButton").empty();
        var game = $("<div>");
        game.addClass("game");
        $("#startButton").append(game);

        for (var i = 0; i < questions.length; i++) {
          $(".game").append("<h4>" +questions[i].question+"</h4>")
          for (var j = 0; j < questions[i].options.length; j++) {
             var inputOptions = $("<input type='radio' name='question"+i+"' value='" + questions[i].options[j]+"' style='margin-left: 60px'>");
             inputOptions.text(questions[i].options[j]);
             $(".game").append(inputOptions);
          }
        }
  }

  //On click of start button...
   $("#startButton").on("click", function() {
      run();
      populatePage();
      renderDoneButton();
    });

   


  renderStartButton();

});



