let cel = document.getElementById("cel");
let feh = document.getElementById("fah");
let kel = document.getElementById("kel");

cel.addEventListener('input',function(){
    let c = Number(this.value);
    let k = c + 273.15;
    let f = (c * 9/5) + 32;

    kel.value = k.toFixed(2);
    fah.value = f;
});
feh.addEventListener('input',function(){
    let f = this.value;
    let c = (f - 32) * 5/9;

    cel.value = c;
});
kel.addEventListener("input", function () {
  let c = Number(this.value).toFixed(2);
  let k = c + 273.15;
  
  kel.value = k;
});


