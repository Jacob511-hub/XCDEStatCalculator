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

let headPhysDef = 0;
let headEtherDef = 0;
let headWeight = 0;

let torsoPhysDef = 0;
let torsoEtherDef = 0;
let torsoWeight = 0;

let armsPhysDef = 0;
let armsEtherDef = 0;
let armsWeight = 0;

let legsPhysDef = 0;
let legsEtherDef = 0;
let legsWeight = 0;

let feetPhysDef = 0;
let feetEtherDef = 0;
let feetWeight = 0;

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

function headSwitch() {

    switch (document.getElementById('head').value)
    {
        case 'none':
            headPhysDef = 0;
            headEtherDef = 0;
            headWeight = 0;
            statCalc();
            break;
        case 'alcolyne':
            headPhysDef = 100;
            headEtherDef = 94;
            headWeight = 1;
            statCalc();
            break;
        case 'lancelot':
            headPhysDef = 114;
            headEtherDef = 125;
            headWeight = 2;
            statCalc();
            break;
    }
}

function torsoSwitch() {

    switch (document.getElementById('torso').value)
    {
        case 'none':
            torsoPhysDef = 0;
            torsoEtherDef = 0;
            torsoWeight = 0;
            statCalc();
            break;
        case 'alcolyne':
            torsoPhysDef = 130;
            torsoEtherDef = 180;
            torsoWeight = 1;
            statCalc();
            break;
        case 'lancelot':
            torsoPhysDef = 175;
            torsoEtherDef = 194;
            torsoWeight = 3;
            statCalc();
            break;
    }
}

function armsSwitch() {

    switch (document.getElementById('arms').value)
    {
        case 'none':
            armsPhysDef = 0;
            armsEtherDef = 0;
            armsWeight = 0;
            statCalc();
            break;
        case 'alcolyne':
            armsPhysDef = 70;
            armsEtherDef = 94;
            armsWeight = 1;
            statCalc();
            break;
        case 'lancelot':
            armsPhysDef = 80;
            armsEtherDef = 125;
            armsWeight = 2;
            statCalc();
            break;
    }
}

function legsSwitch() {

    switch (document.getElementById('legs').value)
    {
        case 'none':
            legsPhysDef = 0;
            legsEtherDef = 0;
            legsWeight = 0;
            statCalc();
            break;
        case 'alcolyne':
            legsPhysDef = 110;
            legsEtherDef = 120;
            legsWeight = 1;
            statCalc();
            break;
        case 'lancelot':
            legsPhysDef = 144;
            legsEtherDef = 126;
            legsWeight = 3;
            statCalc();
            break;
    }
}

function feetSwitch() {

    switch (document.getElementById('feet').value)
    {
        case 'none':
            feetPhysDef = 0;
            feetEtherDef = 0;
            feetWeight = 0;
            statCalc();
            break;
        case 'alcolyne':
            feetPhysDef = 100;
            feetEtherDef = 92;
            feetWeight = 1;
            statCalc();
            break;
        case 'lancelot':
            feetPhysDef = 110;
            feetEtherDef = 125;
            feetWeight = 2;
            statCalc();
            break;
    }
}

function statCalc() {

let totalAutoMin = autoMin + weaponMin + strength;
let totalAutoMax = autoMax + weaponMax + strength;
let totalStrength = strength;
let totalPhysDef = physDef + weaponPhysDef + headPhysDef + torsoPhysDef + armsPhysDef + legsPhysDef + feetEtherDef;
let totalEther = ether;
let totalEtherDef = etherDef + weaponEtherDef + headEtherDef + torsoEtherDef + armsEtherDef + legsEtherDef + feetEtherDef;
let totalAgility = agility - headWeight - torsoWeight - armsWeight - legsWeight - feetWeight;
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