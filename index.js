window.addEventListener("DOMContentLoaded", init);

function init () {
  yami = document.getElementById("yamischool");
  yami.addEventListener("mouseover", showYami);
  fire = document.getElementById("fireschool");
  fire.addEventListener("mouseover", showFire);
}

function LOLA() {
  window.location.href = 'monster.html';
}

function register(a) {
  var a=document.getElementById('player').value;
  alert(a+" と記入した");
}

function loadYami () {
  window.location.href = "Dungeon_Yami.html";
  alert("闇の学園に来てしまった！！");
}

function loadFire () {
  window.location.href = "Dungeon_Fire.html";
  alert("炎の仮校舎に来てしまった！！");
}

function showYami() {
  des = document.getElementById("description");
  des.textContent = "駅から歩いて数分に位置するという伝説の学園。\n\
                      魔の踏切を突破するルートと公園を迂回するルートが用意されている。\n\
                      なぜ’闇’の文字がついているのかというと。。。秘密である。";
}

function showFire() {
  des = document.getElementById("description");
  des.textContent = "かつて存在したといわれる幻の校舎。\n\
                      その姿を知る者は数多く存在する人類の中でもごく一部といわれる。\n\
                      なぜ’炎’の文字がついているのかというと。。。理由は特にない。";
}