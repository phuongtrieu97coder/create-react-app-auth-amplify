  var jq1 = $.noConflict();
      jq1(document).ready(function($){
        $("body").css("background-color","black");
         $("[id='navtop1']").css({
           "position":"fixed",
           "top":"0","z-index":"3",
           "background-color":"black",
           "width":"100%"
         });

         var slideshow_block1_index1 = 0;
slideshow_block1_func();
function slideshow_block1_func(){
var get_slideshow_block1_img_class = $("[class='Slideshow_block1_img']");
var i;
for(i = 0;i<get_slideshow_block1_img_class.length;i++){
get_slideshow_block1_img_class[i].style.display = "none";
}
slideshow_block1_index1++;
if(slideshow_block1_index1>get_slideshow_block1_img_class.length){slideshow_block1_index1 = 1};
get_slideshow_block1_img_class[slideshow_block1_index1-1].style.display = "block";
setTimeout(slideshow_block1_func,3000);

}
    
    });