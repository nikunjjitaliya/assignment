// let fun1 = () =>
// {
//     let change = document.getElementsByClassName('details')[0];
 
    
//     change.classList.toggle("hide");
//     console.log(change);

// }
// let fun2 = () =>
// {
//     let change = document.getElementsByClassName('details')[1];
    
//     change.classList.toggle("hide");
//     console.log(change);

// }
// let fun3 = () =>
// {
//     let change = document.getElementsByClassName('details')[2];
    
//     change.classList.toggle("hide");

// }



// with  addEventListener 

let elm = document.getElementsByClassName("boxes");

for(let i = 0; i < elm.length; i++)
{
    elm[i].addEventListener('click',function () {
        
        let data = this.lastElementChild;
        // console.log(data);
        let plus = this.firstElementChild.lastElementChild.firstElementChild;
        // console.log(plus);
        let minus = this.firstElementChild.lastElementChild.lastElementChild;
        // console.log(minus);
        data.classList.toggle("hide");
        plus.classList.toggle("unhide");
        minus.classList.toggle("unhide");
    })
}


// with one function 












