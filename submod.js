'use strict';

class submod {
	constructor(p) {
		this.p = p;
		this.play = this.document.getElementByID("play");
	}
	foo() {
		this.play.innerHTML = `<div>${this.p}</div>`
	}
}

export default submod;
