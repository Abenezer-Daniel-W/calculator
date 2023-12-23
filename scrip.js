
function isNum(a){
    return isNaN(parseFloat(a)) == false ;
}


function handleNumberClick(val){
    if (!aFilled){
        a = a.concat(val);
        console.log("a:"+a);
        displayContent(a);
    }
    else if (!bFilled){
        b = b.concat(val);
        displayContent(b, true);
        console.log("b:"+b);
    }
}

function handleOperatorClick(op){   
    let res = 0;
    console.log("op");
    if (a != ""){
        aFilled = true;
        aOp = parseInt(a);
        // console.log("emptig a " + aOp) ;
        prevOp = op;
        displayContent(a + prevOp)
        a  = "";
    }
    if (b != ""){
        // console.log("emptig b " + bOp + " " + prevOp);
        bFilled = true;
        bOp = parseInt(b);
        b  = "";

    }
    if ((aOp != 0  || bOp != 0 )&& op == "="){
        switch (prevOp){
            case "+":
                res = aOp+ bOp;
                break;
            case "-":
                res = aOp-bOp;
                break;
            case "*":
                res = aOp*bOp;
                break;
            case "/":
                res = aOp/bOp;
                if(res == Infinity){
                    alert ("you can't divide by zero");
                }
                break;
        }   
        console.log(res);
        aOp = 0;
        bOp = 0;
        a = res.toString();
        displayContent(a)
        bFilled = false;
    }
}

function clearInput(){
    a = "";
    prevOp = "";
    b = "";
    op = "";
    console.log("clear");
    displayContent("");
}

function deleteMostRecent(){
    console.log("delete");
    if (b!=""){
        b="";
        bFilled = false;
    }
    else if(prevOp !=""){
        prevOp ="";
    }
    else{
        a = "";
    }
}

function displayContent(val, isB=false){
    if(isB == false){
        display.innerHTML = "";
        display.textContent = val;
    }
    else {
        display.innerHTML += "<p>" + val + "</p>";
    }
}


let a = "";
let b = "";
let aOp = 0;
let bOp = 0;
let prevOp = "";
let aFilled = false;
let bFilled = false;

const numbersBtn = document.querySelectorAll(".input button");
const operaterBtn = document.querySelectorAll(".operator button" );
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const display = document.querySelector(".display")

numbersBtn.forEach((item) => item.addEventListener("click",function(){
    if (isNum(item.innerText)){
        handleNumberClick(item.innerText)
    }
} ));
operaterBtn.forEach((item) => item.addEventListener("click",() => handleOperatorClick(item.innerText)));
clearBtn.addEventListener("click", () => clear());
deleteBtn.addEventListener("click", () => deleteMostRecent());



console.log("hey")
