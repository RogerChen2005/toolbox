const list = [{
    name: "Book of Answer",
    ico: "icon.png",
    src: "bookofanswer"
}, {
    name: "Everyday Lots",
    ico: "el.png",
    src: "everydaylots"
}, {
    name: "Comptool",
    ico: "dpq.png",
    src: "comptool"
}, {
    name: "RandNum",
    ico: "rn.png",
    src: "randnum"
}, {
    name: "Video Wall paper",
    ico: "vw.png",
    src: "videowallpaper"
}, {
    name: "Checker",
    ico: "ck.png",
    src: "Checker"
}, {
    name: "Lyric Finder",
    ico: "icon.png",
    src: "lyricfinder"
}, {
    name: "2048game",
    ico: "2048.png",
    src: "2048game"
}, {
    name: "Word's test",
    ico: "wt.png",
    src: "wordtest"
}, {
    name: "wordIn",
    ico: "icon.png",
    src: "wordin"
}];

const main = document.getElementById("maintext");

for (let i of list) {
    let node = document.createElement("span");
    node.className += "tools";
    node.onclick = ()=>{window.location.href=`tools/${i.src}/index.html`};
    let img = document.createElement("img");
    img.src = `assessts/icon/${i.ico}`;
    let text = document.createElement("div");
    text.innerText = i.name;
    node.appendChild(img);
    node.appendChild(text);
    main.append(node);
}