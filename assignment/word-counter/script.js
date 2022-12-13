let elm = document.getElementById("txtar");

elm.addEventListener("input", function(){
  
  let ans = [];
  let str = this.value;
  
  let word = str.trim();
  let check = word.split(" ");
  for (let i = 0; i < check.length; i++) {
    if (!(check[i] === "")) {
      ans.push(check[i]);
    }
  }
  let remSpace = str.trim(); 
  let totalWord = ans.length;
  let totalChar = remSpace.length;

  document.getElementById('show').innerHTML = `${totalWord}  words and ${totalChar} characters`;
});

