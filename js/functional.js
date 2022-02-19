function updateAll(inputFieldId) {
    const inputField = document.getElementById(inputFieldId + '-input');
    const TotalField = document.getElementById(inputFieldId + '-total');
    TotalField.innerText = parseFloat(TotalField.innerText) + parseFloat(inputField.value);
    const balanceTotal = document.getElementById('balance-total');
    if (inputFieldId == 'deposit') {
        balanceTotal.innerText = parseFloat(balanceTotal.innerText) + parseFloat(inputField.value);
    }
    else if (inputFieldId == 'withdraw') {
        balanceTotal.innerText = parseFloat(balanceTotal.innerText) - parseFloat(inputField.value);
    }
    inputField.value = '';
}
function onClick(inputFieldId) {
    document.getElementById(inputFieldId + '-button').addEventListener('click', function () {
        updateAll(inputFieldId);
    })
}
onClick('deposit');
onClick('withdraw');

