function box(){

var counter = 0;
var ID;
    $(document).ready(function() {
         $("#q1").focus(function(){
    		  counter = 0;
    		      $(this).addClass("focusing");
       			setTimer();
  			 });       
    });

function setTimer(){ 	    	
    	ID = setInterval(function () {
    			startSlider(counter);
  			  	counter++;
    		   	//console.log(counter);
    		}, 4000);   
     }

function startSlider(){
    	if(counter>3){
    		stopFocus();
    		clearInterval(ID);    		
    	}else{
    	 $('#q1').toggleClass('focusing'); 
    	}
    }

function stopFocus() {
    	$("#q1").removeClass('focusing');
    }
}
	