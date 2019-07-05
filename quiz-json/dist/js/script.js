$(window).on("load", function() {
    $('#preloader').fadeOut('slow', function() {
        $(this).remove();
    });
});



var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {    
    displayCurrentQuestion();
    $(this).find(".quizMsg").hide();
    
    $(this).find(".nextButton").on("click", function () {
        $(this).css("display", "none");
        if (!quizOver) {
            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMsg").text("Selecione uma resposta");
                $(document).find(".quizMsg").show();
            } else {
                 
                $(document).find(".quizMsg").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++; 
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();                    
                    $(document).find(".nextButton").text("Tentar Novamente?");
                    quizOver = true;
                }
            }
        } else { 
            quizOver = false;
            $(document).find(".nextButton").text("Próxima Questão");
            displayCurrentQuestion();            
        }
    });

});

function displayCurrentQuestion() {
    console.log("In display current Question");
    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    $(questionClass).text(question);

    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input class="hvr-bounce-out" type="radio" value=' + i + ' name="status" />' + choice + '</li>').appendTo(choiceList);
    
        $('input:radio').click(
            function(){
                $(".nextButton").css("display", "block"); 
                $(".nextButton").addClass("hvr-bounce-out");
            }
        );  
    }
}

function displayScore() {
    $(document).find(".quizContainer > #result").text("Você acertou: " + correctAnswers + " de " + questions.length + " questões ");
    $(document).find(".quizContainer > #result").show();    
    $("#result").css("display", "block");
    
 

}

