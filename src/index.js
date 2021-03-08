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

function weaponSwitch() {

    switch (document.getElementById('weapons').value)
    {
        case 'none':
            weaponMin = 0;
            weaponMax = 0;
            weaponPhysDef = 0;
            weaponEtherDef = 0;
            weaponCrit = 0;
            weaponBlock = 0;
            statCalc();
            break;
        case 'monado':
            weaponMin = 999;
            weaponMax = 999;
            weaponPhysDef = 0;
            weaponEtherDef = 0;
            weaponCrit = 10;
            weaponBlock = 0;
            statCalc();
            break;
        case 'monadoII':
            weaponMin = 999;
            weaponMax = 999;
            weaponPhysDef = 0;
            weaponEtherDef = 0;
            weaponCrit = 10;
            weaponBlock = 0;
            statCalc();
            break;
        case 'replicaMonado':
            weaponMin = 831;
            weaponMax = 999;
            weaponPhysDef = 25;
            weaponEtherDef = 25;
            weaponCrit = 10;
            weaponBlock = 5;
            statCalc();
            break;
        case 'rudraMonado':
            weaponMin = 970;
            weaponMax = 999;
            weaponPhysDef = 25;
            weaponEtherDef = 25;
            weaponCrit = 5;
            weaponBlock = 5;
            statCalc();
            break;
        case 'agniMonado':
            weaponMin = 554;
            weaponMax = 999;
            weaponPhysDef = 50;
            weaponEtherDef = 50;
            weaponCrit = 10;
            weaponBlock = 25;
            statCalc();
            break;
        case 'abyssMonado':
            weaponMin = 831;
            weaponMax = 999;
            weaponPhysDef = 25;
            weaponEtherDef = 25;
            weaponCrit = 15;
            weaponBlock = 5;
            statCalc();
            break;
        case 'dogmaMonado':
            weaponMin = 831;
            weaponMax = 999;
            weaponPhysDef = 0;
            weaponEtherDef = 0;
            weaponCrit = 25;
            weaponBlock = 0;
            statCalc();
            break;
        case 'sagaMonado':
            weaponMin = 693;
            weaponMax = 891;
            weaponPhysDef = 150;
            weaponEtherDef = 150;
            weaponCrit = 5;
            weaponBlock = 15;
            statCalc();
            break;
        case 'monadoIII':
            weaponMin = 999;
            weaponMax = 999;
            weaponPhysDef = 25;
            weaponEtherDef = 25;
            weaponCrit = 75;
            weaponBlock = 15;
            statCalc();
            break;
    }
}

function statCalc() {

let totalAutoMin = autoMin + weaponMin + strength;
let totalAutoMax = autoMax + weaponMax + strength;
let totalStrength = strength;
let totalPhysDef = physDef + weaponPhysDef;
let totalEther = ether;
let totalEtherDef = etherDef + weaponEtherDef;
let totalAgility = agility;
let totalCrit = crit + weaponCrit;
let totalBlock = block + weaponBlock;

document.getElementById("health").innerHTML = "HP: " + health;
document.getElementById("autoMin").innerHTML = "Auto-Attack Min: " + totalAutoMin;
document.getElementById("autoMax").innerHTML = "Auto-Attack Max: " + totalAutoMax;
document.getElementById("strength").innerHTML = "Strength: " + totalStrength;
document.getElementById("physDef").innerHTML = "Physical Def: " + totalPhysDef;
document.getElementById("ether").innerHTML = "Ether: " + totalEther;
document.getElementById("etherDef").innerHTML = "Ether Def: " + totalEtherDef;
document.getElementById("agility").innerHTML = "Agility: " + totalAgility;
document.getElementById("crit").innerHTML = "Critical Rate: " + totalCrit + "%";
document.getElementById("block").innerHTML = "Block Rate: " + totalBlock + "%";

}