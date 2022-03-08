function CreateSlodier() {
  //this = {};
  this.damage = Math.floor(Math.random()*(500-300)+300);
  this.health = Math.floor(Math.random()*(1000-800)+800);
  this.weapon = ['Sniper','Knife','Gun'][Math.floor(Math.random()*3 )]
  this.info = function() {
      return "Weapon: " + this.weapon + " Damage: " + this.damage + " Health: " + this.health;
    };
  //return this;
} // Constructor funciton

// var s1 = new CreateSlodier(300,100); // new keyword ide uz constructor function, zato veliko slovo CreateSlodier
// var s2 = new CreateSlodier(280, 90);
//
// console.log(s1,s2);
// console.log(s1 instanceof CreateSlodier); // vraca true
