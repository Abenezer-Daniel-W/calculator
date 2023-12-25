
function isNum(a){
    return isNaN(parseFloat(a)) == false;

}


function handleNumberClick(val){
    if (!aFilled){
        a += val;
        console.log("a:"+a);
        displayContent(a);
    }
    else if (!bFilled){
        b +=val;
        displayContent(b, true);
        console.log("b:"+b);
    }
}

function handleOperatorClick(op){   
    let res = 0;
    console.log("op");
    if (a != ""){
        aFilled = true;
        aOp = parseFloat(a);
        // console.log("emptig a " + aOp) ;
        prevOp = op;
        displayContent(a + prevOp)
        a  = "";
    }
    if (b != ""){
        // console.log("emptig b " + bOp + " " + prevOp);
        bFilled = true;
        bOp = parseFloat(b);
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
     b = "";
     aOp = 0;
     bOp = 0;
     prevOp = "";
     aFilled = false;
     bFilled = false;
    displayContent("");
}

function deleteMostRecent(){
    console.log("delete");
    if (b!=""){
        b="";
        bFilled = false;
        displayContent("");
    }
    else if(prevOp !=""){
        prevOp ="";
        displayContent("");

    }
    else{
        a = "";
        displayContent("");

    }
}

function displayContent(val, isB=false){
    display.innerHTML = "";
    display.innerHTML += "<p>" + val + "</p>";
    
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
const clearBtn = document.querySelector("#clear");
const deleteBtn = document.getElementById("delete");
const display = document.querySelector(".display")

numbersBtn.forEach((item) => item.addEventListener("click",function(){
    if (isNum(item.innerText)){
        handleNumberClick(item.innerText)
    }
} ));
operaterBtn.forEach((item) => item.addEventListener("click",() => handleOperatorClick(item.innerText)));
clearBtn.addEventListener("click", () => clearInput());
deleteBtn.addEventListener("click", () => deleteMostRecent());



console.log("hey")
