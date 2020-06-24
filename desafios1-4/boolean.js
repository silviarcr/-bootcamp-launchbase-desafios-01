//Desafios para fortalecer conceitos:
//Booleanos
//Organização, Padronização e Escrita

const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

const arrayOfCredits = [];
const arrayOfDebits = [];

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance);

getArrayOfTransactions();

console.log(getHigherTransactionByType("credit"));
console.log(getHigherTransactionByType("debit"));
console.log(getAverageTransactionValue());

console.log(getTransactionsCount());

function createTransaction(arg) {
    const transaction = {
        type: arg.type,
        value: arg.value
    };

    user.transactions.push(transaction);
    balanceAfterTransaction(transaction);
}

function balanceAfterTransaction(arg) {
    if (arg.type == "credit")
        user.balance += arg.value;
    else
        user.balance -= arg.value;
}


function getArrayOfTransactions() {
   const objectOfTransactions = user.transactions;

    for (object of objectOfTransactions) {
        if (object.type == "credit")
            arrayOfCredits.push(object);
        else
            arrayOfDebits.push(object);
    }
}

function getHigherTransactionByType(arg) {
  var higherValue = 0;
  var values = [];
  var result = [];
  if (arg == "credit")
     values = arrayOfCredits;
  else
     values = arrayOfDebits;
  
  for (i=0; i < values.length; i++) {
      if (values[i].value > higherValue) higherValue = values[i].value;
    }   
   
   result = {type: arg, value: higherValue};
   return result; 
}

function getTransactionsCount() {
    const numberOfCredit = arrayOfCredits.length;
    const numberOfDebit = arrayOfDebits.length;
    var result = [];
     
    result = {credit: numberOfCredit, debit: numberOfDebit};
     
    return result; 
  }
  
  function getAverageTransactionValue() {
    const objectOfTransactions = user.transactions;
    var result = 0;
    
    for (object of objectOfTransactions) {
        result = result + object.value;
    }
    
    result = result/objectOfTransactions.length;
    return result; 
  }