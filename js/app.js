function calculate() {
    const totalIncome = document.getElementById('total-income');
    const income = parseFloat(totalIncome.value);
    // console.log(typeof income);

    const expenseForFood = document.getElementById('expense-for-food');
    const food = parseFloat(expenseForFood.value);
    // console.log(typeof food);

    const expenseForRent = document.getElementById('expense-for-rent');
    const rent = parseFloat(expenseForRent.value);
    // console.log(typeof rent);

    const expenseForClothes = document.getElementById('expense-for-cloth');
    const clothes = parseFloat(expenseForClothes.value);
    // console.log(typeof clothes);

    if(isNaN(income) || isNaN(food) ||isNaN(rent) ||isNaN(clothes)){
        alert("Please enter only number value");
        }
        if(income < 0 || food < 0 || rent < 0 || clothes < 0) {
            alert("Please enter possitive value");
        }
        if (income > 0 && typeof income != 'string'){
    // // Update to total expenses
    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = food + rent + clothes;
    // console.log(typeof expenses);

    //     // Update to total balance
    const totalBalance = document.getElementById('total-balance');
    totalBalance.innerText = income - totalExpenses.innerText;
    // console.log(totalBalance.innerText);
        }

}

function savings() {
    const savingsInput = document.getElementById('savings-input');
    let savings = savingsInput.value;
    savings = parseInt(savingsInput.value);

    let savingsAmount = document.getElementById('savings-amount');

    const totalIncome = document.getElementById('total-income');
    const income = parseFloat(totalIncome.value);

    const totalBalance = document.getElementById('total-balance');

    let calculation = savings / 100 * income;
    savingsAmount.innerText = calculation;

    const remainingBalance = document.getElementById('remaining-balance');
    let remainingValue = totalBalance.innerText - savingsAmount.innerText;
    remainingBalance.innerText =remainingValue;
}