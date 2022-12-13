let slide = 3;
slidshow(slide);

function clEvt(params) {
    slidshow(slide += params);
}

// setInterval((function clEvt(){
//     slidshow(slide += 1);
// }), 5000)

function slidshow(txt){
    let elm = document.getElementsByClassName('images');
    if(txt > elm.length)
    {
        slide = 1;
    }
    if(txt < 1)
    {
        slide = elm.length;
    }
    for(let i = 0; i < elm.length; i++)
    {
        elm[i].style.display= "none";
    }
    
    elm[slide - 1].style.display= "block";
}