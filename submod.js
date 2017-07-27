'use strict';
/* NOTE: no namespacing required - it is local to whatever javascript code that calls it */
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
