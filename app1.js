
class Gamer {
  constructor(nick, level) {
    this.nick = nick;
    this.level = level;
  }
}
 
const player1 = new Gamer("pixel7", 3);
const player2 = new Gamer("neon", 1);
 
console.log(player1.nick); 
console.log(player1.level); 
console.log(player2.nick); 
console.log(player2.level); 
 