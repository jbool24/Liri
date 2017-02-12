const colors = require('colors');
//----Marquee ----------------------

class Marquee {
    constructor(title) {
        this.base = "/";
        this.border = this.base.repeat(68);
        this.title = title || "SuperBanner";
        this.titleLen = this.title.length;
        this.init();
    }

    init() {
        this.marquee = this.border + "\n" + "///// "
                                   + colors.blue.bold(this.title)
                                   + " "  + " "
                                   + this.base.repeat(60 - this.titleLen)
                                   + "\n" + this.border;
    }

    show() {
        console.log(this.marquee);
    }

}
//----End Marquee ------------------

module.exports = Marquee;
