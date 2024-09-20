// console.log("button file addd");
// search: from submit reloading the page
document.getElementById('login-button').addEventListener('click', function(event){
    event.preventDefault();  //bejal lagbe 
    console.log('clicked');
    // submit pfone number
    const mobileNumber = document.getElementById('mobile-number').value;
     console.log(mobileNumber);
    //  submit here pin number
    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber);
    // this temporary you should not like this;
    if(mobileNumber ==='5' && pinNumber ==='1234'){
        console.log('you are logged in');
        // window location href home page;
        
    }
    else{
        alert('wrong number logged in');
    }


});

