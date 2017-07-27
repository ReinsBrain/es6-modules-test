(function(){
	let play = document.getElementById("play");
	play.innerHTML = `
<h2>Your browser doesn't support ES6 Modules (yet) <span style="font-size:large">🙅</span></h2>
<p>That's ok, ES6 Modules are *landing soon* to a browser near you</p>
<p>Already availabe in Safari since 10.1, you'll find ES6 Modules support in the following browsers using flags:</p>
<ul>
<li>Edge 15,16 <a href="about://flags">about:flags</a></li>
<li>Firefox 54,55,56,57 <a href="about://config">about:config</a></li>
<li>Chrome 60 <a href="chrome://flags>chrome:flags">chrome:flags</a> (enable 'Experimental Web Platform features')</li>
</ul>
<p>Check current status here: <a href="http://caniuse.com/#search=modules">http://caniuse.com/#search=modules</a></p>
`
}());
