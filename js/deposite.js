let Box1 = document.getElementById('depo');
let Box2 = document.getElementById('password_box');
let errormsg = document.getElementById('error_msg');
let Amount = document.getElementById('amount');
let pass=document.getElementById('pass');
let passcheck=document.getElementById('pass_check');
let Box3=document.querySelector('.box3');
let total_amount = document.getElementById('total_amount');

function deposite() {
    console.log(Amount.value);
    if(Amount.value>0){
        Box1.style.display = 'none';
        Box2.style.display = 'block';
    }
    else{
        errormsg.style.display='block';
    }
    
}
function backdeposite() {
    Box1.style.display = 'block';
    Box2.style.display = 'none';
}
function check() {
 if(pass.value==password){
    balance=balance+Number(Amount.value);
    console.log(balance);
    Box2.style.display='none';
    Box3.style.display='block';
    total_amount.innerHTML=`Balance:${balance}`;

    
 }
 else{
passcheck.style.display='block';
 }
    
}
