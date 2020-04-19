class Developer {
    constructor(username,age){
        this.username=username;
        this.age=age;
    }


getInfo() {
    return `${this.username} ${this.age}`;
    }
}

var me = new Developer('Genx','21');
console.log(me.getInfo());