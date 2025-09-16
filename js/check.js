let balance = 10000;
let password = 123456;
function printbalance() {
    document.getElementById('balancevalue').innerHTML = 'Your Balance Is ' + balance;
    document.getElementById('balancevalue').style.color = "blue";
    document.getElementById('error').innerHTML = '';

}
function check() {
    var val = Number(document.getElementById('pass').value);

    if (password === val) {

        printbalance();

    }
    else if(val==""){
        document.getElementById('error').innerHTML='*Please Enter Your Password';
        document.getElementById('error').style.color='red';
        document.getElementById('balancevalue').innerHTML = '';
    }
    else {
        document.getElementById('balancevalue').innerHTML = '*The Password Is Wrong';
        document.getElementById('balancevalue').style.color="red";
        document.getElementById('error').innerHTML = '';

    }

}


