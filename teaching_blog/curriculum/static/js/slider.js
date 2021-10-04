jQuery(document).ready(function () {


var timeList = 700;
var TimeView = 5000;
var RadioBut = true;

var slideNum = 1;
var slideTime;
slideCount = jQuery("#slider .slide").length;

var animSlide = function(arrow){
    clearTimeout(slideTime); 

    if(arrow == "next"){
	  if(slideNum == slideCount) { slideNum=1; }
	  else{slideNum++}
       translateWidth = -jQuery('#active-slide').width() * (slideNum - 1);
       jQuery('#slider').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
    }
    else if(arrow == "prew")
    {	
       if(slideNum == 1) { slideNum=slideCount; }
	  else{slideNum-=1}
	  translateWidth = -jQuery('#active-slide').width() * (slideNum - 1); 
       jQuery('#slider').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
    }else{
       slideNum = arrow;
	  translateWidth = -jQuery('#active-slide').width() * (slideNum -1);
       jQuery('#slider').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
    }

    jQuery(".ctrl-select.active").removeClass("active");
    jQuery('.ctrl-select').eq(slideNum - 1).addClass('active');
}

    if(RadioBut){
    var jQuerylinkArrow = jQuery('<a id="prewbutton" href="#">&lt;</a><a id="nextbutton" href="#">&gt;</a>')
        .prependTo('#active-slide');
        jQuery('#nextbutton').click(function(){
           animSlide("next");
           return false;
           })
        jQuery('#prewbutton').click(function(){
           animSlide("prew");
           return false;
           })
    }
        var adderSpan = '';
        jQuery('.slide').each(function(index) {
               adderSpan += '<span class = "ctrl-select">' + index + '</span>';
           });
        jQuery('<div class ="Radio-But">' + adderSpan +'</div>').appendTo('#slider-wrap');
        jQuery(".ctrl-select:first").addClass("active");
        jQuery('.ctrl-select').click(function(){
        var goToNum = parseFloat(jQuery(this).text());
        animSlide(goToNum + 1);
        });
        var pause = false;
        var rotator = function(){
               if(!pause){slideTime = setTimeout(function(){animSlide('next')}, TimeView);}
               }
        jQuery('#slider-wrap').hover(
           function(){clearTimeout(slideTime); pause = true;},
           function(){pause = false; rotator();
           });
        
    var clicking = false;
    var prevX;
    jQuery('.slide').mousedown(function(e){
        clicking = true;
        prevX = e.clientX;
    });

    jQuery('.slide').mouseup(function() {
     clicking = false;
    });

    jQuery(document).mouseup(function(){
        clicking = false;
    });

    jQuery('.slide').mousemove(function(e){
        if(clicking == true)
         {
             if(e.clientX < prevX) { animSlide("next"); clearTimeout(slideTime); }
             if(e.clientX > prevX) { animSlide("prew"); clearTimeout(slideTime); }
           clicking = false;
        }
    });
    jQuery('.slide').hover().css('cursor', 'pointer');
    rotator();  

});
