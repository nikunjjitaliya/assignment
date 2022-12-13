
let clEvent = () => {
  let elm1 = document.getElementById("strData");
  let inpt1 = elm1.value;
  let elm2 = document.getElementById("strData2");

  elm2.value = inpt1;
  elm1.value = "";
  let hideFistAro = document.getElementById("one");
  let hideSecnAro = document.getElementById("two");
  hideFistAro.style.cssText = "display:none"; 
  hideSecnAro.style.cssText = "display:block"; 
};

let clEvent2 = () => {
  let elm2 = document.getElementById("strData2");
  let inpt2 = elm2.value;
  let elm1 = document.getElementById("strData");

  elm1.value = inpt2;
  elm2.value = "";
  let hideFistAro = document.getElementById("two");
  hideFistAro.style.cssText = "display:none"; 
  let hideSecnAro = document.getElementById("one");
  hideSecnAro.style.cssText = "display:block"; 

}