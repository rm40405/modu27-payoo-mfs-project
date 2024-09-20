// get the event handler for 
// step 1:


document.getElementById('add-money-btn').addEventListener('click',function(event){
    // prevent form submission
    // step 2:
    event.preventDefault();
    // get the amount
    const addAmount = document.getElementById('add-amount').value;
    const addNewAmount = parseFloat(addAmount);
    
    // get the pin number
    const addPin = document.getElementById('add-pin').value;
    
    if(addPin=== '1234'){
        // add the amount to the balance
        const balance = document.getElementById('balance').innerText;
        const newBalance = parseFloat(balance);
        const updatedBalance = newBalance + addNewAmount;
        document.getElementById('balance').innerText = updatedBalance;
        
    }
    else{
        
        alert('wrong pin or amount');
    }

});