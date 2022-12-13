      function sub(){
        let input1 = new Date(document.getElementById('first').value).getTime();
        let input2 = new Date(document.getElementById('second').value).getTime();

        let elm1;
        elm1 = input2-input1;

        if(elm1 < 0){
          elm1 = input1-input2;
        }

        let year = Math.trunc(elm1 / (1000 * 60 * 60 * 24 * 30.417 * 12));
        let month = Math.trunc(elm1 / (1000 * 60 * 60 * 24 * 30.417)) - (year * 12);
        let days = Math.trunc((elm1 / (1000 * 60 * 60 * 24)) - (year * 365) - (month * 30.417));

        document.getElementsByTagName("h4")[0].innerHTML = 
        `${year} years ${month} months ${days} days`
      }