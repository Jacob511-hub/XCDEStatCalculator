const health = 5135;
const autoMin = 0;
const autoMax = 0;
const strength = 405;
const physDef = 0;
const ether = 417;
const etherDef = 0;
const agility = 117;
const crit = 5;
const block = 0;

let weaponMin = 0;
let weaponMax = 0;
let weaponPhysDef = 0;
let weaponEtherDef = 0;
let weaponCrit = 0;
let weaponBlock = 0;

let totalAutoMin = autoMin + weaponMin + strength;
let totalAutoMax = autoMax + weaponMax + strength;
let totalStrength = strength;
let totalPhysDef = physDef;
let totalEther = ether;
let totalEtherDef = etherDef;
let totalAgility = agility;
let totalCrit = crit;
let totalBlock = block;

document.getElementById("health").innerHTML = "HP: " + health;
document.getElementById("autoMin").innerHTML = "Auto-Attack Min: " + totalAutoMin;
document.getElementById("autoMax").innerHTML = "Auto-Attack Max: " + totalAutoMax;
document.getElementById("strength").innerHTML = "Strength: " + totalStrength;
document.getElementById("physDef").innerHTML = "Physical Def: " + totalPhysDef;
document.getElementById("ether").innerHTML = "Ether: " + totalEther;
document.getElementById("etherDef").innerHTML = "Ether Def: " + totalEtherDef;
document.getElementById("agility").innerHTML = "Agility: " + totalAgility;
document.getElementById("crit").innerHTML = "Critical Rate: " + totalCrit;
document.getElementById("block").innerHTML = "Block Rate: " + totalBlock;

/* const update = document.getElementById("updateStats");
update.addEventListener("click", () => { */

let weapon = document.getElementById("weapons").value;

switch (weapon)
{
    case "0":
        weaponMin = 0;
        weaponMax = 0;
        weaponPhysDef = 0;
        weaponEtherDef = 0;
        weaponCrit = 0;
        weaponBlock = 0;
        break;
    case "1":
        weaponMin = 999;
        weaponMax = 999;
        weaponPhysDef = 0;
        weaponEtherDef = 0;
        weaponCrit = 10;
        weaponBlock = 0;
        break;
}
/* }); */