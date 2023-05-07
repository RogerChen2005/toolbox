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
        setTimeout(() => { msg.remove(); msg = undefined }, 500);
    }
}

function about() {
    message("<p>开发者 : cast1e</p><br/>在学校用“课余时间”开发的2048小游戏，<br/>动画和配色上尽可能进行了还原，<br/>Have fun!<br/>");
}

let show = false;
function open_tab() {
    if (show) {
        document.getElementById("side_win").style.transform = "translateX(-100%)";
        show = false;
    }
    else {
        document.getElementById("side_win").style.transform = "translateX(0%)";
        show = true;
    }
}

function change_prob() {
    message("<p>|更改4出现的概率(百分比)</p><label class=\"prob_label\" for=\"prob\">0</label><input type=\"range\" lable=\"prob\" id=\"prob\" min=\"0\" max=\"100\"><label class=\"prob_label\"  for=\"prob\">100</label><p>当前概率:<label id = \"prob_val\">50</label>%</p>");
    let slide = document.getElementById("prob");
    let prob_val = document.getElementById("prob_val")
    slide.value = prob.toString();
    prob_val.innerText = prob.toString();
    slide.addEventListener("input", (e) => {
        let val = e.target.value;
        prob_val.innerText = val;
        prob = parseInt(val);
    });
}

