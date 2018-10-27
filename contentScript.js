window.addEventListener ("load", myCheck, false);

//Check if the maincontent container exists yet
function myCheck (e) {
	setInterval(checkContainer, 500);

	function checkContainer(){
		if (document.getElementById("maincontent") != null) myMain()
	}
}

function myMain (e) {
	
	var container = document.getElementById("maincontent");
	var obs = new MutationObserver(function(mutations) {
		checkOptions();
	});
	
	function checkOptions() {
		if (document.getElementsByClassName("component-response-multiple-choice__option").length != 0) {
			setTimeout(clickOption, 500);
		}
	}

	function clickOption() {
		var options = document.getElementsByClassName("component-response-multiple-choice__option");
		options[Math.floor(Math.random() * options.length)].click();
	}
	

	obs.observe(container, {childList: true});
	checkOptions();
}