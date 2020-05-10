class Monster {
    constructor (name) {
        this.name = name;
        console.log(this.name);
        this.lines = []
    }
    
    addLine (list) {
        for (let line of list) {
            this.lines.push(line);
        }
        console.log(this.lines);
    }

    toUnicode () {
        var result = "";
        for (let c of this.name) {
            result += this.char2hex(c)+",";
        }
        return result.slice(0,-1);
    }

    char2hex (char) {
        return char.charCodeAt(0).toString(16);
    }
}