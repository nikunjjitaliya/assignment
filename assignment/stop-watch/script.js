let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = false;
let flag = 0;

function start() {

    timer = true;

    // one time function call thay etla mate 
    if (flag == 0) {
        stopwatch();
        flag++;
    }


}

function stop() {

    timer = false;
    flag = 0;

}

function reset() {

    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    flag = 0;

    document.getElementById("hour").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("milie").innerHTML = "00";
}

function stopwatch() {

    if (timer == true) {

        count = count + 1;

        if (count == 99) {
            sec += 1;
            count = 0;

        };

        if (sec == 59) {
            min = min + 1;
            sec = 0;

        }

        if (min == 59) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }


        let hrstring = hr;
        let minstring = min;
        let secstring = sec;
        let countstring = count;

        if (hr < 10) {
            hrstring = "0" + hrstring;
        }

        if (min < 10) {
            minstring = "0" + minstring;
        }

        if (sec < 10) {
            secstring = "0" + secstring;
        }

        if (count < 10) {
            countstring = "0" + countstring;
        }

        document.getElementById("hour").innerHTML = hrstring;
        document.getElementById("min").innerHTML = minstring;
        document.getElementById("sec").innerHTML = secstring;
        document.getElementById("milie").innerHTML = countstring;

        setTimeout("stopwatch()", 10);

    }

}