var baseUrl = "http://www.soundjay.com/button/";
var audio = ["beep-01a.mp3", "beep-02.mp3", "beep-03.mp3", "beep-04.mp3", "beep-05.mp3", "beep-06.mp3", "beep-07.mp3", "beep-08b.mp3", "beep-09.mp3"];

$('div.ci').click(function() {
    var i = $(this).attr('id').substring(1);
    new Audio(baseUrl + audio[i-1]).play();
});