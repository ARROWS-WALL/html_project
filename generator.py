def produceHTML():
    html = """
    <!DOCTYPE html>
    <html>

    <head>
    <meta charset="utf-8">
    <title>魔界</title>
    <link rel="stylesheet" href="Dungeon.css">
    <script src="monster.js"></script>
    <script src="Dungeon_random.js"></script>
    </head>

    <body>
    <h1 id="monster_name">魔獣</h1>
    <img class="monster" src="monster.png" style="width:600px;height:600px;">

    <p1 id="message">
        よく来たな勇者（仮）よ。
    </p1>
    <br>
    <div>
        <p>
        <input type="button" value="逃げる" onclick="escape();">
        <input type="button" value="正体を探る" onclick="inspect();">
        </p>
        <input type="text" id="name" placeholder="正体を入力">
        <input type="button" value="正体を暴く" onclick="expose();">
        <text>制限時間<span id="time" class="redText"></span></text>
    </div>

    <div>
        <p2 id="hint">秘文字</p2>
    </div>
    
    <img class="list" src="list.png" style="width:600px;height:300px;">
    <p2>
        <br>
        このゲームは、UTF-8のASCIIコードが１６進数で文字コード化されている魔物たちの名前をを当てるゲームです。<br>
        「正体を探る」ボタンを押すと、「秘文字」の欄が１６進数の文字コードに変わるので、それを解読しましょう！<br>
        解読したら「正体を入力」欄に答えを入力し、「正体を暴く」を押しましょう！<br>
        ただし、制限時間内に解読できない、または間違えてしまうと、エネミーの攻撃を受けてしまいます。<br>
    </p2>

    </body>

    </html>
    """
    with open("Dungeon_Random.html","w",encoding="utf-8") as f:
        f.write(html)

def produceJS(name, lines, finalSkill):
    linePush = ""
    for line in lines:
        linePush += "lines.push(\""+line+"\");\n"

    jscode = "monster = new Monster(\""+name+"\");\n"+"lines = [];\n"+ linePush+"""
    monster.addLine(lines);
    monster.skill = \""""+finalSkill+"""\"

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
    """
    with open("Dungeon_Random.js","w",encoding='utf-8') as f:
        f.write(jscode)

if __name__ == "__main__":
    name = "Monster"
    lines = [
        "example00",
        "example01",
        "example02",
        "example03",
        "example04",
        "example05",
        "example06",
        "example07",
        "example08",
        "example09",
    ]
    skill = "FinalAttack"
    produceJS(name,lines,skill)
    produceHTML()
