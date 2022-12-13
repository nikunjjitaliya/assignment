let valid = document.getElementById("userName");
let pass = document.getElementById("pass");
let btn = document.getElementById("login");

btn.addEventListener('click', function (e) {
    // console.log("clicked")
    // console.log(valid.value);
    // console.log(pass);
    if (valid.value == "") {
        // console.log("this field are empty")
        document.getElementById("span").innerHTML = "User Name is Empty"
        e.preventDefault();
    }
    else if (valid.value.length < 4) {
        document.getElementById("span").innerHTML = "4 character minimun required"
        e.preventDefault();
    }
    else {
        document.getElementById("span").innerHTML = "";
    }
})
btn.addEventListener('click', function (e) {
    // console.log("clicked")
    // console.log(pass.value);
    // console.log(pass);
    if (pass.value == "") {
        // console.log("password is empty")
        document.getElementById("span1").innerHTML = "password is Empty"
        e.preventDefault();
    }
    else if (pass.value.length < 6) {
        document.getElementById("span1").innerHTML = "6 character minimun required"
        e.preventDefault();
    }
    else {
        document.getElementById("span1").innerHTML = "";
    }
})