/*
 * Populates the audition information page (currently not in use)
 */

function basicInfo() {
	const audition_info = document.querySelector('#audition_info');
	audition_info.appendChild(Util.tag(
		'h1', {}, 'Auditions'
	));
}

$(document).ready(function() {
	basicInfo();
});