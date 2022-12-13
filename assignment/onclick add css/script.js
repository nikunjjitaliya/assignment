let firstWay = () =>
{
    let elm = document.getElementById("firstWay");
    // console.log(elm);
    
    let selh1 = elm.firstElementChild;
    // console.log(selP);

    let selh3 = elm.firstElementChild.nextElementSibling;
    // console.log(selP);

    let selP = elm.lastElementChild;
    // console.log(selP);

    
    elm.style.cssText = "border-radius: 10px;font-family: 'Courier New', Courier, monospace;background-color: aquamarine;"
    
    selh1.style.cssText = "text-transform: uppercase;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;";

    selh3.style.cssText = "text-align: right;";

    selP.style.cssText = "font-size: 15px";
}



let secondWay = () =>
{
    let elm = document.getElementById("secondWay");
    // console.log(elm);
    
    let selh1 = elm.firstElementChild;
    // console.log(selP);

    let selh3 = elm.firstElementChild.nextElementSibling;
    // console.log(selP);

    let selP = elm.lastElementChild;
    // console.log(selP);

    
    elm.setAttribute('style',"border-radius: 10px;font-family: 'Courier New', Courier, monospace;background-color: rosybrown;") 
    
    selh1.setAttribute('style',"text-transform: uppercase;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;color: white;")

    selh3.setAttribute('style',"text-align: right; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;");

    selP.setAttribute('style',"font-size: 15px") ;
}



let thirdWay = () =>
{
    let elm = document.getElementById("thirdWay");
    // console.log(elm);
    
    let selh1 = elm.firstElementChild;
    // console.log(selP);

    let selh3 = elm.firstElementChild.nextElementSibling;
    // console.log(selP);

    let selP = elm.lastElementChild;
    // console.log(selP);

    elm.style.color = "red";
    selh1.style.color = "blue";
    selh3.style.color = "green";
    selP.style.color = "firebrick";

}
