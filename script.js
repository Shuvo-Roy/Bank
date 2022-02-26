//event for login
const loginBtn=  document.getElementById("enter");
loginBtn.addEventListener("click", function (){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display= "none";
    const transcationArea=document.getElementById("transc");
    transcationArea.style.display="block";
})

//deposit event

const depositBtn=document.getElementById("depo");
depositBtn.addEventListener("click",function(){
        const depoNumber = getInput("depositAmount");
        updateSpanText("currentDepo", depoNumber);
        updateSpanText("currentbalance", depoNumber);
        
        document.getElementById("depositAmount").value="";
})
// withdrow event



    function updateSpanText(id,depoNumber){
        const current=document.getElementById(id).innerText;
        const currentNumber = parseFloat(current);
        const total = depoNumber + currentNumber;
        document.getElementById(id).innerText= total;
    }



//withdraw event

const WithdrawBtn=document.getElementById("withdo");
WithdrawBtn.addEventListener("click",function(){
 const withdrawNumber= getInput("withdrawAmount")

 updateSpanText("currentWith",withdrawNumber);
 updateSpanText("currentbalance",-1 * withdrawNumber);

 document.getElementById("withdrawAmount").value="";
})

function getInput(id){
    const Amount = document.getElementById(id).value;
    const amountNumber =  parseFloat(Amount);
    return amountNumber;
}