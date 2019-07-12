
	var $detector = $('<div id="detecter"></div>').html('<span class="landscape">landscape</span><span class="portrait">portrait</span><span class="smartphone">smartphone</span><span class="retina">retina</span><span class="ipad">ipad</span><span class="desktop">desktop</span><span class="wide">wide</span>');
	$detector.appendTo($(document.body)).css({
		'position': 'fixed',
		'z-index': '99999',
		'top': '0px',
		'left': '0px',
		'color': '#fff',
		'font-size': '12'
	});
	$(window).on('load scroll resize', function(){
		var $key = $detector.find('span:visible');
		var len = $key.length, i = 0, _str = '';
		for (i; i < len; i++) { e = $key[i]; _str = _str + ' ' + e.className; }
		$('html').removeClass('landscape portrait smartphone retina ipad desktop wide').addClass(_str);
	});
