document.getElementById('login').addEventListener('click', function(event){
    
    event.preventDefault();
    const num = document.getElementById('number').value;
    const pin = document.getElementById('pin').value;
    if(num === '01892674230'){
        if(pin === '1234'){
            window.location.href="../main.html";
        }
        else
            alert('Wrong pin number');
    }
    else
        alert('Wrong mobile number');
})