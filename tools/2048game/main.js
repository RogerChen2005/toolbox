var color = {
    "2": "#eee4da",
    "4": "#eee1c9",
    "8": "#f3b27a",
    "16": "#f69664",
    "32": "#f77c5f",
    "64": "#f75f3b",
    "128": "#edd073",
    "256": "#edcc62",
    "512": "#edc950",
    "1024": "rgb(237, 197, 63)",
    "2048": "rgb(237, 194, 46)"
}
var data = new Array(16).fill(undefined);
var fail_win = undefined, move_val = undefined, max_val = undefined;
var free_block = 16;
var winned = false;
var space = 0,prob = 50;
var max_value = 0, total_move = 0;

function pos(r, c) {
    return (r - 1) * 4 + c - 1;
}

function find_place() {
    let cnt = randint(1, free_block);
    let i = 0;
    while (cnt > 0) {
        if (i == 16) {
            return -1;
        }
        if (data[i] == undefined) {
            cnt--;
        }
        i++;
    }
    return i - 1;
}

function add_block(row, col, val) {
    let node = document.createElement("div");
    node.className += "node";
    node.innerText = val;
    node.style.transform = "translate(" + space * (col - 1) + "px," + space * (row - 1) + "px)";
    node.style.backgroundColor = color[val.toString()];
    document.getElementById("main_win").appendChild(node);
    data[pos(row, col)] = node;
    free_block--;
}

function insert_block() {
    let position = find_place();
    add_block(Math.floor(position / 4) + 1, position % 4 + 1,TwoOrFour(prob));
    if (free_block == 0) {
        for (let row = 1; row <= 4; row++) {
            for (let cur = pos(row, 1); cur <= pos(row, 3); cur++) {
                if (data[cur].innerText == data[cur + 1].innerText) {
                    return;
                }
            }
        }
        for (let col = 1; col <= 4; col++) {
            for (let cur = pos(1, col); cur <= pos(3, col); cur += 4) {
                if (data[cur].innerText == data[cur + 4].innerText) {
                    return;
                }
            }
        }
        Fail();
    }
}

function TwoOrFour(prob){ // Prob / 100 = P(4)
    let seed = randint(1,100);
    if(seed <= prob){
        return 4;
    }
    else return 2;
}

function Fail() {
    fail_win = document.createElement("div");
    fail_win.className += "dialog";
    fail_win.innerHTML = "Failed<button class = \"f_btn\" onclick=\"init()\">Reset</button>";
    document.getElementById("main_win").appendChild(fail_win);
}

function Win() {
    fail_win = document.createElement("div");
    fail_win.className += "dialog";
    fail_win.innerHTML = "You Win!<button class = \"f_btn\" onclick=\"fail_win.remove();fail_win = undefined;\">Continue</button>";
    document.getElementById("main_win").appendChild(fail_win);
}

function init() {
    if (data != undefined) {
        for (let i = 0; i < 16; i++) {
            if (data[i] != undefined) {
                data[i].remove();
                data[i] = undefined;
            }
        }
    }
    if (fail_win != undefined) {
        fail_win.remove();
        fail_win = undefined;
    }
    free_block = 16;
    for (let i = 0; i < 2; i++) {
        insert_block();
    }
}

function randint(a, b) {
    let seed = Math.floor(Math.random() * (b - a + 1) + a);
    return seed;
}

function add_holder() {
    let main_win = document.getElementById("main_win");
    for (let i = 0; i < 16; i++) {
        let node = document.createElement("div");
        node.className += "space_holder";
        node.style.gridColumn = i % 4 + 1;
        node.style.gridRow = Math.floor(i / 4) + 1;
        main_win.appendChild(node);
    }
}

function change(node) {
    let new_val = parseInt(node.innerText) * 2;
    if (new_val > parseInt(max_value)) {
        record_max_value(new_val);
    }
    node.innerText = (new_val).toString();
    if (new_val >= 100) {
        node.className += " small_node"
        if (new_val == 2048 && winned == false) {
            winned = true;
            Win();
        }
    }
    if (new_val <= 2048) {
        node.style.backgroundColor = color[node.innerText];
    }
    else {
        node.style.backgroundColor = "black";
    }
    node.style.color = (new_val > 4) ? "#f9f6f2" : "#776e65";
}

