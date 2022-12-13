let clEvent = () => 
{
    let elm = document.getElementById("popup");
    let elm1 = document.getElementsByClassName("bgc")[0];
    elm.style.cssText = "display:block;";
    elm1.style.cssText = "background-color: rgba(0, 0, 0, 0.63);";
}

let clEvent2 = () => 
{
    let elm = document.getElementById("popup");
    let elm1 = document.getElementsByClassName("bgc")[0];
    // let elm1 = document.styleSheets[0].cssRules[0].style.removeProperty("bgc")

    elm.style.cssText = "display:none;";
    // elm.style.cssText = "background-color:white;";

    elm1.style.cssText = "";
    console.log(elm1);
    // elm1.classList.toggle("bgc");
    // elm1.removeProperty('background-color');
    // elm.el.style.removeProperty('background-color:white;');
}