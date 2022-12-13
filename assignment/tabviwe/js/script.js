let y = document.querySelectorAll(".span1");
function fun(x){
    for(let i=0;i<y.length;i++)
    {
        y[i].style.display = "none";
    } 
    x.nextElementSibling.style.display = "block";
}