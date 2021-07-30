const Logger = class Logger {
    static get prefix() {
        return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][new Date().getDay()]+" "+new Date().toLocaleTimeString()+":"+new Date().getMilliseconds();
    }

    static info(...args) {
        console.log(`${this.prefix} %c[INFO]%c ${args.join(' ')}`,"color: #00ff00;","");
    }

    static error(...args) {
        console.log(`${this.prefix} %c>> [ERROR]%c ${args.join(' ')}`,"color: #ff0000;","");
    }

    static route(...args) {
        console.log(`${this.prefix} %c[ROUTE]%c ${args.join(' ')}`,"color: #0000ff;","");
    }

}
