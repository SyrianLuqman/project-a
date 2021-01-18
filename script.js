let headline = document.getElementsByTagName("h1")[0];

headline.onclick = function() {
	alert("you clicked on page headline");
}

function paragraphFeature() {
	let changed = false;
	let par = document.getElementsByTagName("p")[0];
	let btn = document.getElementById("changer");
	function changeColor() {
		par.style.color = "red";
	}
	function addEvent() {
		btn.onclick = function () {
			if(! changed)
				changeColor();
		}
	}
	return {
		on: function() {
			addEvent();
		}
	}
}

paragraphFeature().on();
