/*
 * Напиши скрипт управления личным кабинетом интернет банка. Есть объект `account`,
 * в котором необходимо реализовать методы для работы с балансом и историей
 * транзакций.
 */

/*
 * Типов транзакций всего два.
 * Можно положить либо снять деньги со счёта.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount.
 */
const account = {
  // Текущий баланс счёта
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создаёт и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    return { id: this.transactions.length + 1, type, amount };
  },

  /*
   * Метод, отвечающий за добавление суммы к балансу.
   * Принимает сумму транзакции.
   * Вызывает createTransaction для создания объекта транзакции,
   * после чего добавляет его в историю транзакций.
   */
  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);

    this.transactions.push(transaction);
    this.balance += amount;
  },

  /*
   * Метод, отвечающий за снятие суммы с баланса.
   * Принимает сумму транзакции.
   * Вызывает createTransaction для создания объекта транзакции,
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы невозможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Снятие такой суммы невозможно, недостаточно средств!!!');
      return;
    }

    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);

    this.transactions.push(transaction);
    this.balance -= amount;
  },

  /*
   * Метод возвращает текущий баланс.
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзакции по id.
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (id === transaction.id) {
        return transaction;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определённого типа транзакции из всей истории транзакций.
   */
  getTransactionTotal(type) {
    let transactionTotal = 0;

    for (const transaction of this.transactions) {
      if (type === transaction.type) {
        transactionTotal += transaction.amount;
      }
    }

    return transactionTotal;
  },
};

console.log(account.getBalance());

account.deposit(2340);

console.log('Баланс: ', account.getBalance());

account.withdraw(2830);

account.deposit(3800);
account.withdraw(2830);
account.deposit(6700);
account.withdraw(4160);
account.withdraw(5060);

console.log(account.transactions);

console.log(account.getTransactionDetails(2));
console.log(account.getTransactionDetails(5));

console.log('Поступления: ', account.getTransactionTotal(Transaction.DEPOSIT));
console.log('Расходы: ', account.getTransactionTotal(Transaction.WITHDRAW));

console.log('Остаток: ', account.getBalance());
