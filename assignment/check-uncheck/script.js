let selClassName = document.querySelectorAll(".box");
let all = document.getElementById("checkboxall");

function checkAll() {
    for (let i = 0; i < selClassName.length; i++) {
        selClassName[i].checked = all.checked;
    }
}
for (let i = 0; i < selClassName.length; i++) {
    selClassName[i].addEventListener("click", function selectAll() {
        let check = document.querySelectorAll(".box:checked");
        if(selClassName.length == check.length)
        {
            all.checked =true;
        }
        else
        {
            all.checked = false;
        }
    })
}