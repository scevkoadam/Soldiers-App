var wrapp = document.querySelector('.wrapp');
var info = document.querySelector('.info');

function makeSoldiers(num) {
  var allSoldiers = [];
  for (var i=0; i<num; i++) {
      allSoldiers.push(new CreateSlodier());
  }
  return allSoldiers;
}

var soldiers = makeSoldiers(500);
//console.log(soldiers);

displaySoldiers();

function displaySoldiers() {
  for (var i=0; i<soldiers.length; i++) {
    var newDiv = document.createElement('div');
    newDiv.id = i;
    newDiv.addEventListener('mouseover',showInfo);
    if(soldiers[i].weapon === "Sniper") {
      newDiv.className = "sniper";
    } else {
      newDiv.className = "soldier";
    }
    wrapp.appendChild(newDiv);
  }
}

function showInfo(e) {
  var current = soldiers[this.id];
  //console.log(current);
  info.innerHTML = current.info();
  info.style.top = e.y + 20 + "px";
  info.style.left = e.x + 20 + "px";
}
