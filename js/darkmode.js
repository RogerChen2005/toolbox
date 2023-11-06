const addHtmlclasses = (classname) => {
    let dom = document.getElementsByTagName("html")[0];
    let classes = dom.className.split(" ");
    let index = classes.indexOf(classname);
    if (index === -1) {
        classes.push(classname);
        dom.className = classes.join(" ");
    }
}
const delHtmlclasses = (classname) => {
    let dom = document.getElementsByTagName("html")[0];
    let classes = dom.className.split(" ");
    let index = classes.indexOf(classname);
    if (index != -1) {
        classes.splice(index, 1);
        dom.className = classes.join(" ");
    }
}

const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
if (isDarkTheme.matches) addHtmlclasses("dark");
isDarkTheme.addEventListener('change', (event) => {
    if (event.matches) {
        addHtmlclasses("dark");
    } else {
        delHtmlclasses("dark");
    }
});