class GameCharacter {
  constructor(name) {
    this.name = name;
    this.lives = 3;
  }
 
  hit() {
    if (this.lives > 0) {
      this.lives = this.lives - 1;
    }
  }
 
  isAlive() {
    return this.lives > 0;
  }
}
 
const hero = new GameCharacter("PixelHero");
console.log(hero.lives); // 3
console.log(hero.isAlive()); // true
 
hero.hit();
console.log(hero.lives); // 2
 
hero.hit();
hero.hit();
console.log(hero.lives); // 0
console.log(hero.isAlive()); // false
 
hero.hit();
console.log(hero.lives); // 0