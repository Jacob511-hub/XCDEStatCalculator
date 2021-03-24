let health = 5135;
const autoMin = 0;
const autoMax = 0;
let strength = 405;
const physDef = 0;
let ether = 417;
const etherDef = 0;
let agility = 117;
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

let headGemSlot = {
    hp: 0,
    strength: 0,
    physDef: 0,
    ether: 0,
    etherDef: 0,
    agility: 0
};

let torsoGemSlot = {
    hp: 0,
    strength: 0,
    physDef: 0,
    ether: 0,
    etherDef: 0,
    agility: 0
};

let armsGemSlot = {
    hp: 0,
    strength: 0,
    physDef: 0,
    ether: 0,
    etherDef: 0,
    agility: 0
};

let legsGemSlot = {
    hp: 0,
    strength: 0,
    physDef: 0,
    ether: 0,
    etherDef: 0,
    agility: 0
};

let feetGemSlot = {
    hp: 0,
    strength: 0,
    physDef: 0,
    ether: 0,
    etherDef: 0,
    agility: 0
};

shulkWeaponSwitch = () => {

    switch (document.getElementById('shulkWeapons').value)
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

reynWeaponSwitch = () => {

    switch (document.getElementById('reynWeapons').value)
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
        case 'atomicDriver':
            weaponMin = 750;
            weaponMax = 820;
            weaponPhysDef = 75;
            weaponEtherDef = 50;
            weaponCrit = 5;
            weaponBlock = 20;
            statCalc();
            break;
        case 'scrapDriver':
            weaponMin = 10;
            weaponMax = 16;
            weaponPhysDef = 5;
            weaponEtherDef = 0;
            weaponCrit = 0;
            weaponBlock = 5;
            statCalc();
            break;
    }
}

