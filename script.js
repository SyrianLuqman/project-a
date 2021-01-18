let headline = document.getElementsByTagName("h1")[0];

headline.onclick = function() {
	alert("you clicked on page headline");
}

function inputFeature() {
	let input = document.getElementsByTagName("input")[0];
	let printer = document.getElementById("printer");
	function changeHeadline(newText) {
		headline.textContent = newText;
	}
	
	function getInputText() {
		return input.value;
	}
	
	function addClickEvent() {
		printer.onclick = function() {
			let textToAdd = getInputText();
			changeHeadline(textToAdd);
		}
	}
	return {
		on: function() {
			addClickEvent();
		}
	}
}

inputFeature().on();