function row_animate(node, row, ed, callback) {
    if (typeof callback == "function") {
        setTimeout(() => { callback(node); }, 100);
    }
    node.style.transform = "translate(" + space * (ed - 1) + "px," + space * (row - 1) + "px)";

}

function col_animate(node, col, ed, callback) {
    if (typeof callback == "function") {
        setTimeout(() => { callback(node); }, 100);
    }
    node.style.transform = "translate(" + space * (col - 1) + "px," + space * (ed - 1) + "px)";
}

function count_move() {
    total_move += 1;
    move_val.innerText = total_move.toString();
}

function record_max_value(new_val) {
    max_value = new_val;
    max_val.innerText = max_value.toString();
}

function row_slide_left() {
    let flag = false;
    for (let row = 1; row <= 4; row++) {
        let cur = 1;
        for (let col = 2; col <= 4; col++) {
            if (data[pos(row, col)] == undefined) {
                continue;
            }
            if (data[pos(row, cur)] == undefined) {
                data[pos(row, cur)] = data[pos(row, col)];
                data[pos(row, col)] = undefined;
                row_animate(data[pos(row, cur)], row, cur);
                flag = true;
            }
            else if (data[pos(row, cur)].innerText == data[pos(row, col)].innerText) {
                change(data[pos(row, cur)]);
                row_animate(data[pos(row, col)], row, cur, (node) => { node.remove(); });
                data[pos(row, col)] = undefined;
                free_block++;
                flag = true;
                cur += 1;
            }
            else {
                if (cur + 1 != col) {
                    data[pos(row, cur + 1)] = data[pos(row, col)];
                    data[pos(row, col)] = undefined;
                    row_animate(data[pos(row, cur + 1)], row, cur + 1);
                    flag = true;
                }
                cur += 1;
            }
        }
    }
    if (flag == true) {
        insert_block();
        count_move()
    }
}

function row_slide_right() {
    let flag = false;
    for (let row = 4; row >= 1; row--) {
        let cur = 4;
        for (let col = 3; col >= 1; col--) {
            if (data[pos(row, col)] == undefined) {
                continue;
            }
            if (data[pos(row, cur)] == undefined) {
                data[pos(row, cur)] = data[pos(row, col)];
                data[pos(row, col)] = undefined;
                row_animate(data[pos(row, cur)], row, cur);
                flag = true;
            }
            else if (data[pos(row, cur)].innerText == data[pos(row, col)].innerText) {
                change(data[pos(row, cur)]);
                row_animate(data[pos(row, col)], row, cur, (node) => { node.remove(); });
                data[pos(row, col)] = undefined;
                free_block++;
                flag = true;
                cur -= 1;
            }
            else {
                if (cur - 1 != col) {
                    data[pos(row, cur - 1)] = data[pos(row, col)];
                    data[pos(row, col)] = undefined;
                    row_animate(data[pos(row, cur - 1)], row, cur - 1);
                    flag = true;
                }
                cur -= 1;
            }
        }
    }
    if (flag == true) {
        insert_block();
        count_move()
    }
}

function col_slide_up() {
    let flag = false;
    for (let col = 1; col <= 4; col++) {
        let cur = 1;
        for (let row = 2; row <= 4; row++) {
            if (data[pos(row, col)] == undefined) {
                continue;
            }
            if (data[pos(cur, col)] == undefined) {
                data[pos(cur, col)] = data[pos(row, col)];
                data[pos(row, col)] = undefined;
                col_animate(data[pos(cur, col)], col, cur);
                flag = true;
            }
            else if (data[pos(cur, col)].innerText == data[pos(row, col)].innerText) {
                change(data[pos(cur, col)]);
                col_animate(data[pos(row, col)], col, cur, (node) => { node.remove(); });
                data[pos(row, col)] = undefined;
                free_block++;
                flag = true;
                cur += 1;
            }
            else {
                if (cur + 1 != row) {
                    data[pos(cur + 1, col)] = data[pos(row, col)];
                    data[pos(row, col)] = undefined;
                    col_animate(data[pos(cur + 1, col)], col, cur + 1);
                    flag = true;
                }
                cur += 1;
            }
        }
    }
    if (flag == true) {
        insert_block();
        count_move()
    }
}

