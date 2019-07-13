var image = new Array();
    image[0] = "http://placehold.it/201";
    image[1] = "http://placehold.it/302";
    image[2] = "http://placehold.it/402";
    image[3] = "http://placehold.it/502";
    var size = image.length
    var x = Math.floor(size * Math.random())

$('#random').attr('src', image[x]);