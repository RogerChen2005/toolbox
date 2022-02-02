var list = ["cover.html","page1.html","page2.html","page3.html","about.html"];

function change(index,t){
    $("#UI").animate({opacity:"0"},250,"swing",function(){document.getElementById("UI").src = "subsite/"+list[index]})
    $("#UI").animate({opacity:"1"},250,"swing");
    $(".cur_display").removeClass("cur_display");
    $(t).addClass("cur_display");
}