headSwitch = () => {

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

headGemSwitch = () => {

    switch (document.getElementById('headGem').value)
    {
        case 'none':
            headGemSlot.hp = 0;
            headGemSlot.strength = 0;
            headGemSlot.physDef = 0;
            headGemSlot.ether = 0;
            headGemSlot.etherDef = 0;
            headGemSlot.agility = 0;
            statCalc();
            break;
        case 'hp':
            headGemSlot.hp = 0.5;
            headGemSlot.strength = 0;
            headGemSlot.physDef = 0;
            headGemSlot.ether = 0;
            headGemSlot.etherDef = 0;
            headGemSlot.agility = 0;
            statCalc();
            break;
        case 'strength':
            headGemSlot.hp = 0;
            headGemSlot.strength = 100;
            headGemSlot.physDef = 0;
            headGemSlot.ether = 0;
            headGemSlot.etherDef = 0;
            headGemSlot.agility = 0;
            statCalc();
            break;
        case 'physDef':
            headGemSlot.hp = 0;
            headGemSlot.strength = 0;
            headGemSlot.physDef = 100;
            headGemSlot.ether = 0;
            headGemSlot.etherDef = 0;
            headGemSlot.agility = 0;
            statCalc();
            break;
        case 'ether':
            headGemSlot.hp = 0;
            headGemSlot.strength = 0;
            headGemSlot.physDef = 0;
            headGemSlot.ether = 100;
            headGemSlot.etherDef = 0;
            headGemSlot.agility = 0;
            statCalc();
            break;
        case 'etherDef':
            headGemSlot.hp = 0;
            headGemSlot.strength = 0;
            headGemSlot.physDef = 0;
            headGemSlot.ether = 0;
            headGemSlot.etherDef = 100;
            headGemSlot.agility = 0;
            statCalc();
            break;
        case 'agility':
            headGemSlot.hp = 0;
            headGemSlot.strength = 0;
            headGemSlot.physDef = 0;
            headGemSlot.ether = 0;
            headGemSlot.etherDef = 0;
            headGemSlot.agility = 50;
            statCalc();
            break;
    }
}

torsoSwitch = () => {

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

torsoGemSwitch = () => {

    switch (document.getElementById('torsoGem').value)
    {
        case 'none':
            torsoGemSlot.hp = 0;
            torsoGemSlot.strength = 0;
            torsoGemSlot.physDef = 0;
            torsoGemSlot.ether = 0;
            torsoGemSlot.etherDef = 0;
            torsoGemSlot.agility = 0;
            statCalc();
            break;
        case 'hp':
            torsoGemSlot.hp = 0.5;
            torsoGemSlot.strength = 0;
            torsoGemSlot.physDef = 0;
            torsoGemSlot.ether = 0;
            torsoGemSlot.etherDef = 0;
            torsoGemSlot.agility = 0;
            statCalc();
            break;
        case 'strength':
            torsoGemSlot.hp = 0;
            torsoGemSlot.strength = 100;
            torsoGemSlot.physDef = 0;
            torsoGemSlot.ether = 0;
            torsoGemSlot.etherDef = 0;
            torsoGemSlot.agility = 0;
            statCalc();
            break;
        case 'physDef':
            torsoGemSlot.hp = 0;
            torsoGemSlot.strength = 0;
            torsoGemSlot.physDef = 100;
            torsoGemSlot.ether = 0;
            torsoGemSlot.etherDef = 0;
            torsoGemSlot.agility = 0;
            statCalc();
            break;
        case 'ether':
            torsoGemSlot.hp = 0;
            torsoGemSlot.strength = 0;
            torsoGemSlot.physDef = 0;
            torsoGemSlot.ether = 100;
            torsoGemSlot.etherDef = 0;
            torsoGemSlot.agility = 0;
            statCalc();
            break;
        case 'etherDef':
            torsoGemSlot.hp = 0;
            torsoGemSlot.strength = 0;
            torsoGemSlot.physDef = 0;
            torsoGemSlot.ether = 0;
            torsoGemSlot.etherDef = 100;
            torsoGemSlot.agility = 0;
            statCalc();
            break;
        case 'agility':
            torsoGemSlot.hp = 0;
            torsoGemSlot.strength = 0;
            torsoGemSlot.physDef = 0;
            torsoGemSlot.ether = 0;
            torsoGemSlot.etherDef = 0;
            torsoGemSlot.agility = 50;
            statCalc();
            break;
    }
}

armsSwitch = () => {

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

armsGemSwitch = () => {

    switch (document.getElementById('armsGem').value)
    {
        case 'none':
            armsGemSlot.hp = 0;
            armsGemSlot.strength = 0;
            armsGemSlot.physDef = 0;
            armsGemSlot.ether = 0;
            armsGemSlot.etherDef = 0;
            armsGemSlot.agility = 0;
            statCalc();
            break;
        case 'hp':
            armsGemSlot.hp = 0.5;
            armsGemSlot.strength = 0;
            armsGemSlot.physDef = 0;
            armsGemSlot.ether = 0;
            armsGemSlot.etherDef = 0;
            armsGemSlot.agility = 0;
            statCalc();
            break;
        case 'strength':
            armsGemSlot.hp = 0;
            armsGemSlot.strength = 100;
            armsGemSlot.physDef = 0;
            armsGemSlot.ether = 0;
            armsGemSlot.etherDef = 0;
            armsGemSlot.agility = 0;
            statCalc();
            break;
        case 'physDef':
            armsGemSlot.hp = 0;
            armsGemSlot.strength = 0;
            armsGemSlot.physDef = 100;
            armsGemSlot.ether = 0;
            armsGemSlot.etherDef = 0;
            armsGemSlot.agility = 0;
            statCalc();
            break;
        case 'ether':
            armsGemSlot.hp = 0;
            armsGemSlot.strength = 0;
            armsGemSlot.physDef = 0;
            armsGemSlot.ether = 100;
            armsGemSlot.etherDef = 0;
            armsGemSlot.agility = 0;
            statCalc();
            break;
        case 'etherDef':
            armsGemSlot.hp = 0;
            armsGemSlot.strength = 0;
            armsGemSlot.physDef = 0;
            armsGemSlot.ether = 0;
            armsGemSlot.etherDef = 100;
            armsGemSlot.agility = 0;
            statCalc();
            break;
        case 'agility':
            armsGemSlot.hp = 0;
            armsGemSlot.strength = 0;
            armsGemSlot.physDef = 0;
            armsGemSlot.ether = 0;
            armsGemSlot.etherDef = 0;
            armsGemSlot.agility = 50;
            statCalc();
            break;
    }
}

legsSwitch = () => {

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

legsGemSwitch = () => {

    switch (document.getElementById('legsGem').value)
    {
        case 'none':
            legsGemSlot.hp = 0;
            legsGemSlot.strength = 0;
            legsGemSlot.physDef = 0;
            legsGemSlot.ether = 0;
            legsGemSlot.etherDef = 0;
            legsGemSlot.agility = 0;
            statCalc();
            break;
        case 'hp':
            legsGemSlot.hp = 0.5;
            legsGemSlot.strength = 0;
            legsGemSlot.physDef = 0;
            legsGemSlot.ether = 0;
            legsGemSlot.etherDef = 0;
            legsGemSlot.agility = 0;
            statCalc();
            break;
        case 'strength':
            legsGemSlot.hp = 0;
            legsGemSlot.strength = 100;
            legsGemSlot.physDef = 0;
            legsGemSlot.ether = 0;
            legsGemSlot.etherDef = 0;
            legsGemSlot.agility = 0;
            statCalc();
            break;
        case 'physDef':
            legsGemSlot.hp = 0;
            legsGemSlot.strength = 0;
            legsGemSlot.physDef = 100;
            legsGemSlot.ether = 0;
            legsGemSlot.etherDef = 0;
            legsGemSlot.agility = 0;
            statCalc();
            break;
        case 'ether':
            legsGemSlot.hp = 0;
            legsGemSlot.strength = 0;
            legsGemSlot.physDef = 0;
            legsGemSlot.ether = 100;
            legsGemSlot.etherDef = 0;
            legsGemSlot.agility = 0;
            statCalc();
            break;
        case 'etherDef':
            legsGemSlot.hp = 0;
            legsGemSlot.strength = 0;
            legsGemSlot.physDef = 0;
            legsGemSlot.ether = 0;
            legsGemSlot.etherDef = 100;
            legsGemSlot.agility = 0;
            statCalc();
            break;
        case 'agility':
            legsGemSlot.hp = 0;
            legsGemSlot.strength = 0;
            legsGemSlot.physDef = 0;
            legsGemSlot.ether = 0;
            legsGemSlot.etherDef = 0;
            legsGemSlot.agility = 50;
            statCalc();
            break;
    }
}

feetSwitch = () => {

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

feetGemSwitch = () => {

    switch (document.getElementById('feetGem').value)
    {
        case 'none':
            feetGemSlot.hp = 0;
            feetGemSlot.strength = 0;
            feetGemSlot.physDef = 0;
            feetGemSlot.ether = 0;
            feetGemSlot.etherDef = 0;
            feetGemSlot.agility = 0;
            statCalc();
            break;
        case 'hp':
            feetGemSlot.hp = 0.5;
            feetGemSlot.strength = 0;
            feetGemSlot.physDef = 0;
            feetGemSlot.ether = 0;
            feetGemSlot.etherDef = 0;
            feetGemSlot.agility = 0;
            statCalc();
            break;
        case 'strength':
            feetGemSlot.hp = 0;
            feetGemSlot.strength = 100;
            feetGemSlot.physDef = 0;
            feetGemSlot.ether = 0;
            feetGemSlot.etherDef = 0;
            feetGemSlot.agility = 0;
            statCalc();
            break;
        case 'physDef':
            feetGemSlot.hp = 0;
            feetGemSlot.strength = 0;
            feetGemSlot.physDef = 100;
            feetGemSlot.ether = 0;
            feetGemSlot.etherDef = 0;
            feetGemSlot.agility = 0;
            statCalc();
            break;
        case 'ether':
            feetGemSlot.hp = 0;
            feetGemSlot.strength = 0;
            feetGemSlot.physDef = 0;
            feetGemSlot.ether = 100;
            feetGemSlot.etherDef = 0;
            feetGemSlot.agility = 0;
            statCalc();
            break;
        case 'etherDef':
            feetGemSlot.hp = 0;
            feetGemSlot.strength = 0;
            feetGemSlot.physDef = 0;
            feetGemSlot.ether = 0;
            feetGemSlot.etherDef = 100;
            feetGemSlot.agility = 0;
            statCalc();
            break;
        case 'agility':
            feetGemSlot.hp = 0;
            feetGemSlot.strength = 0;
            feetGemSlot.physDef = 0;
            feetGemSlot.ether = 0;
            feetGemSlot.etherDef = 0;
            feetGemSlot.agility = 50;
            statCalc();
            break;
    }
}

statCalc = () => {

    let gemTotal = {
        hp: headGemSlot.hp + torsoGemSlot.hp + armsGemSlot.hp + legsGemSlot.hp + feetGemSlot.hp,
        strength: headGemSlot.strength + torsoGemSlot.strength + armsGemSlot.strength + legsGemSlot.strength + feetGemSlot.strength,
        physDef: headGemSlot.physDef + torsoGemSlot.physDef + armsGemSlot.physDef + legsGemSlot.physDef + feetGemSlot.physDef,
        ether: headGemSlot.ether + torsoGemSlot.ether + armsGemSlot.ether + legsGemSlot.ether + feetGemSlot.ether,
        etherDef: headGemSlot.etherDef + torsoGemSlot.etherDef + armsGemSlot.etherDef + legsGemSlot.etherDef + feetGemSlot.etherDef,
        agility: headGemSlot.agility + torsoGemSlot.agility + armsGemSlot.agility + legsGemSlot.agility + feetGemSlot.agility
    }
    
    if (gemTotal.hp > 0.5)
        gemTotal.hp = 0.5;
    if (gemTotal.strength > 150)
        gemTotal.strength = 150;
    if (gemTotal.physDef > 100)
        gemTotal.physDef = 100;
    if (gemTotal.ether > 150)
        gemTotal.ether = 150;
    if (gemTotal.etherDef > 100)
        gemTotal.etherDef = 100;
    if (gemTotal.agility > 50)
        gemTotal.agility = 50;

    let totalHP = health + health*gemTotal.hp;
    let totalStrength = strength + gemTotal.strength;
    let totalAutoMin = autoMin + weaponMin + totalStrength;
    let totalAutoMax = autoMax + weaponMax + totalStrength;
    let totalPhysDef = physDef + weaponPhysDef + headPhysDef + torsoPhysDef + armsPhysDef + legsPhysDef + feetEtherDef + gemTotal.physDef;
    let totalEther = ether + gemTotal.ether;
    let totalEtherDef = etherDef + weaponEtherDef + headEtherDef + torsoEtherDef + armsEtherDef + legsEtherDef + feetEtherDef + gemTotal.etherDef;
    let totalAgility = agility + gemTotal.agility - headWeight - torsoWeight - armsWeight - legsWeight - feetWeight;
    let totalCrit = crit + weaponCrit;
    let totalBlock = block + weaponBlock;

    if (totalHP > 9999)
        totalHP = 9999;

    document.getElementById("health").innerHTML = "HP: " + Math.round(totalHP);
    document.getElementById("autoMin").innerHTML = "Auto-Attack Min: " + totalAutoMin;
    document.getElementById("autoMax").innerHTML = "Auto-Attack Max: " + totalAutoMax;
    document.getElementById("strength").innerHTML = "Strength: " + totalStrength;
    document.getElementById("physDef").innerHTML = "Physical Def: " + totalPhysDef;
    document.getElementById("ether").innerHTML = "Ether: " + totalEther;
    document.getElementById("etherDef").innerHTML = "Ether Def: " + totalEtherDef;
    document.getElementById("agility").innerHTML = "Agility: " + totalAgility;
    document.getElementById("crit").innerHTML = "Critical Rate: " + totalCrit + "%";
    document.getElementById("block").innerHTML = "Block Rate: " + totalBlock + "%";

    document.getElementById("backSlash").innerHTML = "Back Slash: " + Math.round(totalAutoMin*4.2) + "-" + Math.round(totalAutoMax*4.2);
    document.getElementById("lightHeal").innerHTML = "Light Heal: " + Math.round(totalEther*3.89) + "-" + Math.round(totalEther*4.69);
    document.getElementById("slitEdge").innerHTML = "Slit Edge: " + Math.round(totalAutoMin*2.36) + "-" + Math.round(totalAutoMax*2.36);
    document.getElementById("streamEdge").innerHTML = "Stream Edge: " + Math.round(totalAutoMin*3.37) + "-" + Math.round(totalAutoMax*3.37);
    document.getElementById("airSlash").innerHTML = "Air Slash: " + Math.round(totalAutoMin*3.37) + "-" + Math.round(totalAutoMax*3.37);
    document.getElementById("shakerEdge").innerHTML = "Shaker Edge: " + Math.round(totalAutoMin*2.74) + "-" + Math.round(totalAutoMax*2.74);
    document.getElementById("buster").innerHTML = "Monado Buster: " + Math.round(totalAutoMin*7) + "-" + Math.round(totalAutoMax*7);
    document.getElementById("purge").innerHTML = "Monado Purge: " + Math.round((totalEther + weaponMin)*3.53) + "-" + Math.round((totalEther + weaponMax)*3.53);
    document.getElementById("eater").innerHTML = "Monado Eater: " + Math.round((totalEther + weaponMin)*3.03) + "-" + Math.round((totalEther + weaponMax)*3.03);
    document.getElementById("cyclone").innerHTML = "Monado Cyclone: " + Math.round((totalEther + weaponMin)*4.08) + "-" + Math.round((totalEther + weaponMax)*4.08);

    document.getElementById("boneUpper").innerHTML = "Bone Upper: " + Math.round(totalAutoMin*2.26) + "-" + Math.round(totalAutoMax*2.26);
    document.getElementById("hammerBeat").innerHTML = "Hammer Beat: " + Math.round(totalAutoMin*2.86) + "-" + Math.round(totalAutoMax*2.86);
    document.getElementById("wildDown").innerHTML = "Wild Down: " + Math.round(totalAutoMin*2.34) + "-" + Math.round(totalAutoMax*2.34);
    document.getElementById("auraBurst").innerHTML = "Aura Burst: " + Math.round((totalEther + weaponMin)*2.34) + "-" + Math.round((totalEther + weaponMax)*2.34);
    document.getElementById("warSwing").innerHTML = "War Swing: " + Math.round(totalAutoMin*0.74) + "-" + Math.round(totalAutoMax*0.74);
    document.getElementById("swordDrive").innerHTML = "Sword Drive: " + Math.round(totalAutoMin*6.37) + "-" + Math.round(totalAutoMax*6.73);
    document.getElementById("shieldBash").innerHTML = "Shield Bash: " + Math.round(totalAutoMin*2.14) + "-" + Math.round(totalAutoMax*2.14);
    document.getElementById("diveSobat").innerHTML = "Dive Sobat: " + Math.round(totalAutoMin*2.84) + "-" + Math.round(totalAutoMax*2.84);
    document.getElementById("lariat").innerHTML = "Lariat: " + Math.round(totalAutoMin*3.87) + "-" + Math.round(totalAutoMax*3.87);
}

shulkIcon.addEventListener('click', () => {
    document.getElementById("shulkWeapons").style.display = "block";
    document.getElementById("reynWeapons").style.display = "none";
    document.getElementById("shulkArtsList").style.display = "block";
    document.getElementById("reynArtsList").style.display = "none";
    health = 5135;
    strength = 405;
    ether = 417;
    agility = 117;
    statCalc();
});

reynIcon.addEventListener('click', () => {
    document.getElementById("shulkWeapons").style.display = "none";
    document.getElementById("reynWeapons").style.display = "block";
    document.getElementById("shulkArtsList").style.display = "none";
    document.getElementById("reynArtsList").style.display = "block";
    health = 8688;
    strength = 479;
    ether = 269;
    agility = 112;
    statCalc();
});

window.addEventListener('load', () => {
    statCalc();
    document.getElementById("shulkWeapons").style.display = "block";
    document.getElementById("reynWeapons").style.display = "none";
    document.getElementById("shulkArtsList").style.display = "block";
    document.getElementById("reynArtsList").style.display = "none";
});

shulkWeapons.addEventListener('change', () => {
    shulkWeaponSwitch();
});

reynWeapons.addEventListener('change', () => {
    reynWeaponSwitch();
});

head.addEventListener('change', () => {
    headSwitch();
});

headGem.addEventListener('change', () => {
    headGemSwitch();
});

torso.addEventListener('change', () => {
    torsoSwitch();
});

torsoGem.addEventListener('change', () => {
    torsoGemSwitch();
});

arms.addEventListener('change', () => {
    armsSwitch();
});

armsGem.addEventListener('change', () => {
    armsGemSwitch();
});

legs.addEventListener('change', () => {
    legsSwitch();
});

legsGem.addEventListener('change', () => {
    legsGemSwitch();
});

feet.addEventListener('change', () => {
    feetSwitch();
});

feetGem.addEventListener('change', () => {
    feetGemSwitch();
});