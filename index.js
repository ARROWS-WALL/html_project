window.addEventListener("DOMContentLoaded", init);

function init () {
  yami = document.getElementById("yamischool");
  yami.addEventListener("mouseover", showYami);
}

function LOLA() {
  window.location.href = 'monster.html';
}

function register(a) {
  var a=document.getElementById('player').value;
  alert(a+" と記入した");
}

function load01 () {
  window.location.href = "Dungeon_Yami.html";
  alert("闇の学園に来てしまった！！");
}

function showYami() {
  des = document.getElementById("description");
  des.textContent = "駅から歩いて数分に位置するという伝説の学園。\n\
                      魔の踏切を突破するルートと公園を迂回するルートが用意されている。\n\
                      なぜ’闇’の文字がついているのかというと。。。秘密である。";
}