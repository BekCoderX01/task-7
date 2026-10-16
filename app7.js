class Phone {
  constructor(model) {
    this.model = model;
    this.battery = 100;
  }
 
  use(percent) {
    this.battery = this.battery - percent;
    if (this.battery < 0) {
      this.battery = 0;
    }
  }
 
  charge() {
    this.battery = 100;
  }
}
 
const phone = new Phone("MyPhone");
console.log(phone.battery); // 100
 
phone.use(30);
console.log(phone.battery); // 70
 
phone.use(90);
console.log(phone.battery); // 0
 
phone.charge();
console.log(phone.battery); // 100