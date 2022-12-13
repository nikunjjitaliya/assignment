function theme(heading, sections) {
    let head = document.getElementsByTagName("header")[0]
    let sec = document.getElementsByTagName("section")[0]
    head.style.backgroundColor = heading;
    sec.style.backgroundColor = sections;
}