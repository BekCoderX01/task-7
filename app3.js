class LikeCounter {
  constructor() {
    this.likes = 0;
  }
 
  like() {
    this.likes = this.likes + 1;
  }
 
  reset() {
    this.likes = 0;
  }
}
 
const post1 = new LikeCounter();
const post2 = new LikeCounter();
 
console.log(post1.likes); // 0
post1.like();
post1.like();
console.log(post1.likes); // 2
console.log(post2.likes); // 0
 
post1.reset();
console.log(post1.likes); // 0
