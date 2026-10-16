class Profile {
  constructor(name, nick) {
    this.name = name;
    this.nick = nick;
  }
 
  info() {
    return this.name + " — @" + this.nick;
  }
}
 
const profile = new Profile("Ali", "ali_dev");
console.log(profile.info()); // "Ali — @ali_dev"
 
const otherProfile = new Profile("Madina", "madina_js");
console.log(otherProfile.info()); // "Madina — @madina_js"
 