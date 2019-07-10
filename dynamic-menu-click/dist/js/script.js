$(function() {
    $('[id^="navItem"]').on('click', function() {
        var
            id = this.id,
            num = id.charAt(id.length-1)
        ;
        $('[id^="content-wrap"]').hide();
        $('#content-wrap'+num).fadeIn(500);
    });
    
    $('#content-wrap1').fadeIn(500);
})