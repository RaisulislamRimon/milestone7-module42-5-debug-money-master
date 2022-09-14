const calculateExpense = () => {
  const income = document.querySelector("#income").value;
  console.log(income);
  console.log(typeof income);
  const food = document.querySelector("#food").value;
  console.log(food);
  const rent = document.querySelector("#rent").value;
  console.log(rent);
  const clothes = document.querySelector("#clothes").value;
  console.log(clothes);

  if (
    income < 0 ||
    income === "" ||
    food < 0 ||
    food === "" ||
    rent < 0 ||
    rent === "" ||
    clothes < 0 ||
    clothes === ""
  ) {
    alert("Inputs must be positive numbers");
    return;
  }
  // calculate expense
  const expense = parseInt(food) + parseInt(rent) + parseInt(clothes);

  // console.log(expense);
  // console.log(typeof expense);

  // calculate balance
  const balance = parseInt(income) - expense;
  // console.log(income);
  // console.log(balance);
  // console.log(typeof balance);
  //   validate income
  if (expense > income) {
    alert("Expenses cannot be more than income");
    // return;
  } else {
    // view total expense and balance
    document.getElementById("total-expense").innerText = expense;
    document.getElementById("balance").innerText = balance;
  }
};

// document.getElementById('calculate-btn').addEventListener('click',calculateExpense)

const calculateSavings = () => {
  // calculate saving amount
  const savePercentageStr = document.getElementById("save").value;
  const savePercentage = parseInt(savePercentageStr);
  // console.log(savePercentage);
  // console.log(typeof savePercentage);

  //   Validate saving percentage value
  if (savePercentage < 0) {
    alert("Provide positive saving value");
    document.getElementById("saving-amount").innerText = ``;
    document.getElementById("remaining-balance").innerText = ``;
    return;
  }
  const expenseStr = document.getElementById("total-expense").innerText;
  const expense = parseInt(expenseStr);

  const savingAmount = (savePercentage / 100) * expense;
  // console.log(savingAmount);
  // console.log(typeof savingAmount);

  // calculate remaining balance
  let balance = document.getElementById("balance").innerText;

  balance = parseInt(balance);
  // console.log(balance);
  // console.log(typeof balance);

  const remainingBalance = balance - savingAmount;

  //   validate saving amount
  if (savingAmount > balance) {
    alert("SavingAmount is greater than balance");
  } else {
    // view saving amount and remaining balance
    document.getElementById("saving-amount").innerText = savingAmount;
    document.getElementById("remaining-balance").innerText = remainingBalance;
  }
};
