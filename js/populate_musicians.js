const numPerRow = 4;

function populateMusicians() {
	$.getJSON('../res/musicians.json', function(data) {
		musicians = data.musicians;
		const insertMusiciansHere = document.querySelector('#insertMusiciansHere');
		musicians.sort(Util.compareMusicians);
		for (let i in musicians) {
			insertMusiciansHere.appendChild(Util.renderMusician(musicians[i]));
		}
	});
}

function addMusicianListeners() {
	$('.flipContainer').on('click touchstart', function() {
		$(this).toggleClass('hover');
	});
}

$(document).ready(function() {
	populateMusicians();
	addMusicianListeners();
});