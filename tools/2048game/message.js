var msg;

function message(innerHTML) {
    if (msg == undefined) {
        msg = document.createElement("div");
        msg.className = "MessageBox";
        msg.innerHTML = "<div class=\"closeBtn\" onclick=\"closeMsg()\">×</div>";
        msg.innerHTML += innerHTML;
        document.body.appendChild(msg);
    }
}

function closeMsg() {
    if (msg != undefined) {
        msg.style.transform = "translate(100%,-50%)";
        setTimeout(() => { msg.remove();msg = undefined}, 500);
    }
}

function about() {
    message("<p>开发者 : cast1e</p><br/>在学校用“课余时间”开发的2048小游戏，<br/>动画和配色上尽可能进行了还原，<br/>Have fun!<br/>");
}