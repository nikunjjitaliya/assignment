// let fun1 = () =>
// {
//     let change = document.getElementsByClassName('details')[0];

//     change.classList.toggle("hide");
//     console.log(change);
// }
// let fun2 = () =>
// {
//     let change = document.getElementsByClassName('details')[1];
//     // let firstSec = document.getElementsByClassName('details')[0];

//     change.classList.toggle("hide");


// }
// let fun3 = () =>
// {
// let change = document.getElementsByClassName('details')[2];
//     // let firstSec = document.getElementsByClassName('details')[0];

//     // change.style.cssText = "display: block;";
//     change.classList.toggle("hide");
// }



function fun1(x) {
    let data = x.nextElementSibling.classList.toggle("hide");
    // console.log(data);
    
  let r =  x.firstElementChild.nextElementSibling.firstElementChild.classList.toggle("hide2");
// console.log(r);

    let plus = x.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.classList.toggle("hide2");
    // console.log(plus);

}


















