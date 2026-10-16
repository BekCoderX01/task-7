class Wallet {
  constructor(coins) {
    this.coins = coins;
  }

  add(amount) {
    this.coins = this.coins + amount;
  }

  buy(price) {
    if (this.coins >= price) {
      this.coins = this.coins - price;
      return true;
    }
    return false;
  }
}

const wallet = new Wallet(20);
wallet.add(10);
console.log(wallet.coins); // 30

console.log(wallet.buy(15)); // true
console.log(wallet.coins); // 15

console.log(wallet.buy(50)); // false
console.log(wallet.coins); // 15

console.log(wallet.buy(15)); // true
console.log(wallet.coins); // 0
