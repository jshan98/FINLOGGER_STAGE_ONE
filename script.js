document.addEventListener("DOMContentLoaded", renderExpenseOverview);
document.addEventListener("DOMContentLoaded", renderExpenseSummary);

/**
 * Function: renderExpensesOverview
 * Description: Renders the content of the Expenses, Monthly Income, and Balance cards
 * @param: none
 * return: void
 */
function renderExpenseOverview(){
    $("#totalExpenses").text("$" + expenseData.totalExpenses);
    $("#income").text("$" + user.income);
    $("#balance").text("$" + (user.income - expenseData.totalExpenses));
}

/**
 * Function: renderExpensesSummary
 * Description: Renders the content of the Expense Summary Table
 * @param: none
 * return: void
 */
function renderExpenseSummary(){
    let expenseSummaryTableBody = document.querySelector("#expense-summary tbody");
    expenseSummaryTableBody.innerHTML = "";

    expenseSummaryData.forEach(function(expenseCat){
        const row = document.createElement("tr");
        const cell1 = document.createElement("td");
        cell1.textContent = expenseCat.categoryName;
        row.appendChild(cell1);
        const cell2 = document.createElement("td");
        cell2.textContent = expenseCat.percentage;
        row.appendChild(cell2);
        expenseSummaryTableBody.appendChild(row);
    });
}