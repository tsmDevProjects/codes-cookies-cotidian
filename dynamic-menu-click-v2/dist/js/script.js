var target = $('#content');
    target.find('li:first').siblings().hide();

$('#controller li').click(function(el){
   target.find('li:nth-child('+($(this).index()+1)+')').show().siblings().hide();
});