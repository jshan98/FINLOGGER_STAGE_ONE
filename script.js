document.addEventListener("DOMContentLoaded", renderExpenseOverview);
document.addEventListener("DOMContentLoaded", renderExpenseSummary);
document.addEventListener("DOMContentLoaded", renderExpenseData);

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

/**
 * Function: renderExpenseData
 * Description: Renders the content of the Expense Details Table
 * @param: none
 * return: void
 */
function renderExpenseData(){
    let expenseDataTableBody = document.querySelector("#expense-details tbody");
    expenseDataTableBody.innerHTML = "";

    expenseData.expenses.forEach(function(expense){
        const row = document.createElement("tr");
        const cell1 = document.createElement("td");
        cell1.textContent = updateDateFormat(expense.date);
        row.appendChild(cell1);
        const cell2 = document.createElement("td");
        cell2.textContent = expense.description;
        row.appendChild(cell2);
        const cell3 = document.createElement("td");
        cell3.textContent = "$" + expense.amount;
        row.appendChild(cell3);
        const cell4 = document.createElement("td");
        cell4.innerHTML = (
            '<a href="#" class="me-2 edit expButton" data-mode="edit"' +
            "data-expense='" +
            JSON.stringify(expense) +
            "'>" +
            '<img src="./images/images/edit.png" alt="Edit"></a>' +
            '<a href="#" class="delete" data-bs-toggle="modal"' +
            'data-bs-target="#deleteModal"><img src="./images/images/delete.png" alt="Delete"></a>'
        );
        row.appendChild(cell4);
        expenseDataTableBody.appendChild(row);
    });
}

/**
 * Function: updateDateFormat
 * Description: Takes a date string as a parameter and formats it into the MMM DD, ddd format.
 * @param {Function} date 
 * @returns a concatenated string of '${month}${day}&{dayOfWeek}'
 */
function updateDateFormat(date){
    const d1 = new Date(date);
    const month = d1.toLocaleString("en-us", {month:"short"});
    const day = d1.getDate();
    const dayOfWeek = d1.toLocaleString("en-us", {weekday: "short"});
    return (month + " " + day + ", " + dayOfWeek);
}