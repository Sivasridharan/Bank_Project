let amount = document.getElementById('amount');
let Box1 = document.getElementById('depo');
let Box2 = document.getElementById('password_box');
let errormsg = document.getElementById('error_msg');
let pass = document.getElementById('pass');
let passcheck = document.getElementById('pass_check');
let Box3 = document.querySelector('.box3');
let total_amount = document.getElementById('total_amount');

function withdraw() {
    if (Number(amount.value) < balance && Number(amount.value)>0){
        Box1.style.display = 'none';
        Box2.style.display = 'block';

    }
    else{
        errormsg.style.display = 'block';
    }
}
function backwithdraw() {
    Box1.style.display = 'block';
    Box2.style.display = 'none';
}
function check() {
    if (pass.value == password) {
        balance = balance - Number(amount.value);
        console.log(balance);
        Box2.style.display = 'none';
        Box3.style.display = 'block';
        total_amount.innerHTML = `Balance:${balance}`;


    }
    else {
        passcheck.style.display = 'block';
    }

}