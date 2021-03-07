let health = 5135;
let autoMin = 0;
let autoMax = 0;
let strength = 405;
let physDef = 0;
let ether = 417;
let etherDef = 0;
let agility = 117;
let crit = 5;
let block = 0;

let weapon = 'Weapon';
let head = 'Head';
let torso = 'Torso';
let arms = 'Arms';
let legs = 'Legs';
let feet = 'Feet';

document.getElementById("health").innerHTML = health;
document.getElementById("autoMin").innerHTML = autoMin;
document.getElementById("autoMax").innerHTML = autoMax;
document.getElementById("strength").innerHTML = strength;
document.getElementById("physDef").innerHTML = physDef;
document.getElementById("ether").innerHTML = ether;
document.getElementById("etherDef").innerHTML = etherDef;
document.getElementById("agility").innerHTML = agility;
document.getElementById("crit").innerHTML = crit;
document.getElementById("block").innerHTML = block;

document.getElementById("weaponButton").innerHTML = weapon;
document.getElementById("headButton").innerHTML = head;
document.getElementById("torsoButton").innerHTML = torso;
document.getElementById("armsButton").innerHTML = arms;
document.getElementById("legsButton").innerHTML = legs;
document.getElementById("feetButton").innerHTML = feet;

let weaponButton = document.getElementById("weaponButton");
let weaponList = document.getElementById("weaponList");
weaponList.style.display = "none";
weaponButton.addEventListener("click", () => {
    if (weaponList.style.display == "none") {
        weaponList.style.display = "block";
      } else {
        weaponList.style.display = "none";
      }
});
weaponList.addEventListener("change", () => {
    weapon = weaponList.value;
});
