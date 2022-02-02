var list = [
    "home.html",
    "check.html",
    "history.html",
    "more.html",
    "about.html",
    "checked.html"];
var hasChecked = false;

function getNowFormatDate(){
           var day = new Date();
           var Year = day.getFullYear();
           var Month = day.getMonth()+1;
           var Day = day.getDate();
           var CurrentDate = "";
           CurrentDate += Year + "/";
           Month >= 10?CurrentDate += Month + "/":CurrentDate += "0" + Month + "/";
           Day >= 10?CurrentDate += Day:CurrentDate += "0" + Day;
           return CurrentDate;
}
var curTime = getNowFormatDate();
var dailyTodo = localStorage.getItem("toDo");
if(!dailyTodo == null){
    hasChecked = true;
}

function change(index,t){
    $("#UI").animate({opacity:"0"},250,"swing",function(){
        document.getElementById("UI").src = "subsite/"+list[index]
    });
    $("#UI").animate({opacity:"1"},250,"swing");
    $(".cur_display").removeClass("cur_display");
    $(t).addClass("cur_display");
}