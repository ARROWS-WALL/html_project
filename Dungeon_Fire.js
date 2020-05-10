monster = new Monster("GAIA");
lines = []
lines.push("ようこそ　地獄のテーマパークへ")
lines.push("ここには君を死へと導くアミューズメントでいっぱいだ！！")
lines.push("心行くまで楽しんでくれ。")
lines.push("いや、心逝くまでたの死んでくれ　というべきか")
lines.push("やべー　うまいこと言ったつもりが場が凍り付いちゃったよ")
lines.push("ここ炎のダンジョンなのに場が凍り付くってどうしたらいいんだ。。。")
lines.push("そうだ。あともうちょっと待っても勇者が勝たなかったら")
lines.push("必殺技を放ってこのダンジョンを氷のダンジョンと改名しよう！！")
lines.push("ほらほらｗｗｗ頑張らないとはなっちゃうぞ、必殺技ｗｗｗ")
lines.push("じゃ必殺技放っちゃおうかーーー")
monster.addLine(lines);
monster.skill = "凍てつく寒いギャグ"

var count = 100;

function countdown(){
  console.log(count--);
  time = document.getElementById('time');
  time.textContent = "残り　"+ count +"sec";
}

// プレーヤーHP
function inspect() {
  document.getElementById('monster_name').textContent = '倒すべき魔物';
  document.getElementById('hint').textContent = monster.toUnicode();

  var id = setInterval(function(){
    countdown();

    if(count <= 8){
      log = document.getElementById('message');
      log.textContent = "魔物は"+monster.skill+"を放った";
      log.classList.add("redtext");
      alert("You Died!!")
      window.location.href = 'death.html';
    }

    let idx = Math.floor((100-count)/10);
    document.getElementById('message').textContent = monster.lines[idx];

  }, 1000);
}


function expose(){
  var tbox_value = document.getElementById('name').value;
  if (tbox_value == monster.name) {
    alert("「あああああ！！！」");
    alert("「魔王様・・・どうかご無事で・・・！」");
    // クリア画面へと進む
    window.location.href = 'index.html'
  }
  else {
    alert("「これで終わりよ！！」")
    alert("魔獣は"+monster.skill+"を放った")
    // goto death page
    window.location.href = 'death.html'
  }
}

function escape(){
  alert("「二度と来ないで」")
  window.location.href = 'index.html';
}
