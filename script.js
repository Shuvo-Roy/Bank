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
 const depoAmount=document.getElementById("depositAmount").value;
 const depoNumber = parseFloat(depoAmount);

 const currentdeposit= document.getElementById("currentDepo").innerText;
 const currentdepositNumber= parseFloat(currentdeposit);
 const totalDeposit = depoNumber + currentdepositNumber;
 document.getElementById("currentDepo").innerText=totalDeposit;
 document.getElementById("depositAmount").value="";
})




//withdraw event

const WithdrawBtn=document.getElementById("withdo");
WithdrawBtn.addEventListener("click",function(){
 console.log("clicked");
})