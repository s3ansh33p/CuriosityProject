const Utils7C = class Utils7C {

    static get logPrefix() {
        return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][new Date().getDay()]+" "+new Date().toLocaleTimeString()+":"+new Date().getMilliseconds();
    }

    static info(...args) {
        console.log(`${this.logPrefix} %c[INFO]%c ${args.join(' ')}`,"color: #00ff00;","");
    }

    static error(...args) {
        console.log(`${this.logPrefix} %c>> [ERROR]%c ${args.join(' ')}`,"color: #ff0000;","");
    }

    static get categories() {
        return ["Critical Thinking","Creativity","Commitment","Communication","Collaboration","Citizenship","Continuous Improvement"];
    }

    static get colors() {
        return ["#ddc501","#ddc501","#ba2527","#ba2527","#2b953d","#2b953d","#1aa1be"];
    }

    static formatNumber(number, decimals, dec_point, thousands_sep) {
        // *     example: formatNumber(1234.56, 2, ',', ' ');
        // *     return: '1 234,56'
        number = (number + '').replace(',', '').replace(' ', '');
        var n = !isFinite(+number) ? 0 : +number,
            prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
            sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
            dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
            s = '',
            toFixedFix = function(n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
            };
        // Fix for IE parseFloat(0.55).toFixed(0) = 0;
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
        if (s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
        }
        if ((s[1] || '').length < prec) {
            s[1] = s[1] || '';
            s[1] += new Array(prec - s[1].length + 1).join('0');
        }
        return s.join(dec);
    }

    static arrayAverage(d) {
        return d.reduce((a, b) => a + b) / d.length;
    }

}
