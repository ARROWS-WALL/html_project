
var count = 100;
// プレーヤーHP
function inspect3(){
  document.getElementById('monster_name').innerHTML = '倒すべき魔物';
  document.getElementById('hint3').innerHTML ='4D, 65, 72, 69, 6E, 61'

  var countdown = function(){
    console.log(count--);
    time = document.getElementById('time');
    time.textContent = "残り　"+ count +"sec";
  }
  var id = setInterval(function(){
    countdown();
    if(count <= 100 && count > 90){
      document.getElementById('message3').innerHTML = 'ここから先は通しません！！';
    }else if(count <= 90 && count > 80){
      document.getElementById('message3').innerHTML = '何故あの方の邪魔をする！？';
    }else if(count <= 80 && count > 70){
      document.getElementById('message3').innerHTML = 'あの人はずっと苦しんできたんだ！！';
    }else if(count <= 70 && count > 60){
      document.getElementById('message3').innerHTML = '数十年程度で寿命という名の救済が訪れるお前たちに、何がわかる！';
    }else if(count <= 60 && count > 50){
      document.getElementById('message3').innerHTML = '彼はその苦しみに三百年耐えた・・・！';
    }else if(count <= 50 && count > 40){
      document.getElementById('message3').innerHTML = 'それを邪魔するというのなら・・・';
    }else if(count <= 40 && count > 30){
      document.getElementById('message3').innerHTML = 'お前にはここで消えてもらう！！';
    }else if(count <= 30 && count > 20){
      document.getElementById('message3').innerHTML = '母なる海よ・・・';
    }else if(count <= 20 && count > 10){
      document.getElementById('message3').innerHTML = 'この愚者に天罰を！！';
    }
    if(count <= 8){
      log = document.getElementById('message3');
      log.textContent = "魔物は大波を放った";
      log.classList.add("redtext");
      alert("You Died!!")
      window.location.href = 'death.html';
    }}, 1000);
}


function expose3(){
  var tbox_value = document.getElementById('name3').value;
  if(tbox_value == "Merina"){
    alert("「あああああ！！！」");
    alert("「魔王様・・・どうかご無事で・・・！」");
    window.location.href = 'index2.html'
    // クリア画面へと進む
  }else{
    alert("「これで終わりよ！！」")
    alert("魔獣は大波を放った")
    window.location.href = 'death.html'
  }
}


function escape3(){
  alert("「二度と来ないで」")
  window.location.href = 'index.html';
}
