const Utils7C = class Utils7C {

    static get categories() {
        return ["Critical Thinking","Creativity","Commitment","Communication","Collaboration","Citizenship","Continuous Improvement"];
    }

    static get colors() {
        return ["#ddc501","#ddc501","#ba2527","#ba2527","#2b953d","#2b953d","#1aa1be"];
    }

    static error(...args) {
        console.log(`${this.prefix} %c>> [ERROR]%c ${args.join(' ')}`,"color: #ff0000;","");
    }

}
