// event handlers for case out button

document.getElementById('case-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    
    const amountCase = document.getElementById('amount-case-out').value
    
    const caseOutPin = document.getElementById('add-pin-case-out').value
   
    // validate inputs
    if(caseOutPin === '1234'){
        const balance = document.getElementById('balance').innerText;
        const balanceNumber = parseFloat(balance);
        const newAmountCase = parseFloat(amountCase);
        const newBalance = balanceNumber - newAmountCase;
        document.getElementById('balance').innerText = newBalance;
        console.log(newBalance);
        
    }
    else{
        alert('Not Mached');
    }
});