function getInputValue(inputId){
    const inputElement = document.getElementById(inputId);
    const inputValue = parseFloat(inputElement.value);
    inputElement.value = '';
    return inputValue;
}

function addMoney(totalId, inputValue){
    const totalMoneyElement = document.getElementById(totalId);
    const totalMoney = parseFloat(totalMoneyElement.innerText);
    const addTotal = totalMoney + inputValue;
    totalMoneyElement.innerText = addTotal;
}
function getCurrentBalance(){
    const balanceMoneyElement = document.getElementById('balance-total');
    const balanceMoney = parseFloat(balanceMoneyElement.innerText);
    return balanceMoney
}
function updateBalance(inputValue, isAdd){
    const balanceMoneyElement = document.getElementById('balance-total');
    const balanceTotal = getCurrentBalance();
    if(isAdd == true){
        const balancePlus = balanceTotal + inputValue;
        balanceMoneyElement.innerText = balancePlus;
    }else{
        const balanceMinus = balanceTotal - inputValue;
        balanceMoneyElement.innerText = balanceMinus;
    }
    
}
document.getElementById('deposite-btn').addEventListener('click', function(){
    const depositeInput = getInputValue('deposite-input');
    if(depositeInput > 0){
        addMoney('deposite-total', depositeInput);
        updateBalance(depositeInput, true);
    }
})

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = getInputValue('withdraw-input');
    const balanceTotal = getCurrentBalance();
    if(withdrawInput > 0 && balanceTotal > withdrawInput){
        addMoney('withdraw-total', withdrawInput);
        updateBalance(withdrawInput, false);
    }
})