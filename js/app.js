document.getElementById('calculation-btn').addEventListener('click', function() {
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

    // // Update to total expenses
    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = food + rent + clothes;
    // console.log(typeof expenses);

    //     // Update to total balance
    const totalBalance = document.getElementById('total-balance');
    totalBalance.innerText = income - totalExpenses.innerText;
    // console.log(totalBalance.innerText);
})