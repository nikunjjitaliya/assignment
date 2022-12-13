function changeColor() {
    let first = Math.ceil(Math.random() * 255);
    let second = Math.ceil(Math.random() * 255);
    let third = Math.ceil(Math.random() * 255);
    
    // let pos = document.getElementById("sec");
    document.body.style.backgroundColor =  `rgb(${first},${second},${third})`;
}
changeColor();