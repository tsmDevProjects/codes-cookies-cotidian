function init() {
    $("#btn").click(function() {
        questions();

    })

    $("#q1").click(function() {
        $("#btn").css("display", "block");
        $("#btn").animate({
            "opacity": 1
        }, 1000);
    });

    function questions() {
        var totalQuestions = 3;
        var answerCorret = 0;
        var alertText;

        var a1 = document.getElementById('q1').value.toLowerCase();
        if (a1 == '4') {
            answerCorret++;
        } else {
            box();

        }

        var a2 = document.getElementById('q2').value.toLowerCase();
        if (a2 == '12') {
            answerCorret++;

        } else {
            // alert ("answer 2 wrong");
            // document.getElementById("titleQuestion").innerHTML = "Answer 2 wrong";

        }

        var a3 = document.getElementById('q3').value.toLowerCase();
        if (a3 == '100') {
            answerCorret++;
        } else {
            // alert ("answer 3 wrong");
            // document.getElementById("titleQuestion").innerHTML = "Answer 3 wrong";

        }

        if (answerCorret == totalQuestions) {
            // alertText = "Você acertou danadão !!!";
            document.getElementById("titleQuestion").innerHTML = "Very good! You got all the answers.";
        } else {
			alertText = "you're right  " + answerCorret + " of " + totalQuestions + " answer!";
			document.getElementById("titleQuestion").innerHTML = "fuonn fuonn fuoon =(";
			alert(alertText);
        }
        // alert(alertText);
    }

}