function col_slide_down() {
    let flag = false;
    for (let col = 4; col >= 1; col--) {
        let cur = 4;
        for (let row = 3; row >= 1; row--) {
            if (data[pos(row, col)] == undefined) {
                continue;
            }
            if (data[pos(cur, col)] == undefined) {
                data[pos(cur, col)] = data[pos(row, col)];
                data[pos(row, col)] = undefined;
                col_animate(data[pos(cur, col)], col, cur);
                flag = true;
            }
            else if (data[pos(cur, col)].innerText == data[pos(row, col)].innerText) {
                change(data[pos(cur, col)]);
                col_animate(data[pos(row, col)], col, cur, (node) => { node.remove(); });
                data[pos(row, col)] = undefined;
                free_block++;
                flag = true;
                cur -= 1;
            }
            else {
                if (cur - 1 != row) {
                    data[pos(cur - 1, col)] = data[pos(row, col)];
                    data[pos(row, col)] = undefined;
                    col_animate(data[pos(cur - 1, col)], col, cur - 1);
                    flag = true;
                }
                cur -= 1;
            }
        }
    }
    if (flag == true) {
        insert_block();
        count_move()
    }
}

let main_window = document.getElementById("main_win");
let size = Math.floor(Math.min(document.body.offsetHeight, document.body.offsetWidth) * 0.8);
size = size - size % 4;
main_window.style.width = size.toString() + "px";
main_window.style.height = size.toString() + "px";

function get_data() {
    max_val = document.getElementById("max_value");
    move_val = document.getElementById("total_move");

    let tmp = localStorage.getItem("max_value");
    max_value = tmp == null ? 0 : parseInt(tmp);
    
    tmp = localStorage.getItem("total_move");
    total_move = tmp == null ? 0 : parseInt(tmp);

    max_val.innerText = max_value.toString();
    move_val.innerText = total_move.toString();

    tmp = localStorage.getItem("prob");
    prob = tmp == null || parseInt(tmp) > 100? 50 : parseInt(tmp);
}

function remove_data() {
    localStorage.removeItem("max_value");
    localStorage.removeItem("total_move");
    localStorage.removeItem("prob");

    max_val.innerText = "0";
    move_val.innerText = "0";
    
    max_value = 0;
    total_move = 0;
    prob = 50;
    message("<p>数据已经全部清除！</p>");
}

window.onload = () => {
    get_data();
    add_holder();
    space = getAbsoluteHeight(document.getElementsByClassName("space_holder")[0]);
    init();
}

window.onbeforeunload = () => {
    localStorage["max_value"] = max_value.toString();
    localStorage["total_move"] = total_move.toString();
    localStorage["prob"] = prob.toString();
}

function getAbsoluteHeight(el) {
    var styles = window.getComputedStyle(el);
    var margin = parseFloat(styles['marginTop']) +
        parseFloat(styles['marginBottom']);
    return Math.ceil(el.offsetHeight + margin);
}

document.addEventListener('keyup', (event) => {
    var code = event.code;
    switch (code) {
        case "ArrowUp":
            col_slide_up()
            break;
        case "ArrowDown":
            col_slide_down()
            break;
        case "ArrowLeft":
            row_slide_left()
            break;
        case "ArrowRight":
            row_slide_right()
            break;
        case "KeyW":
            col_slide_up()
            break;
        case "KeyS":
            col_slide_down()
            break;
        case "KeyA":
            row_slide_left()
            break;
        case "KeyD":
            row_slide_right()
            break;
    }
}, false);

main_window.addEventListener("touchstart", touch_start, false);
main_window.addEventListener("touchend", touch_end, false);
main_window.addEventListener("touchmove", touch_move, false);

var startX, startY;
var endX, endY;

function touch_start(event) {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
}

function touch_move(event) {
    endX = event.touches[0].clientX;
    endY = event.touches[0].clientY;
}

function touch_end(evnet) {
    let x = startX - endX;
    let y = startY - endY;
    if (Math.abs(x) > Math.abs(y)) {
        if (x > 5) {
            row_slide_left();
        }
        else if (x < -5) {
            row_slide_right();
        }
    }
    else {
        if (y > 5) {
            col_slide_up();
        }
        else if (y < -5) {
            col_slide_down();
        }
    }
}
