document.addEventListener("DOMContentLoaded", renderExpenseOverview);

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