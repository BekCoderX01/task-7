class Score {
  constructor(name) {
    this.name = name;
    this.points = 0;
  }
 
  add(points) {
    this.points = this.points + points;
  }
}
 
const score = new Score("Aziza");
console.log(score.name); // "Aziza"
console.log(score.points); // 0
 
score.add(10);
score.add(5);
console.log(score.points); // 15
 
score.add(0);
console.log(score.points); // 15
 

