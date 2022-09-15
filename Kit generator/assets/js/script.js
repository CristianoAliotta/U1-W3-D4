let weapons = [
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/3/3c/ADAR2-15Image.png",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/3/31/AK101_Image.png",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/1/13/AK-74Image.png",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/2b/Akms.png",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/f/f1/ASh_12.png",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/1/13/DT_MDR_5.56x45_Assault_Rifle.png",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/5/5f/HK416Image.png",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/5/5b/G36_View.png",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/29/M4a1.png",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/29/M4a1.png",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/68/Mk47_Mutant_View.png",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/c/ce/RD-704.jpg",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/a/ae/DS_Arms_SA-58_OSW_Para_7.62x51.png",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/7/70/AK-545Short_View.png",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/a/a8/ScarH_Image.gif",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/0/00/SCAR-L_Insp.gif",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/4/4d/TX-15_View.PNG",
];
let armor = [
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/9/91/PACA_icon.png",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/61/6B23-1icon.png",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/b/bb/Highcom_Trooper_TFO_armor_%28multicam%29_icon.png",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/2b/6B13_assault_armor_icon.gif",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/9/96/KORUNDIcon.png",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/a/a1/GZHELKArmorIcon.png",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/c/c6/Slick.gif",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/d5/5.11_Hexgrid_plate_carrier.png",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/0/00/THOR_IC_Icon.png",
];
let helmet = [
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/20/TankHelm2.png",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/b/ba/PSH-97_-Jeta-_helmet_Icon.png",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/68/LZSh_light_helmet_icon.png",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/9/9e/NFM_HJELM_helmet_Icon.png",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/8/83/MICH_Icon_2002.PNG",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/67/MSA_TC_800_Icon.png",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/5/5c/Bastion_Icon.png",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/8/89/Team_Wendy_EXFIL_Ballistic_Helmet_icon.gif",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/f/ff/Caiman_icon.png",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/b/bb/ULACH_Icon.gif",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/3/30/Vulkan-5_%28LShZ-5%29_heavy_helmet_icon.png",
];
let headset = [
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/e/e1/Gssh.png",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/8/82/SordinIcon.png",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/6c/Earmorm32icon.png",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/0/0c/PeltorTacticalSporticon.png",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/a/a2/Walker%27s_XCEL_500BT_icon.png",
  "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/62/Peltor_ComTac_4.png",
];

function getRandomInteger(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomWeapon() {
  let randomIndex = getRandomInteger(0, weapons.length - 1);
  let Link = weapons[randomIndex];
  document.getElementById("random-weapon").src = Link;
}
function randomHelmet() {
  let randomIndex = getRandomInteger(0, helmet.length - 1);
  let Link = helmet[randomIndex];
  document.getElementById("random-helmet").src = Link;
}
function randomHeadset() {
  let randomIndex = getRandomInteger(0, headset.length - 1);
  let Link = headset[randomIndex];
  document.getElementById("random-headset").src = Link;
}
function randomArmor() {
  let randomIndex = getRandomInteger(0, armor.length - 1);
  let Link = armor[randomIndex];
  document.getElementById("random-armor").src = Link;
}
