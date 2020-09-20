"use strict";

const
    askNumber = () => {
        let userNumber = +prompt("Number?", "");
        if (!userNumber || isNaN(userNumber) || userNumber <= 0) {
            askNumber();
        } else {
            return userNumber;
        }
    },

    start = () => {
        let
            n = askNumber(),
            button = document.querySelector('.resetButton'),
            newH2 = document.createElement("h2"),
            newArr = [];

        for (let j = 1; j <= n; j++){
            if(j%2 == 1){
                newArr.push("*");
            }else{
                newArr.push(j*j);
            }
        }

        newH2.innerHTML = newArr.join(" ");
        button.before(newH2);
},

reset = () => {
    setTimeout(() => {
        location.reload();
    }, 500);
};

start();